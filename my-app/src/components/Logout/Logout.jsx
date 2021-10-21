import { useDispatch } from "react-redux";
import { logout } from "../../actions";
import { useHistory } from "react-router-dom";

export default function Logout() {
  let history = useHistory();
  let dispatch = useDispatch();
  function logout_false() {
    dispatch(logout());
    history.push("/");
  }
  return (
    <div>
      <button onClick={logout_false}>Logout</button>
    </div>
  );
}
