export async function getIbcChannels({
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
  // const json = await res.json();
  // console.log("Fetched Result:", json);
  // return json;
  // const result = ChannelsTableData.safeParse(json);
  // if (result.success) {
  //   return result.data;
  // } else {
  //   throw new Error(result.error.message);
  // }
}
