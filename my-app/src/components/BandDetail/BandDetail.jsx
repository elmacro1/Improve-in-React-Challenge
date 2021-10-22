import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { restart } from "../../actions";

export default function BandDetail() {
  let dispatch = useDispatch();
  let genre = useSelector((state) => state.genre);
  let albums = useSelector((state) => state.albums);
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

  function takeAlbums(band) {
    let findAlbum = [];
    for (let i = 0; i < albums.length; i++) {
      if (band.id === albums[i].bandId) {
        findAlbum.push(albums[i]);
      }
    }
    return findAlbum;
  }
  useEffect(() => {
    getBandDetail();
    dispatch(restart());
  }, []);

  return (
    <div>
      <div>
        <Link to="/home">
          <button>Home</button>
        </Link>
      </div>
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
      <div>
        <h4>Albums</h4>
        {takeAlbums(band).map((album) => {
          return (
            <div>
              <h5>{album.name}</h5>
              <p>{album.year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
