import Band from "../Band/Band";
import { useSelector } from "react-redux";

export default function Bands() {
  let bands = useSelector((state) => state.bands);
  let genre = useSelector((state) => state.genre);

  function takeGenre(band) {
    let findGenre = "";

    for (let j = 0; j < genre.length; j++) {
      if (band.genreCode === genre[j].code) {
        findGenre = genre[j].name;
      }
    }

    return findGenre;
  }

  return (
    <div>
      {bands &&
        bands.map((band) => {
          return <Band name={band.name} genre={takeGenre(band)} id={band.id} />;
        })}
    </div>
  );
}
