import Header from "./header";

import Home from "../routes/home";
import Profile from "../routes/profile";
import SimplrRouter from "@simplr-wc/router";
import SimplrRouterPreactMiddleware from "./preact-middleware";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "profile",
    component: Profile,
    routes: [
      {
        path: ":user",
        component: Profile,
      },
    ],
  },
];

const router = new SimplrRouter({ routes });
router.use(SimplrRouterPreactMiddleware());
router.init();

const App = () => (
  <div id="app">
    <Header />
  </div>
);

export default App;
