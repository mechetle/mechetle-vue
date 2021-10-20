// this will be used to fetch data in the backend
// temporary:

import type { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

// import axios from "axios";
// import useFetch from "nuxt3";
const api_url = `https://6170134923781c0017289827.mockapi.io/posts?`
export default async (req: IncomingMessage, res: ServerResponse) => {
  let url_mod = api_url
  let data = { data: [{ data: "" }] };

  const queryObject = url.parse(req.url as string, true).query;   // this need fixing
  console.log(queryObject);
  // data?search=420  --> search: 420
  // data?limit=2  --> limits to 2 entries
  const { search, limit } = queryObject;

  if (limit) {
    url_mod += `page=1&limit=${limit}`
  }
  if (search) {
    data = await $fetch(`${url_mod}search=${search}`);
  } else {
    data = await $fetch(`${url_mod}`);
  }
  
  console.log("headers:", res.getHeaders());

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
};
