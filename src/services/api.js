import axios from "axios";

const api = axios.create({
  baseURL: "http://172.27.145.158:3333",
});

export default api;
