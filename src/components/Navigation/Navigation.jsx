import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.navWrap}>
      <NavLink className={`${css.nav} ${css.home}`} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={`${css.nav} ${css.contacts}`} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
}