import type { FC } from "react";
import { type SwapView as SwapViewT, type SwapClaimView as SwapClaimViewT, type Swap as SwapT, type TradingPair as TradingPairT, type SwapPayload as SwapPayloadT, type BatchSwapOutputData as BatchSwapOutputDataT, type SwapPlaintext as SwapPlaintextT, type PositionOpen as PositionOpenT, type Position as PositionT, type TradingFunction as TradingFunctionT, PositionState_PositionStateEnum, type PositionClose as PositionCloseT, type PositionWithdraw as PositionWithdrawT, type PositionRewardClaim as PositionRewardClaimT} from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/component/dex/v1/dex_pb";
import type { Output as OutputT, NoteView as NoteViewT, Spend as SpendT, NotePayload as NotePayloadT } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/component/shielded_pool/v1/shielded_pool_pb";
import type { ActionView as ActionViewT } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/transaction/v1/transaction_pb";
import { type ValidatorVote as ValidatorVoteT, type ChangedAppParameters as ChangeAppParametersT, type DelegatorVoteView as DelegatorVoteViewT, type ProposalSubmit as ProposalSubmitT, type ProposalWithdraw as ProposalWithdrawT, type Proposal_CommunityPoolSpend, type Proposal_Emergency, type Proposal_FreezeIbcClient, type Proposal_ParameterChange, type Proposal_Signaling, type Proposal_UnfreezeIbcClient, type Proposal_UpgradePlan, type Vote as VoteT, type ProposalDepositClaim as ProposalDepositClaimT, type CommunityPoolSpend as CommunityPoolSpendT, type CommunityPoolOutput as CommunityPoolOutputT, type CommunityPoolDeposit as CommunityPoolDepositT} from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/component/governance/v1/governance_pb";
import { getAddress, getAddressIndex } from "@penumbra-zone/getters/src/address-view";
import { getAsset1, getAsset2 } from "@penumbra-zone/getters/src/trading-pair";
import { getBatchSwapOutputDelta1Amount, getBatchSwapOutputDelta2Amount, getBatchSwapOutputTradingPair, getBatchSwapOutputLambda1Amount, getBatchSwapOutputLambda2Amount, getBatchSwapOutputUnfilled1Amount, getBatchSwapOutputUnfilled2Amount , getBatchSwapOutputData, getOutput, getOutputKey, getOutputNote, getSpend, getSpendNote, getSwap, getSwapBodyAmounts, getSwapBodyFeeCommitment, getSwapBodyPayload, getSwapMetadata1, getSwapMetadata2, getWalletId, getOutputValue1FromSwapView, getOutputValue2FromSwapView, getSwapTransactionId, getSwapPlaintext, getSwapNoteViewOutput1, getSwapNoteViewOutput2, getSwapPlaintextTradingPair, getSwapPlaintextDelta1, getSwapPlaintextDelta2, getSwapPlaintextFee, getSwapPlaintextAddress, getFeeAmount, getFeeAssetId, getSwapClaimViewZKProof, getSwapClaimViewBody, getSwapClaimViewEpochDuration, getSwapClaimBodyNullifier, getSwapClaimBodyFee, getSwapClaimBodyOutput1Commitment, getSwapClaimBodyOutput2Commitment, getSwapClaimBodyBatchOutputData, getSwapClaimNoteOutput1, getSwapClaimNoteOutput2, getSwapClaimTransactionId, getDelegatorVoteViewBody, getDelegatorVoteViewAuthSig, getDelegatorVoteViewProof, getDelegatorVoteViewNote, getDelegatorVoteBodyProposal, getDelegatorVoteBodyStartPosition, getDelegatorVoteBodyVote, getDelegatorVoteBodyValue, getDelegatorVoteBodyUnbondedAmount, getDelegatorVoteBodyNullifier, getDelegatorVoteBodyRK, getValidatorIdentityKey, getValidatorConsensusKey, getValidatorName, getValidatorWebsite, getValidatorDescription, getValidatorEnabled, getValidatorFundingStream, getValidatorSequenceNumber, getValidatorGovernanceKey, getValidatorAuthSig, getFundingStreamToAddress, getFundingStreamRateBps, getProposalSubmitDepositAmount, getProposalId, getProposalTitle, getProposalDescription, getProposalPayload, getChangeAppSctParameter, getChangeAppCommunityPoolParameter, getChangeAppGovernanceParameter, getChangeAppIbcParameters, getChangeAppStakeParameters, getChangeAppFeeParameters, getChangeAppDistributionParameters, getChangeAppFundingParameters, getChangeAppShieldedParameters, getChangeAppDexParameters, getChangeAppAuctionParameters, getGasPriceBlockSpacePrice, getGasPriceCompactBlockSpacePrice, getGasPriceVerificationPrice, getGasPriceExecutionPrice, getValidatorVoteBodyProposal, getValidatorVoteBodyVote, getValidatorVoteBodyIdentityKey, getValidatorVoteBodyGovernanceKey, getValidatorVoteBodyReason, getValidatorVoteBody, getValidatorVoteAuthSig, getProposalDepositClaimAmount, getProposalDepositClaimOutcome, getProposalDepositClaimOutcomeReason, getPositionOpen, getPositionTradingFunction, getPositionNonce, getPositionState, getPositionStateSequence, getPositionReservesAmount1, getPositionReservesAmount2, getPositionCloseOnFill, getTradingFunctionFee, getTradingFunctionAmountQ, getTradingFunctionAmountP, getTradingFunctionPair, getPositionClosePositionId, getPositionWithdrawPositionId, getPositionWithdrawBalanceCommitment, getPositionWithdrawSequence, getPositionRewardClaimPositionId, getPositionRewardClaimBalanceCommitment, getCommunityPoolSpendValue, getCommunityPoolOutputValue, getCommunityPoolOutputAddress, getCommunityPoolDepositValue, getUndelegateClaimIdentityKey, getUndelegateClaimStartEpochIndex, getUndelegateClaimPenalty, getUndelegateClaimBalanceCommitment, getUndelegateClaimUnbondingStartHeight, getUndelegateClaimProof, getIcs20WithdrawalAmount, getIcs20WithdrawalDenom, getIcs20WithdrawalDestinationAddress, getIcs20WithdrawalReturnAddress, getIcs20WithdrawalTimeoutHeight, getIcs20WithdrawalTimeoutTime, getIcs20WithdrawalSourceChannel, getDelegateIdentityKey, getDelegateEpochIndex, getDelegateUnbondedAmount, getDelegateDelegationAmount, getUndelegateStartEpochIndex, getUndelegateUnbondedAmount, getUndelegateDelegationAmount, getUndelegateFromEpoch, getUndelegateIdentityKey, getInputFromActionDutchAuctionScheduleView, getOutputIdFromActionDutchAuctionScheduleView, getMaxOutputFromActionDutchAuctionScheduleView, getMinOutputFromActionDutchAuctionScheduleView, getStartHeightFromActionDutchAuctionScheduleView, getEndHeightFromActionDutchAuctionScheduleView, getStepCountFromActionDutchAuctionScheduleView, getNonceFromActionDutchAuctionScheduleView, getActionDutchAuctionScheduleViewAuctionId, getActionDutchAuctionScheduleViewInputMetadata, getActionDutchAuctionScheduleViewOutputMetadata, getAuctionIdFromActionDutchAuctionEnd, getReservesCommitmentFromActionDutchAuctionWithdrawView, getReservesFromActionDutchAuctionWithdrawView, getAuctionIdFromActionDutchAuctionWithdrawView, getSeqFromActionDutchAuctionWithdrawView } from "@/lib/protobuf";
import { joinLoHiAmount } from "@penumbra-zone/types/src/amount";
import { getAssetId } from "@penumbra-zone/getters/src/metadata";
import { getAmount, getMetadata, getEquivalentValues, getExtendedMetadata, getAssetIdFromValueView } from "@penumbra-zone/getters/src/value-view";
import type { Address as AddressT, AddressIndex as AddressIndexT, WalletId as WalletIdT, PayloadKey as PayloadKeyT } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/keys/v1/keys_pb";
import { type AssetId as AssetIdT, type EquivalentValue as EquivalentValueT, type Metadata as MetadataT, type Value as ValueT, type ValueView as ValueViewT } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/asset/v1/asset_pb";
import { FlexCol, FlexRow } from "../ui/flex";
import type { Amount as AmountT } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/num/v1/num_pb";
import type { FeeParameters as FeeParametersT, Fee as FeeT } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/component/fee/v1/fee_pb";
import type { ValidatorDefinition as ValidatorDefinitionT, FundingStream as FundingStreamT, UndelegateClaim as UndelegateClaimT, Delegate as DelegateT, Undelegate as UndelegateT } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/component/stake/v1/stake_pb";
import type { IbcRelay, Ics20Withdrawal as Ics20WithdrawalT } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/component/ibc/v1/ibc_pb";
import type { Height as HeightT} from "@buf/cosmos_ibc.bufbuild_es/ibc/core/client/v1/client_pb";
import type { Epoch as EpochT } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/component/sct/v1/sct_pb";
import type { ActionDutchAuctionEnd as ActionDutchAuctionEndT, ActionDutchAuctionScheduleView as ActionDutchAuctionScheduleViewT, ActionDutchAuctionWithdrawView as ActionDutchAuctionWithdrawViewT } from "@buf/penumbra-zone_penumbra.bufbuild_es/penumbra/core/component/auction/v1/auction_pb";

// Explicit typing for the ProposalSubmit.payload field message variants.
type ProposalSubmitKind = {
  value: Proposal_Signaling;
  case: "signaling";
} | {
  value: Proposal_Emergency;
  case: "emergency";
} | {
  value: Proposal_ParameterChange;
  case: "parameterChange";
} | {
  value: Proposal_CommunityPoolSpend;
  case: "communityPoolSpend";
} | {
  value: Proposal_UpgradePlan;
  case: "upgradePlan";
} | {
  value: Proposal_FreezeIbcClient;
  case: "freezeIbcClient";
} | {
  value: Proposal_UnfreezeIbcClient;
  case: "unfreezeIbcClient";
} | {
  case: undefined;
  value?: undefined
};

