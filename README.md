![Title Image](simplr-router-title-image.png)

# Simplr-Router Preact Middleware

## Introduction

This repository contains the Preact middleware needed for running [Simplr Router](https://github.com/Simplr/simplr-router) with Preact.

## Usage

The example is created on top of Preact cli create default.

```javascript
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
```

The properties from dynamic routes are accessible from the props of the component.

```javascript
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./style.css";

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
  const [time, setTime] = useState(Date.now());
  const [count, setCount] = useState(10);

  useEffect(() => {
    let timer = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div class={style.profile}>
      <h1>Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>

      <p>
        <button onClick={() => setCount((count) => count + 1)}>Click Me</button>{" "}
        Clicked {count} times.
      </p>
    </div>
  );
};

export default Profile;
```
