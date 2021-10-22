import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../actions";
import styles from "./styles/Login.module.css";

export default function Login() {
  let dispatch = useDispatch();
  let history = useHistory();
  let session = useSelector((state) => state.session);
  let user = useSelector((state) => state.user);
  let [user_log, setUser_log] = useState({
    username: "",
    password: "",
  });

  function handlerSubmit(event) {
    event.preventDefault();
    if (
      user.username === user_log.username &&
      user.password === user_log.password
    ) {
      dispatch(login());
      history.push("/home");
      console.log(session);
    } else {
      alert("Invalid username or password");
    }
  }
  function handlerInput(event) {
    setUser_log({ ...user_log, [event.target.name]: event.target.value });
  }

  return (
    <div className={styles.container_principal}>
      <form
        onSubmit={(event) => handlerSubmit(event)}
        className={styles.form_login}
      >
        <input
          type="text"
          name="username"
          placeholder="Username..."
          value={user_log.username}
          onChange={(event) => handlerInput(event)}
          required
          className={styles.input_login}
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          value={user_log.password}
          onChange={(event) => handlerInput(event)}
          required
          className={styles.input_login}
        />
        <button type="submit" className={styles.button_login}>
          Login
        </button>
      </form>
    </div>
  );
}