const PayloadKey: FC<{ payloadKey: PayloadKeyT }> = ({ payloadKey }) => {
  return (
    <div className="flex">
      <p>Payload Key</p>
      <pre>{payloadKey.inner}</pre>
    </div>
  );
};

export const GenericKV: FC<{ name: string, value: Uint8Array, className?: string }> = ({ name, value, className }) => {
  return (
    <FlexRow className={cn("flex-wrap w-full justify-between border", className ?? "")}>
      <div className="w-1/2">
        <p className="text-start p-1">{name}</p>
      </div>
      <div className="w-1/2">
        <pre className="text-start p-1 overflow-hidden overflow-ellipsis">{uint8ArrayToBase64(value)}</pre>
      </div>
    </FlexRow>
  );
};

// TODO: Currently abusing GenericKV. These keys diverge drastically on encoding and should reflect this to the degree possible.
const OvkWrappedKey = GenericKV;
const WrappedMemoKey = GenericKV;
const EphemeralKey = GenericKV;
const ZKSwapProof = GenericKV;
const StateCommitment = GenericKV;
const BalanceCommitment = GenericKV;
const EncryptedSwap = GenericKV;
const RSeed = GenericKV;
const TransactionId = GenericKV;
const Nullifier = GenericKV;
const SpendAuthSignature = GenericKV;
const SpendVerificationKey = GenericKV;
const ZKDelegatorVoteProof = GenericKV;
const AuthSignature = GenericKV;
const IdentityKey = GenericKV;
const GovernanceKey = GenericKV;
const ConsensusKey = GenericKV;
const PositionId = GenericKV;
const Penalty = GenericKV;
const UndelegateClaimProof = GenericKV;
const AuctionId = GenericKV;

const EquivalentValueView: FC<{ equivalentValue: EquivalentValueT }> = ({ equivalentValue }) => {
  return (
    <FlexCol>
      <p>Equivalent Value</p>
      {equivalentValue.equivalentAmount ? <Amount amount={equivalentValue.equivalentAmount}/> : null}
      {equivalentValue.numeraire ? <Metadata metaData={equivalentValue.numeraire}/> : null}
      <FlexRow>
        <p>Height</p>
        <pre>{equivalentValue.asOfHeight.toString()}</pre>
      </FlexRow>
    </FlexCol>
  );
};

const Height: FC<{ height: HeightT }> = ({ height }) => {
  return (
    <FlexCol className="w-full">
      <p className="w-full">Height</p>
      <FlexRow className="flex-wrap w-full">
        <p>Revision Number</p>
        <pre>{height.revisionNumber.toString()}</pre>
      </FlexRow>
      <FlexRow className="flex-wrap w-full">
        <p>Revision Height</p>
        <pre>{height.revisionHeight.toString()}</pre>
      </FlexRow>
    </FlexCol>
  );
};

const Epoch: FC<{ epoch: EpochT, label?: string }> = ({ epoch, label }) => {
  return (
    <FlexCol className="w-full">
      {(label ?? "") ? <p className="w-full">{label}</p> : <p className="w-full">Epoch</p>}
      <FlexRow className="flex-wrap w-full">
        <p>Index</p>
        <pre>{epoch.index.toString()}</pre>
      </FlexRow>
      <FlexRow className="flex-wrap w-full">
        <p>Start Height</p>
        <pre>{epoch.startHeight.toString()}</pre>
      </FlexRow>
    </FlexCol>
  );
};

// NOTE: the way ValueView's opaque vs visible cases are handled is by the fact that metadata, equivalentValues, and extendedMetadata
//       should never be defined in the case of an UnknownAssetId and we only render assetId when valueView.case is unknownAssetId.
const ValueView: FC<{ valueView: ValueViewT, label?: "Asset 1" | "Asset 2" | string }> = ({ valueView, label }) => {
  const amount = getAmount(valueView);
  const metadata = getMetadata.optional()(valueView);
  const equivalentValues = getEquivalentValues.optional()(valueView);
  const extendedMetadata = getExtendedMetadata.optional()(valueView);
  const assetId = getAssetIdFromValueView(valueView);
  return (
    <FlexCol>
      {(label ?? "") ? <p>{label} ValueView</p> : <p>ValueView</p>}
      <Amount amount={amount} label={(label ?? "") ? `${label} Amount` : "Amount"}/>
      {metadata ? <Metadata metaData={metadata} label={label}/> : null}
      {equivalentValues ? (
        <FlexRow>
          {equivalentValues.map((equivalentValue, i) => <EquivalentValueView equivalentValue={equivalentValue} key={i}/>)}
        </FlexRow>
      ) : null}
      {extendedMetadata ? (
        <FlexRow>
          <p>Extended Metadata</p>
          <pre>{extendedMetadata.toJsonString()}</pre>
        </FlexRow>
      ) : null}
      {valueView.valueView.case === "unknownAssetId" ? (
        <AssetId assetId={assetId}/>
      ) : null}
    </FlexCol>
  );
};

const Value: FC<{ value: ValueT, label?: string }> = ({ value, label }) => {
  return (
    <FlexCol>
      {(label ?? "") ? <p>{label}</p> : <p>Value</p>}
      {value.amount ? <Amount amount={value.amount}/> : null}
      {value.assetId ? <AssetId assetId={value.assetId}/> : null}
    </FlexCol>
  );
};

const NotePayload: FC<{ notePayload: NotePayloadT }> = ({ notePayload }) => {
  return (
    <div className="flex flex-wrap w-full">
      <p className="w-full">NotePayload</p>
      <div className="flex flex-wrap w-full">
        {notePayload.noteCommitment ? (
          <div className="flex">
            <p className="w-full">Note Commitment</p>
            <pre className="w-full">{notePayload.noteCommitment.inner}</pre>
          </div>
        ) : null}
        <EphemeralKey value={notePayload.ephemeralKey} name="Ephemeral Key"/>
        {notePayload.encryptedNote ? (
          <div className="flex flex-wrap w-full">
            <p className="w-full">Encrypted Note</p>
            <pre className="w-full">{notePayload.encryptedNote.inner}</pre>
          </div>
        ) : null}
      </div>
    </div>
  );
};


const Output: FC<{ output: OutputT }> = ({ output }) => {
  const body = output.body;
  return (
    <div className="flex flex-col flex-wrap w-full">
      {body ? (
        <div className="flex flex-wrap w-full">
          <p className="w-full">OutputBody</p>
          {body.notePayload ? (
            <NotePayload notePayload={body.notePayload}/>
          ) : null}
          {body.balanceCommitment ? (
            <BalanceCommitment value={body.balanceCommitment.inner} name="Balance Commitment"/>
          ) : null}
          <WrappedMemoKey value={body.wrappedMemoKey} name="Wrapped Memo Key"/>
          <OvkWrappedKey value={body.ovkWrappedKey} name="Ovk Wrapped Key"/>
        </div>
      ) : null}
      {output.proof ? (
        <div className="flex flex-wrap w-full">
          <p className="w-full">Proof</p>
          <pre className="w-full">{output.proof.inner}</pre>
        </div>
      ) : null}
    </div>
  );
};

const Spend : FC<{spend: SpendT}>= ({spend}) => {
  const spendBody = spend.body;
  return (
    <div className="flex flex-col flex-wrap w-full">
      <div className="flex flex-col flex-wrap w-full">
        {spend.proof ? (
          <div className="flex flex-wrap w-full">
            <p className="w-full">Proof</p>
            <pre className="w-full">{spend.proof.inner}</pre>
          </div>
        ) : null}
        {spend.authSig ? (
        <div className="flex flex-wrap w-full">
          <p className="w-full">AuthSig</p>
          <pre className="w-full">{spend.authSig.inner}</pre>
        </div>
        ) : null}
        {spendBody ? (
          <div className="flex flex-wrap w-full">
            <p className="w-full">Body</p>
            <div className="flex flex-wrap w-full">
              {spendBody.nullifier ? (
                <div className="flex flex-wrap w-full">
                  <p className="w-full">Nullifier</p>
                  <pre className="w-full">{spendBody.nullifier.inner}</pre>
                </div>
              ) : spendBody.rk ? (
                <div className="flex flex-wrap w-full">
                  <p className="w-full">Randomized Validating Key</p>
                  <pre className="w-full">{spendBody.rk.inner}</pre>
                </div>
              ) : <p>None</p>}
            </div>
          </div>
        ): null}
      </div>
    </div>
  );
};

const Address :FC<{ address: AddressT }> = ({ address }) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <p>Altbech32</p>
        <p>{address.altBech32m}</p>
      </div>
      <div className="flex">
        <p>Inner</p>
        <pre>{address.inner}</pre>
      </div>
    </div>
  );
};

const AddressIndex : FC<{ index: AddressIndexT }> = ({ index }) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <p>Account</p>
        <p>{index.account}</p>
      </div>
      <div className="flex">
        <p>Randomizer</p>
        <pre>{index.randomizer}</pre>
      </div>
    </div>
  );
};

const WalletId : FC<{ walletId: WalletIdT }> = ({ walletId }) => {
  return (
    <div className="flex flex-col">
      <p>WalletID</p>
      <div className="flex">
        <p>WalletID inner</p>
        <pre>{walletId.inner}</pre>
      </div>
    </div>
  );
};


