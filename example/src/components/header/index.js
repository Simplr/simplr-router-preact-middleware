import { h } from "preact";
import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <h1>Preact App</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/profile">Profile</a>
      <a href="/profile/John">John</a>
    </nav>
  </header>
);

export default Header;
