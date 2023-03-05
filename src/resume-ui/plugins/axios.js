import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "http://localhost:8080";

  let api = axios.create({
    baseUrl: defaultUrl,
    headers: {
      common: {},
    },
  });
  return {
    provide: {
      api: api,
    },
  };
});