const NoteView : FC<{note: NoteViewT}>= ({ note }) => {
  const address = getAddress.optional()(note.address);
  const walletId = getWalletId.optional()(note.address);
  const addressIndex = getAddressIndex.optional()(note.address);

  return (
    <div className="flex flex-col flex-wrap w-full">
      <p className="w-full">TxNote</p>
      {address ? (
        <div className="flex flex-col flex-wrap w-full">
          <p className="w-full">Address</p>
          <Address address={address}/>
          {walletId ? <WalletId walletId={walletId}/> : null}
          {addressIndex ? <AddressIndex index={addressIndex}/> : null}
        </div>
      ) : null}
      <div className="flex flex-col flex-wrap">
        <p className="w-full">rseed</p>
        <pre>{note.rseed}</pre>
      </div>
    </div>
  );
};

const SpendView : FC<{ spend: SpendT, noteView?: NoteViewT}> = ({spend, noteView}) => {
  return (
    <div className="flex flex-col flex-wrap w-full">
      <p className="w-full">Spend View</p>
      <Spend spend={spend} />
      {noteView ? (
        <NoteView note={noteView}/>
      ) : null}
    </div>
  );
};

const OutputView: FC<{ output: OutputT, noteView?: NoteViewT, payloadKey?: PayloadKeyT }> = ({ output, noteView, payloadKey }) => {
  return (
    <div className="flex flex-col flex-wrap w-full">
      <p className="w-full">Output View</p>
      <Output output={output} />
      {noteView ? (
        <NoteView note={noteView}/>
      ) : null}
      {payloadKey ? (
        <PayloadKey payloadKey={payloadKey}/>
      ) : null}
    </div>
  );
};

const AssetId: FC<{ assetId: AssetIdT, label?: string }> = ({ assetId, label }) => {
  return (
    <FlexRow>
      {(label ?? "") ? <p>{label}</p> : <p>Asset ID</p>}
      <FlexRow>
        <p>inner</p>
        <p>{assetId.inner}</p>
      </FlexRow>
      <FlexRow>
        <p>Alt Bech32</p>
        <p>{assetId.altBech32m}</p>
      </FlexRow>
      <FlexRow>
        <p>Alt Base Denomination</p>
        <p>{assetId.altBaseDenom}</p>
      </FlexRow>
    </FlexRow>
  );
};

const TradingPair: FC<{ tradingPair?: TradingPairT }> = ({ tradingPair }) => {
  const asset1 = getAsset1(tradingPair);
  const asset2 = getAsset2(tradingPair);
  return (
    <FlexCol>
      <p>Trading Pair</p>
      <AssetId assetId={asset1} label="Asset 1"/>
      <AssetId assetId={asset2} label="Asset 2"/>
    </FlexCol>
  );
};

const Amount: FC<{ amount: AmountT, label?: string }> = ({ amount, label }) => {
  return (
    <FlexRow>
      {(label ?? "") ? <p>{label}</p> : <p>Amount</p>}
      <p>{joinLoHiAmount(amount).toString()}</p>
    </FlexRow>
  );
};

const SwapPayload: FC<{ swapPayload: SwapPayloadT }> = ({ swapPayload }) => {
  return (
    <FlexCol>
      {swapPayload.commitment ? <StateCommitment value={swapPayload.commitment?.inner} name="Commitment"/> : null}
      <EncryptedSwap value={swapPayload.encryptedSwap} name="Encrypted Swap"/>
    </FlexCol>
  );
};

const BatchSwapOutputData: FC<{ batchSwapOutput: BatchSwapOutputDataT }> = ({ batchSwapOutput }) => {
  const delta1I = getBatchSwapOutputDelta1Amount(batchSwapOutput);
  const delta2I = getBatchSwapOutputDelta2Amount(batchSwapOutput);
  const lambda1 = getBatchSwapOutputLambda1Amount(batchSwapOutput);
  const lambda2 = getBatchSwapOutputLambda2Amount(batchSwapOutput);
  const unfilled1 = getBatchSwapOutputUnfilled1Amount(batchSwapOutput);
  const unfilled2 = getBatchSwapOutputUnfilled2Amount(batchSwapOutput);
  const tradingPair = getBatchSwapOutputTradingPair(batchSwapOutput);
  const height = batchSwapOutput.height;
  const startingEpoch = batchSwapOutput.epochStartingHeight;
  return (
    <FlexCol>
      <p>BatchSwapOutputData</p>
      <Amount amount={delta1I} label="delta_1_i"/>
      <Amount amount={delta2I} label="delta_2_i"/>
      <Amount amount={lambda1} label="lambda_1"/>
      <Amount amount={lambda2} label="lambda_2"/>
      <Amount amount={unfilled1} label="unfilled_1"/>
      <Amount amount={unfilled2} label="unfilled_2"/>
      <FlexRow>
        <p>Height</p>
        <pre>{height.toString()}</pre>
      </FlexRow>
      <TradingPair tradingPair={tradingPair}/>
      <FlexRow>
        <p>Epoch Starting Height</p>
        <pre>{startingEpoch.toString()}</pre>
      </FlexRow>
    </FlexCol>
  );
};

const Metadata: FC<{ metaData: MetadataT, label?: string }> = ({ metaData, label }) => {
  const assetId = getAssetId(metaData);
  return (
    <FlexCol>
      {(label ?? "") ? <p>{label}</p> : <p>Asset Metadata</p>}
      <FlexRow>
        <p>Name</p>
        <p>{metaData.name}</p>
      </FlexRow>
      <FlexRow>
        <p>Description</p>
        <p>{metaData.description}</p>
      </FlexRow>
      <FlexRow>
        <p>Symbol</p>
        <p>{metaData.symbol}</p>
      </FlexRow>
      <AssetId assetId={assetId} label="Penumbra Asset ID"/>
      <FlexRow>
        <p>Display Denomination</p>
        <pre>{metaData.display}</pre>
      </FlexRow>
      <FlexRow>
        <p>Base Denomination</p>
        <pre>{metaData.base}</pre>
      </FlexRow>
      {/* TODO: This needs to be fleshed out. Skipping aliases and information for exponents. Could easily blow up the UI without collapsable elements as it is. */}
      <FlexRow>
        {metaData.denomUnits.map((denomUnit, i) => <p key={i}>{denomUnit.denom}</p>)}
      </FlexRow>
      {/* TODO: Skipping AssetImage images field entirely */}
      <FlexRow>
        <p>Asset Images</p>
        <p>Unimplemented</p>
      </FlexRow>
    </FlexCol>
  );
};

const Vote: FC<{ vote: VoteT }> = ({ vote }) => {
  return (
    <FlexRow>
      <p>Vote</p>
      <pre>{vote.vote.toString()}</pre>
    </FlexRow>
  );
};

const Fee: FC<{ fee: FeeT}> = ({ fee }) => {
  const amount = getFeeAmount(fee);
  const assetId = getFeeAssetId.optional()(fee);
  return (
    <FlexCol>
      <p>Fee</p>
      <Amount amount={amount}/>
      {assetId ? <AssetId assetId={assetId} label="Token ID"/> : null}
    </FlexCol>
  );
};

const FeeParameters: FC<{ feeParameters: FeeParametersT }> = ({ feeParameters }) => {
  const blockSpacePrice = getGasPriceBlockSpacePrice(feeParameters);
  const compactBlockSpacePrice = getGasPriceCompactBlockSpacePrice(feeParameters);
  const verificationPrice = getGasPriceVerificationPrice(feeParameters);
  const executionPrice = getGasPriceExecutionPrice(feeParameters);
  return (
    <FlexCol className="w-full">
      <p>Gas Prices</p>
      <FlexRow>
        <p>Block Space Price</p>
        <pre>{blockSpacePrice.toString()}</pre>
      </FlexRow>
      <FlexRow>
        <p>Compact Block Space Price</p>
        <pre>{compactBlockSpacePrice.toString()}</pre>
      </FlexRow>
      <FlexRow>
        <p>Verification Price</p>
        <pre>{verificationPrice.toString()}</pre>
      </FlexRow>
      <FlexRow>
        <p>Execution Price</p>
        <pre>{executionPrice.toString()}</pre>
      </FlexRow>
    </FlexCol>
  );
};

const FundingStream: FC<{ fundingStream: FundingStreamT }> = ({ fundingStream }) => {
  const fundingStreamToAddress = getFundingStreamToAddress.optional()(fundingStream);
  const fundingStreamBps = getFundingStreamRateBps.optional()(fundingStream);
  return (
    <FlexCol className="flex-overflow w-full">
      {fundingStreamToAddress !== undefined ?
        <FlexRow className="flex-overflow w-full">
          <p>Destination Address</p>
          <pre>{fundingStreamToAddress}</pre>
        </FlexRow> : null}
      {fundingStreamBps !== undefined ?
        <FlexRow>
          <p>Reward BPS</p>
          <pre>{fundingStreamToAddress}</pre>
        </FlexRow> : null}
    </FlexCol>
  );
};

const SwapPlaintext: FC<{ swapPlaintext: SwapPlaintextT }> = ({ swapPlaintext }) => {
  const tradingPair = getSwapPlaintextTradingPair(swapPlaintext);
  const delta1I = getSwapPlaintextDelta1(swapPlaintext);
  const delta2I = getSwapPlaintextDelta2(swapPlaintext);
  const claimFee = getSwapPlaintextFee(swapPlaintext);
  const claimAddress = getSwapPlaintextAddress(swapPlaintext);
  return (
    <FlexCol>
      <TradingPair tradingPair={tradingPair}/>
      <Amount amount={delta1I} label="Delta 1"/>
      <Amount amount={delta2I} label="Delta 2"/>
      <Fee fee={claimFee}/>
      <Address address={claimAddress}/>
      <RSeed value={swapPlaintext.rseed} name="rseed"/>
    </FlexCol>
  );
};

