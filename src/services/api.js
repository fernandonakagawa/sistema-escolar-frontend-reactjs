import axios from "axios";

const api = axios.create({
  baseURL: "https://7xufrf.sse.codesandbox.io",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});

export default api;
