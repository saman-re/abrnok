import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import NewServer from "./components/NewServer";

export const routes = [
  { path: "/", component: SignIn },
  { path: "/log_in", component: LogIn },
  { path: "/new_server", component: NewServer },
];