const ChangeParameters: FC<{
  parameters: ChangeAppParametersT,
  label: "Old App Parameters" | "New App Parameters"
}> = ({ parameters, label }) => {
  const sctParameters = getChangeAppSctParameter.optional()(parameters);
  const communityPoolParameters = getChangeAppCommunityPoolParameter.optional()(parameters);
  const governanceParameters = getChangeAppGovernanceParameter.optional()(parameters);
  const ibcParameters = getChangeAppIbcParameters.optional()(parameters);
  const stakeParameters = getChangeAppStakeParameters.optional()(parameters);
  const feeParameters = getChangeAppFeeParameters.optional()(parameters);
  const distributionParameters = getChangeAppDistributionParameters.optional()(parameters);
  const fundingParameters = getChangeAppFundingParameters.optional()(parameters);
  const shieldedParameters = getChangeAppShieldedParameters.optional()(parameters);
  const dexParameters = getChangeAppDexParameters.optional()(parameters);
  const auctionParameters = getChangeAppAuctionParameters.optional()(parameters);
  return (
    <FlexCol className="w-full">
      <p>{label}</p>
      {sctParameters ? (
        <FlexRow className="flex-wrap w-full">
          <p>SCT Parameters</p>
          <pre>{sctParameters.epochDuration.toString()}</pre>
        </FlexRow>
      ) : null}
      {communityPoolParameters ? (
        <FlexRow className="flex-wrap w-full">
          <p className="w-full">Community Pool Parameter</p>
          <div className="w-full">
            <p>Community Pool Spend Proposals Enabled</p>
            <pre>{communityPoolParameters.communityPoolSpendProposalsEnabled}</pre>
          </div>
        </FlexRow>
      ) : null}
      {governanceParameters ? (
        <FlexCol className="w-full">
          <p>Governance Parameters</p>
          <FlexRow>
            <p>Proposal Voting Blocks</p>
            <pre>{governanceParameters.proposalVotingBlocks.toString()}</pre>
          </FlexRow>
          {governanceParameters.proposalDepositAmount ? (
            <FlexRow>
              <p>Proposal Deposit Amount</p>
              <Amount amount={governanceParameters.proposalDepositAmount} label=""/>
            </FlexRow>
          ) : null}
          <FlexRow>
            <p>Proposal Valid Quorum</p>
            <pre>{governanceParameters.proposalValidQuorum}</pre>
          </FlexRow>
          <FlexRow>
            <p>Proposal Pass Threshold</p>
            <pre>{governanceParameters.proposalValidQuorum}</pre>
          </FlexRow>
          <FlexRow>
            <p>Proposal Slash Threshold</p>
            <pre>{governanceParameters.proposalSlashThreshold}</pre>
          </FlexRow>
        </FlexCol>
      ) : null}
      {ibcParameters ? (
        <FlexCol className="w-full">
          <p className="w-full">IBC Parameters</p>
          <FlexRow className="flex-wrap w-full">
            <p>IBC Enabled</p>
            <pre>{ibcParameters.ibcEnabled}</pre>
          </FlexRow>
          <FlexRow className="flex-wrap w-full">
            <p>Inbound ICS-20 Transfers Enabled</p>
            <pre>{ibcParameters.inboundIcs20TransfersEnabled}</pre>
          </FlexRow>
          <FlexRow className="flex-wrap w-full">
            <p>Outbound ICS-20 Transfers Enabled</p>
            <pre>{ibcParameters.outboundIcs20TransfersEnabled}</pre>
          </FlexRow>
        </FlexCol>
      ) : null}
      {stakeParameters ? (
        <FlexCol className="w-full">
          <p>Stake Parameters</p>
          <FlexRow className="w-full">
            <p>Unbonding Epochs</p>
            <pre>{stakeParameters.unbondingDelay.toString()}</pre>
          </FlexRow>
          <FlexRow className="w-full">
            <p>Active Validators Limit</p>
            <pre>{stakeParameters.activeValidatorLimit.toString()}</pre>
          </FlexRow>
          <FlexRow className="w-full">
            <p>Base Reward Rate</p>
            <pre>{stakeParameters.baseRewardRate.toString()}</pre>
          </FlexRow>
          <FlexRow className="w-full">
            <p>Slashing Penalty Misbehavior</p>
            <pre>{stakeParameters.slashingPenaltyMisbehavior.toString()}</pre>
          </FlexRow>
          <FlexRow className="w-full">
            <p>Slashing Penalty Downtown</p>
            <pre>{stakeParameters.slashingPenaltyDowntime.toString()}</pre>
          </FlexRow>
          <FlexRow className="w-full">
            <p>Signed Blocks Window Length</p>
            <pre>{stakeParameters.signedBlocksWindowLen.toString()}</pre>
          </FlexRow>
          <FlexRow className="w-full">
            <p>Missed Blocks Maximium</p>
            <pre>{stakeParameters.missedBlocksMaximum.toString()}</pre>
          </FlexRow>
          <FlexRow className="w-full">
            <p>Minimum Validator Stake</p>
            {stakeParameters.minValidatorStake ? <Amount amount={stakeParameters.minValidatorStake}/> : null}
          </FlexRow>
          <FlexRow className="w-full">
            <p>Unbonding Delay</p>
            <pre>{stakeParameters.unbondingDelay.toString()}</pre>
          </FlexRow>
        </FlexCol>
      ) : null}
      {feeParameters ? (
        <FlexCol className="w-full">
          <p>Fee Parameters</p>
          <FeeParameters feeParameters={feeParameters}/>
        </FlexCol>
      ) : null}
      {distributionParameters ? (
        <FlexCol>
          <p>Distribution Parameters</p>
          <FlexRow>
            <p>Staking Issuance Per Block</p>
            <pre>{distributionParameters.stakingIssuancePerBlock.toString()}</pre>
          </FlexRow>
        </FlexCol>
      ) : null}
      {fundingParameters ? (
        <FlexRow className="w-full">
          <p>Funding Parameters</p>
          {/* TODO?: there are no fields to this message type */}
          <pre>This message type currently has no fields defined by Penumbra.</pre>
        </FlexRow>
      ) : null}
      {shieldedParameters ? (
        <FlexCol>
          <p>Shielded Parameters</p>
          {shieldedParameters.fixedFmdParams ? (
            <FlexCol>
              <p>Fuzzy Message Detection</p>
              <FlexRow>
                <p>Precision Bits</p>
                <pre>{shieldedParameters.fixedFmdParams.precisionBits}</pre>
              </FlexRow>
              <FlexRow>
                <p>As Of Block Height</p>
                <pre>{shieldedParameters.fixedFmdParams.asOfBlockHeight.toString()}</pre>
              </FlexRow>
            </FlexCol>
          ) : null}
        </FlexCol>
      ) : null}
      {dexParameters ? (
        <FlexCol>
          <p>Dex Parameters</p>
          <FlexRow>
            <p>Is Enabled</p>
            <pre>{dexParameters.isEnabled}</pre>
          </FlexRow>
          <FlexCol>
            <p>Fixed Candidates</p>
            {dexParameters.fixedCandidates.map((assetId, i) => <AssetId assetId={assetId} key={i}/>)}
          </FlexCol>
          <FlexRow>
            <p>Max Hops</p>
            <pre>{dexParameters.maxHops}</pre>
          </FlexRow>
          <FlexRow>
            <p>Max Positions Per Pair</p>
            <pre>{dexParameters.maxPositionsPerPair}</pre>
          </FlexRow>
        </FlexCol>
      ) : null}
      {auctionParameters ? (
        <FlexRow className="w-full">
        <p>Auction Parameters</p>
        {/* TODO?: there are no fields to this message type */}
        <pre>This message type currently has no fields defined by Penumbra.</pre>
      </FlexRow>
      ) : null}
    </FlexCol>
  );
};

const ProposalPayload: FC<{ payload: ProposalSubmitKind }> = ({ payload }) => {
  switch (payload.case) {
    case "signaling":
      return (
        <FlexRow>
          <p>Commit</p>
          <pre>{payload.value.commit}</pre>
        </FlexRow>
      );
    case "emergency":
      return (
        <FlexRow>
          <p>Emergency Halt Chain</p>
          <pre>{payload.value.haltChain}</pre>
        </FlexRow>
      );
    case "parameterChange":
      return (
        <FlexCol>
          <p>Change App Parameters</p>
          {payload.value.oldParameters ?
            <ChangeParameters
              parameters={payload.value.oldParameters}
              label="Old App Parameters"/> : null}
          {payload.value.newParameters ?
            <ChangeParameters
              parameters={payload.value.newParameters}
              label="New App Parameters"/> : null}
          <FlexCol>
            <p>New Parameters</p>
          </FlexCol>
        </FlexCol>
      );
    case "communityPoolSpend": {
      const ibcValue = payload.value.transactionPlan?.value;
      const ibcTypeURL = payload.value.transactionPlan?.typeUrl;
      return (
        <FlexCol className="flex-overflow w-full">
          <p className="w-full">Community Pool Spend</p>
          {ibcValue ? (
            <FlexCol className="flex-overflow w-full">
              <p className="w-full">Value</p>
              <pre className="w-full">{ibcValue}</pre>
            </FlexCol>
          ) : null}
          {ibcTypeURL?.length !== undefined ? (
            <FlexCol className="flex-overflow w-full">
              <p>Proto URL Resource</p>
              <pre className="w-full">{ibcTypeURL}</pre>
            </FlexCol>
          ) : null}
      </FlexCol>
      );
    }
    case "upgradePlan":
      return (
      <FlexRow>
        <p>Upgrade Height</p>
        <pre>{payload.value.height.toString()}</pre>
      </FlexRow>
      );
    case "freezeIbcClient":
      return (
        <FlexRow>
          <p>Freeze IBC Client ID</p>
          <pre>{payload.value.clientId}</pre>
        </FlexRow>
      );
    case "unfreezeIbcClient":
      return (
        <FlexRow>
          <p>Unfreeze IBC Client ID</p>
          <pre>{payload.value.clientId}</pre>
        </FlexRow>
      );
    // TODO: start adding UI motifs/messaging for bad/unlikely outcomes when rendering queried data.
    default:
      break;
  }
};

