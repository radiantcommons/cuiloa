import { TxResult } from "@buf/cometbft_cometbft.bufbuild_es/cometbft/abci/v1/types_pb";
import { OutputView, OutputView_Opaque, SpendView, SpendView_Opaque } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/component/shielded_pool/v1/shielded_pool_pb";
import { type AddressView } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/keys/v1/keys_pb";
import { type Action, ActionView, Transaction } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/transaction/v1/transaction_pb";
import { createGetter } from "./getter/create-getter";
import { SwapView, SwapView_Opaque, SwapClaimView, SwapClaimView_Opaque, type SwapBody, type BatchSwapOutputData, SwapPlaintext, SwapClaim } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/component/dex/v1/dex_pb";
import { DelegatorVoteView, DelegatorVoteView_Opaque } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/component/governance/v1/governance_pb";
import { getAsset1, getAsset2 } from "@penumbra-zone/getters/src/trading-pair";
import { Fee } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/component/fee/v1/fee_pb";

export const makeActionView = ({ action }: Action): ActionView | undefined => {
  switch (action.case) {
    case "spend":
      return new ActionView({
        actionView: {
          case: "spend",
          value: new SpendView({
            spendView: {
              case: "opaque",
              value: new SpendView_Opaque({
                spend: action.value,
              }),
            },
          }),
        },
      });
    case "output":
      return new ActionView({
        actionView: {
          case: "output",
          value: new OutputView({
            outputView: {
              case: "opaque",
              value: new OutputView_Opaque({
                output: action.value,
              }),
            },
          }),
        },
      });
    case "swap":
      return new ActionView({
        actionView: {
          case: "swap",
          value: new SwapView({
            swapView: {
              case: "opaque",
              value: new SwapView_Opaque({
                swap: action.value,
              }),
            },
          }),
        },
      });
    case "swapClaim":
      return new ActionView({
        actionView: {
          case: "swapClaim",
          value: new SwapClaimView({
            swapClaimView: {
              case: "opaque",
              value: new SwapClaimView_Opaque({
                swapClaim: action.value,
              }),
            },
          }),
        },
      });
    case "delegatorVote":
      return new ActionView({
        actionView: {
          case: "delegatorVote",
          value: new DelegatorVoteView({
            delegatorVote: {
              case: "opaque",
              value: new DelegatorVoteView_Opaque({
                delegatorVote: action.value,
              }),
            },
          }),
        },
      });
    // TODO: None of these actions have *View equivalents (and, transatively, Opaque/Decoded variants). Is exhausitively constructing an ActionView from them OK?
    case "validatorDefinition":
    case "ibcRelayAction":
    case "proposalSubmit":
    case "proposalWithdraw":
    case "validatorVote":
    case "proposalDepositClaim":
    case "positionOpen":
    case "positionClose":
    case "positionWithdraw":
    case "positionRewardClaim":
    case "communityPoolSpend":
    case "communityPoolOutput":
    case "communityPoolDeposit":
    case "undelegateClaim":
    case "ics20Withdrawal":
    case "delegate":
    case "undelegate":
      return new ActionView({
        actionView: action,
      });
    default:
      return undefined;
  }
};


export const getWalletId = createGetter((addressView?: AddressView) =>
  addressView?.addressView.case === "decoded" && addressView.addressView.value.walletId
  ? addressView.addressView.value.walletId
  : undefined,
);

export const getSpendNote = createGetter((spendView?: SpendView) =>
  spendView?.spendView.case === "visible" ? spendView.spendView.value?.note : undefined,
);

export const getSpend = createGetter((spendView?: SpendView) =>
  spendView?.spendView.value?.spend ? spendView.spendView.value.spend : undefined,
);

export const getOutput = createGetter((outputView?: OutputView) =>
  outputView?.outputView.value?.output ? outputView.outputView.value.output : undefined,
);

export const getOutputNote = createGetter((outputView?: OutputView) =>
  outputView?.outputView.case === "visible" ? outputView.outputView.value.note : undefined,
);

export const getOutputKey = createGetter((outputView?: OutputView) =>
  outputView?.outputView.case === "visible" ? outputView.outputView.value.payloadKey : undefined,
);

export const getSwap = createGetter((swapView?: SwapView) =>
  swapView?.swapView.value?.swap ? swapView.swapView.value.swap : undefined,
);

