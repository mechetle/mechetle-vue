/*
Client side's "api":
====================
Fetches data from
actual rest api, only
allowing it to read
the data.
*/

const api_url = `https://mache.mechetle.com`

export default defineEventHandler (async (event) => {
  let req = event.req
  let res = event.res

  let url_mod = api_url
  let data = { data: [{ data: "" }] };

  //! IN THIS CURRENT EDGE RELEASE YOUT CAN DO /api/data/blah
  
 /*  console.log("req.url:", req) */
  //req = req + "/refc"
  //const path = req.url.replace("/data", "");   // this is legacy according to node.js docs
  
  const req_url = new URL(`${api_url}/${req.url}`)
  const searchParams = req_url.searchParams

  let path = "/api"

  if (searchParams.get("post")) {
    path = `${path}/${searchParams.get("post")}`
  }
  if (searchParams.get("limit")) {
    path = `${path}?limit=${searchParams.get("limit")}`
  }

  console.log("URL path:", path); // https://nodejs.org/api/url.html

  try {
    console.log("API key - starting with:", useRuntimeConfig().secretSauce.substring(0, 5))
  } catch (error) {
    console.log("API KEY IS NOT ADDED")
  }
  
  const headers = {
    'secret-sauce': useRuntimeConfig().secretSauce
  }

  data = await $fetch(`${url_mod}${path}`, { method: 'GET', headers: headers});

  //console.log("headers:", res.getHeaders());
  console.log("Length of data:", Object.keys(data).length)

  res.writeHead(200, { "Content-Type": "application/json" });

  res.write(JSON.stringify(data));
  res.end();
});