const TradingFunction: FC<{ tradingFunction: TradingFunctionT }> = ({ tradingFunction }) => {
  const tradingFee = getTradingFunctionFee(tradingFunction);
  // TODO: protobuf defs say that each Amount is not actually an Amount but an integer with the same width of an Amount.
  //       How should these actually be represented?
  const amountQ = getTradingFunctionAmountQ.optional()(tradingFunction);
  const amountP = getTradingFunctionAmountP.optional()(tradingFunction);
  const tradingPair = getTradingFunctionPair.optional()(tradingFunction);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Trading Function</p>
      <FlexRow className="flex-wrap w-full">
        <p>Fee</p>
        <pre>{tradingFee}</pre>
      </FlexRow>
      {/* TODO: Also, how should these values be communicated? Should BareTradingFunction be explicilty described. */}
      {amountQ ? <Amount amount={amountQ} label="Q"/> : null}
      {amountP ? <Amount amount={amountP} label="P"/> : null}
      {tradingPair ? <TradingPair tradingPair={tradingPair}/> : null}
    </FlexCol>
  );
};

const Position: FC<{ position: PositionT }> = ({ position }) => {
  const phi = getPositionTradingFunction.optional()(position);
  const nonce = getPositionNonce(position);
  const positionState = getPositionState.optional()(position);
  const positionSequence = getPositionStateSequence.optional()(position);
  const positionReservesAmount1 = getPositionReservesAmount1.optional()(position);
  const positionReservesAmount2 = getPositionReservesAmount2.optional()(position);
  const closeOnFill = getPositionCloseOnFill(position);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Position</p>
      {phi ? <TradingFunction tradingFunction={phi}/> : null}
      <FlexRow className="flex-wrap w-full">
        <p>Nonce</p>
        <pre>{nonce.toString()}</pre>
      </FlexRow>
      {positionState ? (
        <FlexCol>
          <p>Position State</p>
          {positionState.state === PositionState_PositionStateEnum.UNSPECIFIED ? <pre>UNSPECIFIED</pre>
          : positionState.state === PositionState_PositionStateEnum.OPENED ? <pre>OPENED</pre>
          : positionState.state === PositionState_PositionStateEnum.CLOSED ? <pre>CLOSED</pre>
          : positionState.state === PositionState_PositionStateEnum.WITHDRAWN ? <pre>WITHDRAWN</pre>
          : null}
          {positionSequence !==  undefined && positionState.state === PositionState_PositionStateEnum.WITHDRAWN ? (
            <FlexRow className="flex-wrap w-full">
              <p>Sequence</p>
              <pre>{positionSequence.toString()}</pre>
            </FlexRow>
          ) : null}
        </FlexCol>
      ) : null}
      <FlexCol className="w-full">
        <p className="w-full">Reserves</p>
        {positionReservesAmount1 ? <Amount amount={positionReservesAmount1} label="r1"/> : null}
        {positionReservesAmount2 ? <Amount amount={positionReservesAmount2} label="r2"/> : null}
      </FlexCol>
      <FlexRow className="flex-wrap w-full">
        <p>Close On Fill</p>
        <pre>{closeOnFill}</pre>
      </FlexRow>
    </FlexCol>
  );
};

const Swap: FC<{ swap: SwapT}> = ({ swap }) => {
  const swapBody = swap.body;
  const { delta1I, delta2I } = getSwapBodyAmounts(swapBody);
  const feeCommitment = getSwapBodyFeeCommitment(swapBody);
  const payload = getSwapBodyPayload(swapBody);
  return (
    <FlexCol>
      {swap.proof ? <ZKSwapProof name="ZK Proof" value={swap.proof.inner}/> : null}
      {swapBody ? (
        <FlexCol>
          <p>Swap Body</p>
          <TradingPair tradingPair={swapBody.tradingPair}/>
          <Amount amount={delta1I} label="delta_1_i"/>
          <Amount amount={delta2I} label="delta_2_i"/>
          <BalanceCommitment value={feeCommitment.inner} name="Fee Commitment"/>
          <SwapPayload swapPayload={payload}/>
        </FlexCol>
      ) : null}
    </FlexCol>
  );
};

const SwapViewOpaque: FC<{ swapView: SwapViewT }> = ({ swapView }) => {
  const batchSwapOutput = getBatchSwapOutputData.optional()(swapView);
  const metadata1 = getSwapMetadata1.optional()(swapView);
  const metadata2 = getSwapMetadata2.optional()(swapView);
  const outputValue1 = getOutputValue1FromSwapView.optional()(swapView);
  const outputValue2 = getOutputValue2FromSwapView.optional()(swapView);
  return (
    <FlexCol>
      {batchSwapOutput ? <BatchSwapOutputData batchSwapOutput={batchSwapOutput}/> : null}
      {outputValue1 ? <ValueView valueView={outputValue1} label="Asset 1"/> : null}
      {outputValue2 ? <ValueView valueView={outputValue2} label="Asset 2"/> : null}
      {metadata1 ? <Metadata metaData={metadata1} label="Asset 1"/> : null}
      {metadata2 ? <Metadata metaData={metadata2} label="Asset 2"/> : null}
    </FlexCol>
  );
};

const SwapViewVisible: FC<{ swapView: SwapViewT }> = ({ swapView }) => {
  const swapPlaintext = getSwapPlaintext(swapView);
  const transactionId = getSwapTransactionId.optional()(swapView);
  const batchSwapOutput = getBatchSwapOutputData.optional()(swapView);
  const noteOuput1 = getSwapNoteViewOutput1.optional()(swapView);
  const noteOuput2 = getSwapNoteViewOutput2.optional()(swapView);
  const metadata1 = getSwapMetadata1.optional()(swapView);
  const metadata2 = getSwapMetadata2.optional()(swapView);
  return (
    <FlexCol>
      <SwapPlaintext swapPlaintext={swapPlaintext}/>
      {transactionId ? <TransactionId value={transactionId.inner} name="Transaction ID"/> : null}
      {batchSwapOutput ? <BatchSwapOutputData batchSwapOutput={batchSwapOutput}/> : null}
      {noteOuput1 ? <NoteView note={noteOuput1}/> : null}
      {noteOuput2 ? <NoteView note={noteOuput2}/> : null}
      {metadata1 ? <Metadata metaData={metadata1} label="Asset 1"/> : null}
      {metadata2 ? <Metadata metaData={metadata2} label="Asset 2"/> : null}
    </FlexCol>
  );
};

const SwapView: FC<{ swapView: SwapViewT }> = ({ swapView }) => {
  // NOTE: everything but Swap itself and SwapPlaintext (for SwapView_Visible) are optional.
  //       While less than hygenic, it would theoretically be fine to just have all getters defined here
  //       and render purely on ternary checks. SwapPlaintext would be made optional but would only render
  //       if a SwapView_Visible, etc.
  const swap = getSwap(swapView);
  return (
    <FlexCol>
      <p>Swap View</p>
      <Swap swap={swap}/>
      {swapView.swapView.case === "visible" ? (
        <SwapViewVisible swapView={swapView}/>
      ) : swapView.swapView.case === "opaque" ? (
        <SwapViewOpaque swapView={swapView}/>
      ) : null}
    </FlexCol>
  );
};


const SwapClaimView: FC<{ swapClaimView: SwapClaimViewT}> = ({ swapClaimView }) => {
  // TODO: Need to clarify what is truly optional because the buf.build comments do not imply these are all optional
  //       but the source code for the protobufs has *everything* BUT EpochDuration as optional.
  // SwapClaim fields
  const swapClaimProof = getSwapClaimViewZKProof.optional()(swapClaimView);
  const swapClaimBody = getSwapClaimViewBody.optional()(swapClaimView);
  const swapEpochDuration = getSwapClaimViewEpochDuration(swapClaimView);
  // SwapClaimBody fields
  const bodyNullifier = getSwapClaimBodyNullifier.optional()(swapClaimView);
  const bodyFee = getSwapClaimBodyFee.optional()(swapClaimView);
  const bodyOutput1Commitment = getSwapClaimBodyOutput1Commitment.optional()(swapClaimView);
  const bodyOutput2Commitment = getSwapClaimBodyOutput2Commitment.optional()(swapClaimView);
  const bodyOutputData = getSwapClaimBodyBatchOutputData.optional()(swapClaimView);
  // SwapClaimView_Visible fields
  const isVisible = swapClaimView.swapClaimView.case === "visible";
  const swapClaimNoteOutput1 = getSwapClaimNoteOutput1.optional()(swapClaimView);
  const swapClaimNoteOutput2 = getSwapClaimNoteOutput2.optional()(swapClaimView);
  const swapClaimTxId = getSwapClaimTransactionId.optional()(swapClaimView);

  // NOTE: This might be a good model to copy for SwapView. Cleanly eliminates the unnecessary nesting of Opaque & Visible variants.
  return (
    <FlexCol>
      <p>Swap Claim View</p>
      <FlexCol>
        {swapClaimProof ? <ZKSwapProof value={swapClaimProof.inner} name="SwapClaim Proof"/> : null}
        {swapClaimBody ? (
          <FlexCol>
            <p>SwapClaimBody</p>
            {bodyNullifier ? <Nullifier value={bodyNullifier.inner} name="Nullifier"/> : null}
            {bodyFee ? <Fee fee={bodyFee}/> : null}
            {bodyOutput1Commitment ? <StateCommitment value={bodyOutput1Commitment.inner} name="Output 1 Commitment"/> : null}
            {bodyOutput2Commitment ? <StateCommitment value={bodyOutput2Commitment.inner} name="Output 2 Commitment"/> : null}
            {bodyOutputData ? <BatchSwapOutputData batchSwapOutput={bodyOutputData}/> : null}
          </FlexCol>
        ) : null}
        <FlexRow>
          <p>Epoch Duration</p>
          <pre>{swapEpochDuration.toString()}</pre>
        </FlexRow>
        {isVisible && swapClaimNoteOutput1 ? <NoteView note={swapClaimNoteOutput1}/> : null}
        {isVisible && swapClaimNoteOutput2 ? <NoteView note={swapClaimNoteOutput2}/> : null}
        {isVisible && swapClaimTxId ? <TransactionId value={swapClaimTxId.inner} name="Swap Transaction ID"/> : null}
      </FlexCol>
    </FlexCol>
  );
};

