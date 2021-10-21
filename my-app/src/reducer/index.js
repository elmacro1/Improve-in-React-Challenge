import { GET_BANDS, GET_GENRES, GET_ALBUMS } from "../actions/constantActions";

let initialStore = {
  bands: [],
  genres: [],
  albums: [],
};

export default function rootReducer(state = initialStore, action) {
  switch (action.type) {
    case GET_BANDS:
      return {
        ...state,
        bands: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    default:
      return state;
  }
}
