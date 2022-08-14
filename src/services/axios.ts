import axios from "axios";
// import { appConfig } from "@configs/app.ts";
import { getCookie } from "cookies-next";

const service = axios.create({
  baseURL: "http:localhost:3001/api",
  //   timeout: appConfig.apiTimeOut,
});

service.interceptors.request.use(async (config: any) => {
  config.headers["Content-Type"] = "application/json";
  config.headers["Accept"] = "application/json";

  // console.log("-----", getCookie("jwt"));
  if (getCookie("jwt")) {
    config.headers["x-access-token"] = `Bearer ${getCookie("jwt")}`;
  }

  // if (process.env.NEXT_PUBLIC_Authorization) {
  //   config.headers["Authorization"] = process.env.NEXT_PUBLIC_Authorization;
  // }

  return config;
});

export default service;
