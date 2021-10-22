import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  restart,
  searchBand,
  orderNameFalling,
  orderNameUp,
  orderYearFalling,
  orderYearUp,
} from "../../actions";
import Logout from "../Logout/Logout";
import style from "./styles/NavBar.module.css";

export default function NavBar() {
  let dispatch = useDispatch();

  let [bandsFiltered, setBandsFiltered] = useState({
    name: "",
  });

  function handlerSubmit(event) {
    console.log(bandsFiltered);
    event.preventDefault();
    dispatch(searchBand(bandsFiltered.name));
    setBandsFiltered({ name: "" });
  }
  function handlerInput(event) {
    setBandsFiltered({
      name: event.target.value,
    });
  }

  function restarting() {
    dispatch(restart());
  }

  function orderedName(event) {
    if (event.target.value === "upward") {
      dispatch(orderNameUp());
    } else {
      dispatch(orderNameFalling());
    }
  }

  function orderedYear(event) {
    if (event.target.value === "upward") {
      dispatch(orderYearUp());
    } else {
      dispatch(orderYearFalling());
    }
  }

  return (
    <div className={style.container}>
      <button onClick={restarting} className={style.button_nav}>
        Reset
      </button>
      <Logout />
      <div>
        <select
          name="order"
          onClick={(event) => orderedName(event)}
          className={style.select_nav}
        >
          <option>Ordering by Name</option>
          <option value="upward">Upward</option>
          <option value="falling">Falling</option>
        </select>
      </div>
      <div>
        <select
          name="order"
          onClick={(event) => orderedYear(event)}
          className={style.select_nav}
        >
          <option>Ordering by Year</option>
          <option value="upward">Upward</option>
          <option value="falling">Falling</option>
        </select>
      </div>
      <form onSubmit={(event) => handlerSubmit(event)}>
        <input
          type="text"
          name="search"
          value={bandsFiltered.name}
          onChange={(event) => handlerInput(event)}
          className={style.input_nav}
        />
        <button type="submit" className={style.button_nav}>
          Search
        </button>
      </form>
    </div>
  );
}
