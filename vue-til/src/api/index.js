import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// TODO remember1: 인스턴스로 빼서 공통 url 부분 처리
function createInstanceWithAuth(url) {
  const instance = axios.create({
    // TODO remember: .env 파일에 "VUE_APP_~" 형태로 만들면 자동으로 들고올 수 있음
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();

export const posts = createInstanceWithAuth("posts");
