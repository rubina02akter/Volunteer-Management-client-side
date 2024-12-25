import axios from "axios";

const useAxios = axios.create({
  baseURL: 'https://server-side-rho-lemon.vercel.app',
  withCredentials: true
});

const axiosInstance = () => {
  return useAxios
}

export default axiosInstance;