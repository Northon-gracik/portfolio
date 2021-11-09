import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx){
    const api = axios.create({
        baseURL: "localhost:8000/v1/"
      });
      
      api.interceptors.request.use(async config => {
        const { 'portifolio-Token': token} = parseCookies(ctx);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
      
    return api;
}