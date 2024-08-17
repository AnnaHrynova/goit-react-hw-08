import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./HomeLoggedIn.module.css";

export default function HomeLoggedIn() {
  const user = useSelector(selectUser);
  return (
    <main className={css.container}>
      <h1 className={css.title}>Welcome to Contacts App,<span className={css.userName}>{user.name}</span>
      </h1>
    </main>
  );
}