const DelegatorVoteView: FC<{ delegatorVoteView: DelegatorVoteViewT }> = ({ delegatorVoteView }) => {
  // DelegatorVoteView fields
  const delegatorVoteBody = getDelegatorVoteViewBody.optional()(delegatorVoteView);
  const delegatorVoteAuthSig = getDelegatorVoteViewAuthSig.optional()(delegatorVoteView);
  const delegatorVoteProof = getDelegatorVoteViewProof.optional()(delegatorVoteView);
  // DelegatorVoteBody fields
  // StartPosition and Proposal are the only non-optional fields but they're embedded in DelegatorVoteBody which, itself, is optional.
  const bodyProposal = getDelegatorVoteBodyProposal.optional()(delegatorVoteView);
  const bodyStartPosition = getDelegatorVoteBodyStartPosition.optional()(delegatorVoteView);
  const bodyVote = getDelegatorVoteBodyVote.optional()(delegatorVoteView);
  const bodyValue = getDelegatorVoteBodyValue.optional()(delegatorVoteView);
  const bodyUnboundedAmount = getDelegatorVoteBodyUnbondedAmount.optional()(delegatorVoteView);
  const bodyNullifier = getDelegatorVoteBodyNullifier.optional()(delegatorVoteView);
  const bodyRK = getDelegatorVoteBodyRK.optional()(delegatorVoteView);
  // DelegatorVoteView_Visible fields
  const isVisible = delegatorVoteView.delegatorVote.case === "visible";
  const delegatorVoteViewNote = getDelegatorVoteViewNote.optional()(delegatorVoteView);
  return (
    <FlexCol>
      <p>Delegator Vote View</p>
      <FlexCol>
        {delegatorVoteBody ? (
          <FlexCol>
            <p>DelegatorVoteBody</p>
            {bodyProposal !== undefined ? (
              <FlexRow>
                <p>Proposal</p>
                <pre>{bodyProposal.toString()}</pre>
              </FlexRow>
            ) : null}
            {bodyStartPosition !== undefined ? (
              <FlexRow>
                <p>Proposal</p>
                <pre>{bodyStartPosition.toString()}</pre>
            </FlexRow>
            ) : null}
            {bodyVote ? <Vote vote={bodyVote}/> : null}
            {bodyValue ? <Value value={bodyValue} label="Delegation Note Value"/> : null}
            {bodyUnboundedAmount ? <Amount amount={bodyUnboundedAmount} label="Delegation Note Amount"/> : null}
            {bodyNullifier ? <Nullifier value={bodyNullifier.inner} name="Input Note Nullifier"/> : null}
            {bodyRK ? <SpendVerificationKey value={bodyRK.inner} name="Validating Key"/> : null}
          </FlexCol>
        ) : null}
        {delegatorVoteAuthSig ? <SpendAuthSignature value={delegatorVoteAuthSig.inner} name="Auth Signature"/> : null}
        {delegatorVoteProof ? <ZKDelegatorVoteProof value={delegatorVoteProof.inner} name="Delegator Vote Proof"/> : null}
      </FlexCol>
      {isVisible && delegatorVoteViewNote ? <NoteView note={delegatorVoteViewNote}/> : null}
    </FlexCol>
  );
};

const ValidatorDefinition: FC<{ validatorDefinition: ValidatorDefinitionT }> = ({ validatorDefinition }) => {
  const validatorAuthSig = getValidatorAuthSig.optional()(validatorDefinition);
  // ValidatorDefinition.Validator fields
  const validatorIdKey = getValidatorIdentityKey.optional()(validatorDefinition);
  const validatorConsensusKey = getValidatorConsensusKey.optional()(validatorDefinition);
  // validatorName through validatorEnabled ought to be non-optional but do not currently have a consistent bailing out strategy yet.
  const validatorName = getValidatorName.optional()(validatorDefinition);
  const validatorWebsite = getValidatorWebsite.optional()(validatorDefinition);
  const validatorDescription = getValidatorDescription.optional()(validatorDefinition);
  const validatorEnabled = getValidatorEnabled.optional()(validatorDefinition);
  const validatorFundingStreams = getValidatorFundingStream.optional()(validatorDefinition);
  const validatorSequenceNumber = getValidatorSequenceNumber.optional()(validatorDefinition);
  const validatorGovernanceKey = getValidatorGovernanceKey.optional()(validatorDefinition);

  return (
    <FlexCol className="flex-overflow w-full">
      <p className="w-full">Validator Definition</p>
      {validatorIdKey ? <IdentityKey value={validatorIdKey.ik} name="Identity Verification Key"/> : null}
      {validatorConsensusKey ? <ConsensusKey value={validatorConsensusKey} name="Consensus PubKey"/> : null}
      <FlexRow className="flex-overflow w-full">
        <p className="w-full">Name</p>
        <p className="w-full">{validatorName}</p>
      </FlexRow>
      <FlexRow className="flex-overflow w-full">
        <p className="w-full">Website</p>
        <p className="w-full">{validatorWebsite}</p>
      </FlexRow>
      <FlexRow className="flex-overflow w-full">
        <p className="w-full">Description</p>
        <p className="w-full">{validatorDescription}</p>
      </FlexRow>
      <FlexRow className="flex-overflow w-full">
        <p className="w-full">Enabled?</p>
        <p className="w-full">{validatorEnabled}</p>
      </FlexRow>
      {validatorFundingStreams?.length !== undefined ? (
        <FlexCol className="flex-overflow w-full">
          <p>Funding Streams</p>
          {validatorFundingStreams.map((fundingStream, i) => <FundingStream fundingStream={fundingStream} key={i}/>)}
        </FlexCol>
      ) : null}
      {validatorSequenceNumber !== undefined  ? (
        <FlexRow className="flex-overflow w-full">
          <p className="w-full">Sequence Number</p>
          <p className="w-full">{validatorSequenceNumber}</p>
        </FlexRow>
      ) : null}
      {validatorGovernanceKey ? <GovernanceKey value={validatorGovernanceKey.gk} name="Governance Key"/> : null}
      {validatorAuthSig ? <AuthSignature value={validatorAuthSig} name="Auth Signature"/> : null}
    </FlexCol>
  );
};

const IBCRelayAction: FC<{ ibcRelayAction: IbcRelay }> = ({ ibcRelayAction }) =>{
  const ibcValue = ibcRelayAction.rawAction?.value;
  const ibcTypeURL = ibcRelayAction.rawAction?.typeUrl;
  return (
    <FlexCol className="flex-overflow w-full">
      <p className="w-full">IBC Relay Raw Action</p>
      {ibcValue ? (
        <FlexCol className="flex-overflow w-full">
          <p className="w-full">Value</p>
          <pre className="w-full">{ibcValue}</pre>
        </FlexCol>
      ) : null}
      {ibcTypeURL?.length !== undefined ? (
        <FlexCol className="flex-overflow w-full">
          <p>Proto URL Resource</p>
          <pre className="w-full">{ibcTypeURL}</pre>
        </FlexCol>
      ) : null}
    </FlexCol>
  );
};

const ProposalSubmit: FC<{ proposalSubmit: ProposalSubmitT }> = ({ proposalSubmit }) => {
  const proposalSubmitAmount = getProposalSubmitDepositAmount.optional()(proposalSubmit);
  const proposalId = getProposalId(proposalSubmit);
  const proposalTitle = getProposalTitle(proposalSubmit);
  const proposalDescription = getProposalDescription(proposalSubmit);
  const proposalPayload = getProposalPayload(proposalSubmit);
  return (
    <FlexCol className="flex-wrap w-full">
      <p className="w-full">Proposal Submit</p>
      <FlexRow>
        <p>ID</p>
        <pre>{proposalId.toString()}</pre>
      </FlexRow>
      <FlexRow>
        <p>Title</p>
        <p>{proposalTitle}</p>
      </FlexRow>
      <FlexRow>
        <p>Description</p>
        <p>{proposalDescription}</p>
      </FlexRow>
      <ProposalPayload payload={proposalPayload}/>
      {proposalSubmitAmount ? <Amount amount={proposalSubmitAmount} label="Proposal Deposit Amount"/> : null}
    </FlexCol>
  );

};

const ProposalWithdraw: FC<{ proposalWithdraw: ProposalWithdrawT }> = ({ proposalWithdraw }) => {
  return (
    <FlexCol>
      <p>Proposal Withdraw</p>
      <FlexRow>
        <p>Proposal</p>
        <pre>{proposalWithdraw.proposal.toString()}</pre>
      </FlexRow>
      <FlexRow>
        <p>Reason</p>
        <pre>{proposalWithdraw.reason.toString()}</pre>
      </FlexRow>
    </FlexCol>
  );
};

const ValidatorVote: FC<{ validatorVote: ValidatorVoteT }> = ({ validatorVote }) => {
  const voteAuthSig = getValidatorVoteAuthSig.optional()(validatorVote);
  const voteBody = getValidatorVoteBody.optional()(validatorVote);
  const bodyProposal = getValidatorVoteBodyProposal(validatorVote);
  const bodyVote = getValidatorVoteBodyVote.optional()(validatorVote);
  const bodyIdKey = getValidatorVoteBodyIdentityKey.optional()(validatorVote);
  const bodyGovernanceKey = getValidatorVoteBodyGovernanceKey.optional()(validatorVote);
  const bodyReason = getValidatorVoteBodyReason.optional()(validatorVote);

  return (
    <FlexCol>
      <p>Validator Vote</p>
      {voteBody ? (
        <FlexCol className="w-full">
          {bodyProposal ? (
            <FlexRow className="flex-wrap w-full">
              <p>Proposal</p>
              <pre>{bodyProposal.toString()}</pre>
            </FlexRow>
          ) : null}
          {bodyVote ? <Vote vote={bodyVote}/> : null}
          {bodyIdKey ? <IdentityKey value={bodyIdKey.ik} name="Validator Identity"/> : null}
          {bodyGovernanceKey ? <GovernanceKey value={bodyGovernanceKey.gk} name="Governance Key"/> : null}
          {bodyReason ? (
            <FlexRow className="flex-wrap w-full">
              <p>Reason</p>
              <pre>{bodyReason.reason}</pre>
            </FlexRow>
          ) : null}
        </FlexCol>
      ) : null}
      {voteAuthSig ? <AuthSignature value={voteAuthSig.inner} name="Auth Signature"/> : null}
    </FlexCol>
  );
};

