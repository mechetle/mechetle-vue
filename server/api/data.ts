/*
Client side's "api":
====================
Fetches data from
actual rest api, only
allowing it to read
the data.
*/

// older versions of node below v18 don't have fetch.
//import fetch from "node-fetch";
//import fetch from 'node-fetch-native'
const api_url = `https://mache.mechetle.com`

export default defineEventHandler (async (event) => {
  let req = event.req
  let res = event.res

  let url_mod = api_url

  interface Project {
    name: string,
    title: string,
    finishDate: string,
    category: string,
    slug: string,
    case: string,
    body: string,
    client: string,
    client_field: string,
    desc: string,
    design_context: string,
    alt: string,
    columns: string,
    img: string,
    oneByOne: string,
    video: string,
    tags: string,
    exported: string,
    supplied: string,
    callout: string,
  }

  let data : Project[] = [];

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

  //data = await $fetch(`${url_mod}${path}`, { method: 'GET', headers: headers});
  res.writeHead(200, { "Content-Type": "application/json" });
  
  fetch(`${url_mod}${path}`, { method: 'GET', headers: headers}).then((response) => response.json())
  .then((data_res: Project[]) => {
    data = data_res
    console.log(data)
    console.log("Length of data:", data.length)
    
    res.write(JSON.stringify(data));
    
    res.end();
  });

  //console.log("headers:", res.getHeaders());


});
