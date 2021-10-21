import Band from "../Band/Band";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBands, getGenre, getAlbums } from "../../actions/index";

export default function Bands() {
  const dispatch = useDispatch();

  let bands = useSelector((state) => state.bands);
  let genre = useSelector((state) => state.genre);
  let albums = useSelector((state) => state.albums);

  useEffect(() => {
    dispatch(getBands());
    dispatch(getGenre());
    dispatch(getAlbums());
  }, []);

  function takeGenre(band) {
    let findGenre = "";

    for (let j = 0; j < genre.length; j++) {
      if (band.genreCode === genre[j].code) {
        findGenre = genre[j].name;
      }
    }

    console.log(findGenre);
    return findGenre;
  }

  function takeAlbums(band) {
    let findAlbums = [];
    for (let i = 0; i < albums.length; i++) {
      if (band.id === albums[i].bandId) {
        findAlbums.push(albums[i]);
      }
    }
    return findAlbums;
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