const ProposalDepositClaim: FC<{ proposalDepositClaim: ProposalDepositClaimT }> = ({ proposalDepositClaim }) => {
  const proposal = proposalDepositClaim.proposal;
  const proposalDepositAmount = getProposalDepositClaimAmount.optional()(proposalDepositClaim);
  const proposalDepositOutcome = getProposalDepositClaimOutcome.optional()(proposalDepositClaim);
  const withdrawReason = getProposalDepositClaimOutcomeReason.optional()(proposalDepositClaim);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Proposal Deposit Claim</p>
      <FlexRow className="flex-wrap w-full">
        <p>Proposal</p>
        <pre>{proposal.toString()}</pre>
      </FlexRow>
      {proposalDepositAmount ? <Amount amount={proposalDepositAmount} label="Deposit Amount"/> : null}
      {proposalDepositOutcome ? (
        <FlexCol className="w-full">
          <FlexRow className="flex-wrap w-full">
            <p>Proposal Outcome</p>
            {proposalDepositOutcome.case === "passed" ? <pre>Passed</pre>
            : proposalDepositOutcome.case === "failed" ? <pre>Failed</pre>
            : proposalDepositOutcome.case === "slashed" ? <pre>Slashed</pre>
            : null}
          </FlexRow>
          {(withdrawReason ?? "") ? (
            <FlexRow className="flex-wrapp w-full">
              <p>Reason</p>
              <pre>{withdrawReason}</pre>
            </FlexRow>
          ) : null}
        </FlexCol>
      ) : null}
    </FlexCol>
  );
};

const PositionOpen: FC<{ positionOpen: PositionOpenT }> = ({ positionOpen }) => {
  const position = getPositionOpen.optional()(positionOpen);
  return (
    <FlexCol className="w-full">
      <p>Position Open</p>
      {position ? (
        <Position position={position}/>
      ) : null}
    </FlexCol>
  );
};

const PositionClose: FC<{ positionClose: PositionCloseT }> = ({ positionClose }) => {
  const positionId = getPositionClosePositionId.optional()(positionClose);
  return (
    <FlexCol className="w-full">
      <p>Position Close</p>
      {positionId ? <PositionId value={positionId.inner} name="Position ID"/>: null}
    </FlexCol>
  );
};

const PositionWithdraw: FC<{ positionWithdraw: PositionWithdrawT }> = ({ positionWithdraw }) => {
  const positionId = getPositionWithdrawPositionId.optional()(positionWithdraw);
  const balanceCommitment = getPositionWithdrawBalanceCommitment.optional()(positionWithdraw);
  const sequence = getPositionWithdrawSequence(positionWithdraw);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Position Withdraw</p>
      {positionId ? <PositionId value={positionId.inner} name="Position ID"/>: null}
      {balanceCommitment ? <BalanceCommitment name="Reserves Commitment" value={balanceCommitment.inner}/> : null}
      <FlexRow className="flex-wrap w-full">
          <p>Sequence</p>
          <pre>{sequence.toString()}</pre>
      </FlexRow>
    </FlexCol>
  );
};

// NOTE: DEPRECATED
const PositionRewardClaim: FC<{ positionRewardClaim: PositionRewardClaimT }> = ({ positionRewardClaim }) => {
  const positionId = getPositionRewardClaimPositionId.optional()(positionRewardClaim);
  const balanceCommitment = getPositionRewardClaimBalanceCommitment.optional()(positionRewardClaim);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Position Reward Claim</p>
      {positionId ? <PositionId value={positionId.inner} name="Position ID"/>: null}
      {balanceCommitment ? <BalanceCommitment name="Rewards Commitment" value={balanceCommitment.inner}/> : null}
    </FlexCol>
  );
};

const CommunityPoolSpend: FC<{ communityPoolSpend: CommunityPoolSpendT }> = ({ communityPoolSpend }) => {
  const value = getCommunityPoolSpendValue.optional()(communityPoolSpend);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Community Pool Spend</p>
      {value ? <Value value={value} label="Spend Value"/> : null}
    </FlexCol>
  );
};

const CommunityPoolOutput: FC<{ communityPoolOutput: CommunityPoolOutputT }> = ({ communityPoolOutput }) => {
  const value = getCommunityPoolOutputValue.optional()(communityPoolOutput);
  const address = getCommunityPoolOutputAddress.optional()(communityPoolOutput);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Community Pool Output</p>
      {value ? <Value value={value} label="Output Value"/> : null}
      {address ? <Address address={address}/> : null}
    </FlexCol>
  );
};

const CommunityPoolDeposit: FC<{ communityPoolDeposit: CommunityPoolDepositT }> = ({ communityPoolDeposit }) => {
  const value = getCommunityPoolDepositValue.optional()(communityPoolDeposit);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Community Pool Deposit</p>
      {value ? <Value value={value} label="Desposit Value"/> : null}
    </FlexCol>
  );
};

const UndelegateClaim: FC<{ undelegateClaim: UndelegateClaimT }> = ({ undelegateClaim }) => {
  const validatorID = getUndelegateClaimIdentityKey.optional()(undelegateClaim);
  // NOTE: DEPRECATED
  // NOTE: marked as Deprecated but protos mark it as non-optional so how do deprecations actually get handled at implementation?
  const startEpochIndex = getUndelegateClaimStartEpochIndex(undelegateClaim);
  const penalty = getUndelegateClaimPenalty.optional()(undelegateClaim);
  const balanceCommitment = getUndelegateClaimBalanceCommitment.optional()(undelegateClaim);
  const unbondingStartHeight = getUndelegateClaimUnbondingStartHeight(undelegateClaim);
  const undelegateClaimProof = getUndelegateClaimProof(undelegateClaim);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Undelegate Claim</p>
      {validatorID ? <IdentityKey value={validatorID.ik} name="Validator Identity Key"/> : null}
      <FlexRow className="flex-wrap w-full">
        <p>Start Epoch Index (DEPRECATED)</p>
        <pre>{startEpochIndex.toString()}</pre>
      </FlexRow>
      {penalty ? <Penalty value={penalty.inner} name="Penalty"/> : null}
      {balanceCommitment ? <BalanceCommitment value={balanceCommitment.inner} name="Balance Commitment"/> : null}
      <FlexRow className="flex-wrap w-full">
        <p>Unbonding Start Height</p>
        <pre>{unbondingStartHeight.toString()}</pre>
      </FlexRow>
      <UndelegateClaimProof value={undelegateClaimProof} name="Proof"/>
    </FlexCol>
  );
};

const Ics20Withdrawal: FC<{ ics20Withdrawal: Ics20WithdrawalT }> = ({ ics20Withdrawal }) => {
  const withdrawalAmount = getIcs20WithdrawalAmount.optional()(ics20Withdrawal);
  const denom = getIcs20WithdrawalDenom.optional()(ics20Withdrawal);
  const destinationAddress = getIcs20WithdrawalDestinationAddress(ics20Withdrawal);
  const returnAddress = getIcs20WithdrawalReturnAddress.optional()(ics20Withdrawal);
  const timeoutHeight = getIcs20WithdrawalTimeoutHeight.optional()(ics20Withdrawal);
  const timeoutTime = getIcs20WithdrawalTimeoutTime(ics20Withdrawal);
  const sourceChannel = getIcs20WithdrawalSourceChannel(ics20Withdrawal);

  return (
    <FlexCol className="w-full">
      <p className="w-full">ICS20 Withdrawal</p>
      {withdrawalAmount ? <Amount amount={withdrawalAmount}/> : null}
      {(denom ?? "") ? (
        <FlexRow className="flex-wrap w-full">
          <p>Denom</p>
          <pre>{denom}</pre>
        </FlexRow>
      ) : null}
      <FlexRow className="flex-wrap w-full">
        <p>Destination Address</p>
        <pre>{destinationAddress}</pre>
      </FlexRow>
      {returnAddress ? (
        <FlexCol className="w-full">
          <p className="w-full">Return Address</p>
          <Address address={returnAddress}/>
        </FlexCol>
      ) : null}
      {timeoutHeight ? <Height height={timeoutHeight}/> : null}
      <FlexRow className="flex-wrap w-full">
        <p>Timeout Time</p>
        <pre>{timeoutTime.toString()}</pre>
      </FlexRow>
      <FlexRow className="flex-wrap w-full">
        <p>Source Channel</p>
        <pre>{sourceChannel}</pre>
      </FlexRow>
    </FlexCol>
  );
};

const Delegate: FC<{ delegate: DelegateT }> = ({ delegate }) => {
  const validatorID = getDelegateIdentityKey.optional()(delegate);
  const epochIndex = getDelegateEpochIndex(delegate);
  const unbondedAmount = getDelegateUnbondedAmount.optional()(delegate);
  const delegationAmount = getDelegateDelegationAmount.optional()(delegate);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Delegate</p>
      {validatorID ? <IdentityKey value={validatorID.ik} name="Validator Identity Key"/> : null}
      <FlexRow className="flex-wrap w-full">
        <p>Epoch Index</p>
        <pre>{epochIndex.toString()}</pre>
      </FlexRow>
      {unbondedAmount ? <Amount amount={unbondedAmount} label="Unbonded Amount"/> : null}
      {delegationAmount ? <Amount amount={delegationAmount} label="Delegation Amount"/> : null}
    </FlexCol>
  );
};

