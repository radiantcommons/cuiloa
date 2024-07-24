import { TransactionsTableData } from "@/lib/validators/table";

export async function getTransactions({
  endpoint,
  pageIndex,
}: {
  endpoint: string;
  pageIndex: number;
}) {
  console.log(`Fetching: POST ${endpoint}?page=${pageIndex}`);
  const res = await fetch(`http://localhost:443${endpoint}?page=${pageIndex}`, {
    method: "POST",
  });
  const json = await res.json();
  console.log("Fetched Result:", json);
  const result = TransactionsTableData.safeParse(json);
  if (result.success) {
    return result.data;
  } else {
    throw new Error(result.error.message);
  }
}
