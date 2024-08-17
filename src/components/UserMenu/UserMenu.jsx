import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenuWrap}>
      <p className={css.userMenu}>Welcome, <span className={css.userName}>{user.name}</span></p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
        className={css.logoutBtn}
      >
        Logout
      </button>
    </div>
  );
}
