import { NavLink } from "react-router-dom";
import css from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <div className={css.wrap}>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
}