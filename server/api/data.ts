// this will be used to fetch data in the backend
// temporary:

import type { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

const api_url = `https://6170134923781c0017289827.mockapi.io/posts?`
export default async (req: IncomingMessage, res: ServerResponse) => {
  let url_mod = api_url
  let data = { data: [{ data: "" }] };

  
  const queryObject = url.parse(req.url as string, true).query;   // this is legacy according to node.js docs
  console.log("queryObject:");
  console.log(queryObject);
  // data?search=420  --> search: 420
  // data?limit=2  --> limits to 2 entries
  const { search, limit, prev } = queryObject;
  console.log("Limit:", limit);
  console.log("Search:", search);
  console.log("Prev:", prev);
  

  if (limit) {
    url_mod += `page=1&limit=${limit}`
  }

  if (search) {
    data = await $fetch(`${url_mod}&search=${search}`);
  } else if (prev) {
    data = await $fetch(`${url_mod}page=1&limit=1&id=${parseInt(prev[0]) + 1}`);
  } else {
    data = await $fetch(`${url_mod}`);
  }
  
  console.log("headers:", res.getHeaders());
  console.log("Length of data:", Object.keys(data).length)

  // if queried data is only 1, focus on to that object:
  if (Object.keys(data).length != 1) {
    data = data
  } else {
    data = data[0]
  }

  res.writeHead(200, { "Content-Type": "application/json" });

  res.write(JSON.stringify(data));
  res.end();
};
