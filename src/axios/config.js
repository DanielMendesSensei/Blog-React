import axios from "axios";

const BASEURL = "https://jsonplaceholder.typicode.com";

const blogFetch = axios.create({
  baseURL: `${BASEURL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default blogFetch;