const Undelegate: FC<{ undelegate: UndelegateT }> = ({ undelegate }) => {
  const validatorID = getUndelegateIdentityKey.optional()(undelegate);
  // NOTE: DEPRECATED
  // NOTE: similar situation to UndelegateClaim, this field is deprecated but, also, non-optional in the protos def.
  const startEpochIndex = getUndelegateStartEpochIndex(undelegate);
  const unbondedAmount = getUndelegateUnbondedAmount.optional()(undelegate);
  const delegationAmount = getUndelegateDelegationAmount.optional()(undelegate);
  const fromEpoch = getUndelegateFromEpoch.optional()(undelegate);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Undelegate</p>
      {validatorID ? <IdentityKey value={validatorID.ik} name="Validator Identity Key"/> : null}
      <FlexRow className="flex-wrap w-full">
        <p>Start Epoch Index (DEPRECATED)</p>
        <pre>{startEpochIndex.toString()}</pre>
      </FlexRow>
      {unbondedAmount ? <Amount amount={unbondedAmount} label="Unbonded Amount"/> : null}
      {delegationAmount ? <Amount amount={delegationAmount} label="Delegation Amount"/> : null}
      {fromEpoch ? <Epoch epoch={fromEpoch} label="From Epoch"/> : null}
    </FlexCol>
  );
};

const ActionDutchActionScheduleView: FC<{ dutchAuctionScheduleView: ActionDutchAuctionScheduleViewT }> = ({ dutchAuctionScheduleView }) => {
  // AuctionDescription fields
  const input = getInputFromActionDutchAuctionScheduleView.optional()(dutchAuctionScheduleView);
  const outputId = getOutputIdFromActionDutchAuctionScheduleView.optional()(dutchAuctionScheduleView);
  const maxOutput = getMaxOutputFromActionDutchAuctionScheduleView.optional()(dutchAuctionScheduleView);
  const minOutput = getMinOutputFromActionDutchAuctionScheduleView.optional()(dutchAuctionScheduleView);
  const startHeight = getStartHeightFromActionDutchAuctionScheduleView(dutchAuctionScheduleView);
  const endHeight = getEndHeightFromActionDutchAuctionScheduleView(dutchAuctionScheduleView);
  const stepCount = getStepCountFromActionDutchAuctionScheduleView(dutchAuctionScheduleView);
  const nonce = getNonceFromActionDutchAuctionScheduleView(dutchAuctionScheduleView);
  // remaining ActionDutchAuctionScheduleView level fields
  const auctionId = getActionDutchAuctionScheduleViewAuctionId.optional()(dutchAuctionScheduleView);
  const inputMetadata = getActionDutchAuctionScheduleViewInputMetadata.optional()(dutchAuctionScheduleView);
  const outputMetadata = getActionDutchAuctionScheduleViewOutputMetadata.optional()(dutchAuctionScheduleView);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Action Dutch Auction Schedule View</p>
      <FlexCol className="w-full">
        <p className="w-full">Dutch Action Description</p>
        {input ? <Value value={input}/> : null}
        {outputId ? <AssetId assetId={outputId} label="Target Asset ID"/> : null}
        {maxOutput ? <Amount amount={maxOutput} label="Maximum Output"/> : null}
        {minOutput ? <Amount amount={minOutput} label="Minimum Output"/> : null}
        <FlexRow className="flex-wrap w-full">
          <p>Start Height</p>
          <pre>{startHeight.toString()}</pre>
        </FlexRow>
        <FlexRow className="flex-wrap w-full">
          <p>End Height</p>
          <pre>{endHeight.toString()}</pre>
        </FlexRow>
        <FlexRow className="flex-wrap w-full">
          <p>Step Count</p>
          <pre>{stepCount.toString()}</pre>
        </FlexRow>
        <FlexRow className="flex-wrap w-full">
          <p>Nonce</p>
          <pre>{nonce.toString()}</pre>
        </FlexRow>
      </FlexCol>
      {auctionId ? <AuctionId value={auctionId.inner} name="Auction ID"/> : null}
      {inputMetadata ? <Metadata metaData={inputMetadata} label="Input Metadata"/> : null}
      {outputMetadata ? <Metadata metaData={outputMetadata} label="Output Metadata"/> : null}
    </FlexCol>
  );
};

const ActionDutchAuctionEnd: FC<{ actionDutchAuctionEnd: ActionDutchAuctionEndT }> = ({ actionDutchAuctionEnd }) => {
  const auctionId = getAuctionIdFromActionDutchAuctionEnd.optional()(actionDutchAuctionEnd);
  return (
    <FlexCol className="w-full">
      <p className="w-full">Action Dutch Auction End</p>
      {auctionId ? <AuctionId value={auctionId.inner} name="Auction ID"/> : null}
    </FlexCol>
  );
};

const ActionDutchAuctionWithdrawView: FC<{ actionDutchAuctionWithdrawView: ActionDutchAuctionWithdrawViewT }> = ({ actionDutchAuctionWithdrawView }) => {
  const auctionId = getAuctionIdFromActionDutchAuctionWithdrawView.optional()(actionDutchAuctionWithdrawView);
  const seq = getSeqFromActionDutchAuctionWithdrawView(actionDutchAuctionWithdrawView);
  const reservesCommitment = getReservesCommitmentFromActionDutchAuctionWithdrawView.optional()(actionDutchAuctionWithdrawView);
  const reserves = getReservesFromActionDutchAuctionWithdrawView(actionDutchAuctionWithdrawView);
  return (
    <FlexCol className="w-full">
      {auctionId ? <AuctionId value={auctionId.inner} name="Auction ID"/> : null}
      <FlexRow className="flex-wrap w-full">
        <p>Sequence</p>
        <pre>{seq.toString()}</pre>
      </FlexRow>
      {reservesCommitment ? <BalanceCommitment value={reservesCommitment.inner} name="Reserves Commitment"/> : null}
      {reserves.length !== 0 ? (
        <FlexCol className="w-full">
          <p className="w-full">Reserves</p>
          {reserves.map((valueView, i) => <ValueView valueView={valueView} key={i}/>)}
        </FlexCol>
      ) : null}
    </FlexCol>
  );
};

export const getActionView = ({ actionView } : ActionViewT) => {
  switch (actionView.case) {
    case "spend": {
      const spendView = getSpend(actionView.value);
      const noteView = getSpendNote.optional()(actionView.value);
      return <SpendView spend={spendView} noteView={noteView}/>;
    }
    case "output": {
      const outputView = getOutput(actionView.value);
      const noteView = getOutputNote.optional()(actionView.value);
      const outputKey = getOutputKey.optional()(actionView.value);
      return <OutputView output={outputView} noteView={noteView} payloadKey={outputKey}/>;
    }
    case "swap": {
      return <SwapView swapView={actionView.value}/>;
    }
    case "swapClaim": {
      return <SwapClaimView swapClaimView={actionView.value}/>;
    }
    case "delegatorVote": {
      return <DelegatorVoteView delegatorVoteView={actionView.value}/>;
    }
    case "validatorDefinition": {
      return <ValidatorDefinition validatorDefinition={actionView.value}/>;
    }
    case "ibcRelayAction": {
      return <IBCRelayAction ibcRelayAction={actionView.value}/>;
    }
    case "proposalSubmit": {
      return <ProposalSubmit proposalSubmit={actionView.value}/>;
    }
    case "proposalWithdraw": {
      return <ProposalWithdraw proposalWithdraw={actionView.value}/>;
    }
    case "validatorVote": {
      return <ValidatorVote validatorVote={actionView.value}/>;
    }
    case "proposalDepositClaim": {
      return <ProposalDepositClaim proposalDepositClaim={actionView.value}/>;
    }
    case "positionOpen": {
      return <PositionOpen positionOpen={actionView.value}/>;
    }
    case "positionClose": {
      return <PositionClose positionClose={actionView.value}/>;
    }
    case "positionWithdraw": {
      return <PositionWithdraw positionWithdraw={actionView.value}/>;
    }
    // Deprecated Action
    case "positionRewardClaim": {
      return <PositionRewardClaim positionRewardClaim={actionView.value}/>;
    }
    case "delegate": {
      return <Delegate delegate={actionView.value}/>;
    }
    case "undelegate": {
      return <Undelegate undelegate={actionView.value}/>;
    }
    case "communityPoolSpend": {
      return <CommunityPoolSpend communityPoolSpend={actionView.value}/>;
    }
    case "communityPoolOutput": {
      return <CommunityPoolOutput communityPoolOutput={actionView.value}/>;
    }
    case "communityPoolDeposit": {
      return <CommunityPoolDeposit communityPoolDeposit={actionView.value}/>;
    }
    case "actionDutchAuctionSchedule": {
      return <ActionDutchActionScheduleView dutchAuctionScheduleView={actionView.value}/>;
    }
    case "actionDutchAuctionEnd": {
      return <ActionDutchAuctionEnd actionDutchAuctionEnd={actionView.value}/>;
    }
    case "actionDutchAuctionWithdraw": {
      return <ActionDutchAuctionWithdrawView actionDutchAuctionWithdrawView={actionView.value}/>;
    }
    case "undelegateClaim": {
      return <UndelegateClaim undelegateClaim={actionView.value}/>;
    }
    case "ics20Withdrawal": {
      return <Ics20Withdrawal ics20Withdrawal={actionView.value}/>;
    }
    default:
      return undefined;
  }
};

interface ActionViewProps {
  action: ActionViewT,
}


export const ActionView : FC<ActionViewProps> = ({ action }) => {
  return (
    <div className="flex flex-col flex-wrap w-full">
      {getActionView(action)}
    </div>
  );
};
