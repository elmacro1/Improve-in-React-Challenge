import {
  GET_BANDS,
  GET_GENRE,
  GET_ALBUMS,
  SEARCH_BAND,
  RESET,
  ORDER_YEAR_UP,
  ORDER_YEAR_FALLING,
  ORDER_NAME_UP,
  ORDER_NAME_FALLING,
} from "./constantActions";
import { BANDS_URL, GENRE_URL, ALBUMS_URL } from "./constantUrl";
import axios from "axios";

export function getBands() {
  return function (dispatch) {
    return axios.get(BANDS_URL).then((bands) => {
      dispatch({
        type: GET_BANDS,
        payload: bands.data,
      });
    });
  };
}

export function getGenre() {
  return function (dispatch) {
    return axios.get(GENRE_URL).then((genre) => {
      dispatch({
        type: GET_GENRE,
        payload: genre.data,
      });
    });
  };
}

export function getAlbums() {
  return function (dispatch) {
    return axios.get(ALBUMS_URL).then((albums) => {
      dispatch({
        type: GET_ALBUMS,
        payload: albums.data,
      });
    });
  };
}

export function searchBand(name) {
  return function (dispatch) {
    return axios.get(`${BANDS_URL}?name=${name}`).then((band) => {
      dispatch({
        type: SEARCH_BAND,
        payload: band.data,
      });
    });
  };
}

export function restart() {
  return {
    type: RESET,
  };
}

export function orderYearUp() {
  return function (dispatch) {
    return axios
      .get(`${BANDS_URL}?_sort=year&_order=asc`)
      .then((orderBands) => {
        dispatch({
          type: ORDER_YEAR_UP,
          payload: orderBands.data,
        });
      });
  };
}

export function orderYearFalling() {
  return function (dispatch) {
    return axios
      .get(`${BANDS_URL}?_sort=year&_order=desc`)
      .then((orderBands) => {
        dispatch({
          type: ORDER_YEAR_FALLING,
          payload: orderBands.data,
        });
      });
  };
}

export function orderNameUp() {
  return function (dispatch) {
    return axios
      .get(`${BANDS_URL}?_sort=name&_order=asc`)
      .then((orderBands) => {
        dispatch({
          type: ORDER_NAME_UP,
          payload: orderBands.data,
        });
      });
  };
}

export function orderNameFalling() {
  return function (dispatch) {
    return axios
      .get(`${BANDS_URL}?_sort=name&_order=desc`)
      .then((orderBands) => {
        dispatch({
          type: ORDER_NAME_FALLING,
          payload: orderBands.data,
        });
      });
  };
}
