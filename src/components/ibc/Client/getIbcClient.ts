export async function getIbcClient({
  endpoint,
  clientId,
}: {
  endpoint: string;
  clientId: string;
}) {
  console.log(`Fetching: GET ${endpoint}?q=${clientId}`);
  const res = await fetch(`http://localhost:443${endpoint}?q=${clientId}`, {
    method: "GET",
  });
  return await res.json();
}
