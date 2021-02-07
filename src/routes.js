import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NewServer from "./components/NewServer";

export const routes = [
  { path: "/", component: SignIn },
  { path: "/Sign_up", component: SignUp },
  { path: "/new_server", component: NewServer },
];
