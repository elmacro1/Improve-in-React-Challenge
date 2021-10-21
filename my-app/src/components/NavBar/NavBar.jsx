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
    <div>
      <button onClick={restarting}>Reset</button>
      <div>
        <select name="order" onClick={(event) => orderedName(event)}>
          <option>Ordering by Name</option>
          <option value="upward">Upward</option>
          <option value="falling">Falling</option>
        </select>
      </div>
      <div>
        <select name="order" onClick={(event) => orderedYear(event)}>
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
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
