// Loading in enviroment variables
// var dotenv = require('dotenv');
// this will be used to fetch data in the backend
// temporary:

import type { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

const api_url = `https://mache.mechetle.com/api`
export default async (req: IncomingMessage, res: ServerResponse) => {
  let url_mod = api_url
  let data = { data: [{ data: "" }] };
  
  const path = req.url;   // this is legacy according to node.js docs
  console.log("URL path:", path); // https://nodejs.org/api/url.html
  
  const headers = {
    'secret-sauce': process.env.SECRET_SAUCE,
  }

  data = await $fetch(`${url_mod}${path}`, { method: 'GET', headers: headers});

  console.log("headers:", res.getHeaders());
  console.log("Length of data:", Object.keys(data).length)

  res.writeHead(200, { "Content-Type": "application/json" });

  res.write(JSON.stringify(data));
  res.end();
};