export const getSwapMetadata1 = createGetter((swapView?: SwapView) =>
  swapView?.swapView.case === "visible" || swapView?.swapView.case === "opaque"
  ? swapView.swapView.value.asset1Metadata
  : undefined,
);

export const getSwapMetadata2 = createGetter((swapView?: SwapView) =>
  swapView?.swapView.case === "visible" || swapView?.swapView.case === "opaque"
  ? swapView.swapView.value.asset2Metadata
  : undefined,
);

export const getSwapBodyAmounts = createGetter((swapBody?: SwapBody) =>
  swapBody?.delta1I && swapBody.delta2I ? { delta1I: swapBody.delta1I, delta2I: swapBody.delta2I }: undefined,
);

export const getSwapBodyPayload = createGetter((swapBody?: SwapBody) =>
  swapBody?.payload ? swapBody.payload : undefined,
);

export const getSwapBodyFeeCommitment = createGetter((swapBody?: SwapBody) =>
  swapBody?.feeCommitment ? swapBody.feeCommitment : undefined,
);

export const getBatchSwapOutputData = createGetter((swapView?: SwapView) =>
  swapView?.swapView.case === "visible" || swapView?.swapView.case === "opaque"
  ? swapView.swapView.value.batchSwapOutputData
  : undefined,
);

export const getOutputValue1FromSwapView = createGetter((swapView?: SwapView) =>
  swapView?.swapView.case === "opaque" ? swapView.swapView.value.output1Value : undefined,
);

export const getOutputValue2FromSwapView = createGetter((swapView?: SwapView) =>
  swapView?.swapView.case === "opaque" ? swapView.swapView.value.output2Value : undefined,
);

// SwapView_Visible getters
export const getSwapPlaintext = createGetter((swapView?: SwapView) =>
  swapView?.swapView.case === "visible" ? swapView.swapView.value.swapPlaintext : undefined,
);

export const getSwapTransactionId = createGetter((swapView?: SwapView) =>
  swapView?.swapView.case === "visible" ? swapView.swapView.value.claimTx : undefined,
);

export const getSwapNoteViewOutput1 = createGetter((swapView?: SwapView) =>
  swapView?.swapView.case === "visible" ? swapView.swapView.value.output1 : undefined,
);

export const getSwapNoteViewOutput2 = createGetter((swapView?: SwapView) =>
  swapView?.swapView.case === "visible" ? swapView.swapView.value.output2 : undefined,
);

// all BatchSwapOutputData getters
export const getBatchSwapOutputTradingPair = createGetter((b?: BatchSwapOutputData) => b?.tradingPair);

export const getBatchSwapOutputAsset1 = getBatchSwapOutputTradingPair.pipe(getAsset1);

export const getBatchSwapOutputAsset2 = getBatchSwapOutputTradingPair.pipe(getAsset2);

export const getBatchSwapOutputDelta1Amount = createGetter((b?: BatchSwapOutputData) => b?.delta1);

export const getBatchSwapOutputDelta2Amount = createGetter((b?: BatchSwapOutputData) => b?.delta2);

export const getBatchSwapOutputLambda1Amount = createGetter((b?: BatchSwapOutputData) => b?.lambda1);

export const getBatchSwapOutputLambda2Amount = createGetter((b?: BatchSwapOutputData) => b?.lambda2);

export const getBatchSwapOutputUnfilled1Amount = createGetter((b?: BatchSwapOutputData) => b?.unfilled1);

export const getBatchSwapOutputUnfilled2Amount = createGetter((b?: BatchSwapOutputData) => b?.unfilled2);

export const getSwapPlaintextTradingPair = createGetter((swapPlaintext?: SwapPlaintext) =>
  swapPlaintext?.tradingPair ? swapPlaintext.tradingPair : undefined,
);

export const getSwapPlainTextAsset1 = getSwapPlaintextTradingPair.pipe(getAsset1);

export const getSwapPlainTextAsset2 = getSwapPlaintextTradingPair.pipe(getAsset2);

export const getSwapPlaintextDelta1 = createGetter((swapPlaintext?: SwapPlaintext) =>
  swapPlaintext?.delta1I ? swapPlaintext.delta1I : undefined,
);

export const getSwapPlaintextDelta2 = createGetter((swapPlaintext?: SwapPlaintext) =>
  swapPlaintext?.delta2I ? swapPlaintext.delta2I : undefined,
);

