import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export default async function ApiService(term) {
  const response = await axios.get(`${API_URL}?q=${term}`);
  return response.data;
}
