import { Link } from "react-router-dom";
import style from "./styles/Band.module.css";

export default function Band({ id, name, genre }) {
  return (
    <div className={style.container_main}>
      <div className={style.container}>
        <Link to={`/band/${id}`}>
          <button className={style.button}>Details</button>
        </Link>
        <h3>{name}</h3>
        <p>{genre}</p>
      </div>
    </div>
  );
}
