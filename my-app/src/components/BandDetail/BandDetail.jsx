import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function BandDetail() {
  let genre = useSelector((state) => state.genre);
  let { id } = useParams();
  let [band, setBand] = useState({});

  async function getBandDetail() {
    let band = await axios.get(
      `https://my-json-server.typicode.com/improvein/dev-challenge/bands?id=${id}`
    );
    console.log(band.data[0]);
    setBand(band.data[0]);
  }

  function takeGenre(band) {
    let findGenre = "";

    for (let j = 0; j < genre.length; j++) {
      if (band.genreCode === genre[j].code) {
        findGenre = genre[j].name;
      }
    }
    return findGenre;
  }

  useEffect(() => {
    getBandDetail();
  }, []);

  return (
    <div>
      <h3>{band.name}</h3>
      <div>
        <h4>Year</h4>
        <p>{band.year}</p>
      </div>
      <div>
        <h4>Country</h4>
        <p>{band.country}</p>
      </div>
      <div>
        <h4>Members</h4>
        {band.members &&
          band.members.map((member) => {
            return <p>{member.name}</p>;
          })}
      </div>
      <div>
        <h4>Genres</h4>
        <p>{takeGenre(band)}</p>
      </div>
    </div>
  );
}
