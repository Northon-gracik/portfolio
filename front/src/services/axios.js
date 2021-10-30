import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx){
    const api = axios.create({
        baseURL: process.env.url
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