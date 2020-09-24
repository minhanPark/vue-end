import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
  // TODO remember2: mode history를 했으면 배포시 nginx 처리할 것 있음. 공식 문서 확인할 것
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      // TODO remember3: 기존 형태가 아니라 component에 함수 형태로 불러와 import를 시켜주면 코드 스플릿팅이 됨
      // 그러면 한번에 불러오는게 아니고 해당 페이지로 갔을 때에 불러오는 이점이 있음
      path: "/login",
      component: () => import("../views/LoginPage.vue"),
      //component: LoginPage,
    },
    {
      path: "/signup",
      component: () => import("../views/SignupPage.vue"),
      //component: SignupPage,
    },
    {
      path: "/main",
      component: () => import("../views/MainPage.vue"),
      // TODO remember: 메타값을 설정할 수 있음
      meta: { auth: true },
    },
    {
      path: "/add",
      component: () => import("../views/PostAddPage.vue"),
      meta: { auth: true },
    },
    {
      path: "/post/:id",
      component: () => import("../views/PostEditPage.vue"),
      meta: { auth: true },
    },
    {
      // TODO remember4: 해당 라우터 설정하면 위에 없는 path로 접근할 시 페이지 처리 가능
      path: "*",
      component: () => import("../views/NotFoundPage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log("인증이 필요합니다");
    next("/login");
    return;
  }
  next();
});

export default router;
