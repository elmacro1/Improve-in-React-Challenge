import { Link } from "react-router-dom";

export default function Band({ id, name, genre }) {
  return (
    <div>
      <Link to={`/band/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>{genre}</p>
    </div>
  );
}
