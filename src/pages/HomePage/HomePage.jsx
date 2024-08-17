import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import HomeLoggedIn from "../../components/HomeLoggedIn/HomeLoggedIn";
import HomeLoggedOut from "../../components/HomeLoggedOut/HomeLoggedOut";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return <>
  {isLoggedIn ? <HomeLoggedIn /> : <HomeLoggedOut />}
  </>;
}