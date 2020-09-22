import store from "../../store";

// TODO remember: axios의 인터셉터를 이용해서 헤더에 토큰 실어보내기
export const setInterceptors = (instance) => {
  instance.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      //console.log(config);
      config.headers.Authorization = store.state.token;
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return instance;
};
