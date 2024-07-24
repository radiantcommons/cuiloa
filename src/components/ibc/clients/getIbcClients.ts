export async function getIbcClients({
  endpoint,
  pageIndex,
}: {
  endpoint: string;
  pageIndex: number;
}) {
  console.log(`Fetching: GET ${endpoint}?page=${pageIndex}`);
  const res = await fetch(`http://localhost:443${endpoint}?page=${pageIndex}`, {
    method: "GET",
  });
  return await res.json();
}
