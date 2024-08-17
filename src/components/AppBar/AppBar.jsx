import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import NavMenu from "../NavMenu/NavMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "../AppBar/AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <>
      <div className={css.container}>
        <header className={css.header}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <NavMenu />}
        </header>
      </div>
      <hr />
    </>
  );
}