export const getSwapPlaintextFee = createGetter((swapPlaintext?: SwapPlaintext) =>
  swapPlaintext?.claimFee ? swapPlaintext.claimFee : undefined,
);

export const getSwapPlaintextAddress = createGetter((swapPlaintext?: SwapPlaintext) =>
  swapPlaintext?.claimAddress ? swapPlaintext.claimAddress : undefined,
);

export const getFeeAmount = createGetter((fee?: Fee) => fee?.amount ? fee.amount : undefined);

export const getFeeAssetId = createGetter((fee?: Fee) => fee?.assetId ? fee.assetId : undefined);

export const getSwapClaimViewBody = createGetter((swapClaimView?: SwapClaimView) =>
  swapClaimView?.swapClaimView.value?.swapClaim?.body
  ? swapClaimView.swapClaimView.value.swapClaim?.body
  : undefined,
);

export const getSwapClaimViewZKProof = createGetter((swapClaimView?: SwapClaimView) =>
  swapClaimView?.swapClaimView.value?.swapClaim?.proof
  ? swapClaimView.swapClaimView.value.swapClaim.proof
  : undefined,
);

export const getSwapClaimViewEpochDuration = createGetter((swapClaimView?: SwapClaimView) =>
  swapClaimView?.swapClaimView.value?.swapClaim
  ? swapClaimView.swapClaimView.value.swapClaim.epochDuration
  : undefined,
);

export const getSwapClaimBodyNullifier = createGetter((swapClaimView?: SwapClaimView) =>
  swapClaimView?.swapClaimView.value?.swapClaim?.body?.nullifier
  ? swapClaimView?.swapClaimView.value?.swapClaim?.body?.nullifier
  : undefined,
);

export const getSwapClaimBodyFee = createGetter((swapClaimView?: SwapClaimView) =>
  swapClaimView?.swapClaimView.value?.swapClaim?.body?.fee
  ? swapClaimView?.swapClaimView.value?.swapClaim?.body?.fee
  : undefined,
);

export const getSwapClaimBodyOutput1Commitment = createGetter((swapClaimView?: SwapClaimView) =>
  swapClaimView?.swapClaimView.value?.swapClaim?.body?.output1Commitment
  ? swapClaimView?.swapClaimView.value?.swapClaim?.body?.output1Commitment
  : undefined,
);

export const getSwapClaimBodyOutput2Commitment = createGetter((swapClaimView?: SwapClaimView) =>
  swapClaimView?.swapClaimView.value?.swapClaim?.body?.output2Commitment
  ? swapClaimView?.swapClaimView.value?.swapClaim?.body?.output2Commitment
  : undefined,
);

export const getSwapClaimBodyBatchOutputData = createGetter((swapClaimView?: SwapClaimView) =>
  swapClaimView?.swapClaimView.value?.swapClaim?.body?.outputData
  ? swapClaimView?.swapClaimView.value?.swapClaim?.body?.outputData
  : undefined,
);

export const getSwapClaimNoteOutput1 = createGetter((swapClaimView?: SwapClaimView) =>
  swapClaimView?.swapClaimView.case === "visible"
  ? swapClaimView.swapClaimView.value.output1
  : undefined,
);

export const getSwapClaimNoteOutput2 = createGetter((swapClaimView?: SwapClaimView) =>
  swapClaimView?.swapClaimView.case === "visible"
  ? swapClaimView.swapClaimView.value.output2
  : undefined,
);

export const getSwapClaimTransactionId = createGetter((swapClaimView?: SwapClaimView) =>
  swapClaimView?.swapClaimView.case === "visible"
  ? swapClaimView.swapClaimView.value.swapTx
  : undefined,
);

export const transactionFromBytes = (txBytes : Buffer) => {
  const txResult = TxResult.fromBinary(txBytes);
  return Transaction.fromBinary(txResult.tx);
};

// NOTE: As of now, cannot completely decode the Protobuf data for an IBC client related transaction
//       due to ibc.core.client.v1.MsgCreateClient not having a defined URL protobuf schema that can be resolved.
//       What data that can be returned by decoding from TxResult and Transaction is not all that useful.
export const ibcEventFromBytes = (txBytes : Buffer) : [Transaction, TxResult] => {
  const ibcEvent = TxResult.fromBinary(txBytes);
  const tx = Transaction.fromBinary(ibcEvent.tx);
  return [tx, ibcEvent];
};
