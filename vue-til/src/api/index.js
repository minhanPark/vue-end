import axios from "axios";
import { setInterceptors } from "./common/interceptors";

// TODO remember1: 인스턴스로 빼서 공통 url 부분 처리
function createInstance() {
  const instance = axios.create({
    // TODO remember: .env 파일에 "VUE_APP_~" 형태로 만들면 자동으로 들고올 수 있음
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

const instance = createInstance();

const registerUser = (userData) => {
  return instance.post("signup", userData);
};

const loginUser = (userData) => instance.post("login", userData);

const fetchPosts = () => instance.get("posts");

const createPost = (postData) => instance.post("posts", postData);

export { registerUser, loginUser, fetchPosts, createPost };
