// this will be used to fetch data in the backend
// temporary:

import type { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

const api_url = `https://6170134923781c0017289827.mockapi.io/posts?`
export default async (req: IncomingMessage, res: ServerResponse) => {
  let url_mod = api_url
  let data = { data: [{ data: "" }] };
  
  const queryObject = url.parse(req.url as string, true).query;   
  console.log("queryObject:");
  console.log(queryObject);
  // data?search=420  --> search: 420
  // data?limit=2  --> limits to 2 entries
  const { search, limit } = queryObject; // this need fixing

  if (limit) {
    url_mod += `page=1&limit=${limit}`
  }
  if (search) {
    data = await $fetch(`${url_mod}search=${search}`);
  } else {
    data = await $fetch(`${url_mod}`);
  }
  
  console.log("headers:", res.getHeaders());
  console.log("dsfsdfsdfsfs", Object.keys(data).length)

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
