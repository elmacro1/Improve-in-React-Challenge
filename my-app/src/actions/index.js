import { GET_BANDS, GET_GENRES, GET_ALBUMS } from "./constantActions";
import { BASE_URL } from "./constantUrl";
import axios from "axios";

export function getBands() {
  return function (dispatch) {
    return axios.get(BASE_URL).then((bands) => {
      dispatch({
        type: GET_BANDS,
        payload: bands.data.bands,
      });
    });
  };
}

export function getGenres() {
  return function (dispatch) {
    return axios.get(BASE_URL).then((genres) => {
      dispatch({
        type: GET_GENRES,
        payload: genres.data.genres,
      });
    });
  };
}

export function getAlbums() {
  return function (dispatch) {
    return axios.get(BASE_URL).then((albums) => {
      dispatch({
        type: GET_ALBUMS,
        payload: albums.data.albums,
      });
    });
  };
}
