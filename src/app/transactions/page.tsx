import TransactionsTable from "@/components/TransactionsTable";

export const dynamic = "force-dynamic";

const Page = async () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg font-bold self-center">Recent Transactions</h1>
      <TransactionsTable/>
    </div>
  );
};

export default Page;