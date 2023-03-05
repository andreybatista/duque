import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "d618a5fa08abd6d89d9287c6ca4b4d64",
  },
});

export default api;
