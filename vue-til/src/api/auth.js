import { instance } from "./index";

const registerUser = (userData) => {
  return instance.post("signup", userData);
};

const loginUser = (userData) => instance.post("login", userData);

export { registerUser, loginUser };
