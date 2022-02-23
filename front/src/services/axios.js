import axios from "axios";
import http from "http";
import { parseCookies } from "nookies";

export function getAPIClient(ctx) {
  const api = axios.create({
    baseURL: process.env.URL_BACK,
    httpAgent: new http.Agent({ keepAlive: true }),
    proxy: {
      protocol: "http",
    }
  });


  api.interceptors.request.use(async config => {
    const { 'portifolio-Token': token } = parseCookies(ctx);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return api;
}