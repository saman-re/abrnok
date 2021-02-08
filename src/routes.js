import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import NewServer from "./views/NewServer";

export const routes = [
  { path: "/", component: SignIn, name: "home" },
  { path: "/sign_up", component: SignUp },
  { path: "/new_server", component: NewServer },
  { path: "*", redirect: { name: "home" } },
];
