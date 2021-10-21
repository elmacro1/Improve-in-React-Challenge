import {
  GET_BANDS,
  GET_GENRE,
  GET_ALBUMS,
  SEARCH_BAND,
  RESET,
  ORDER_NAME_FALLING,
  ORDER_NAME_UP,
  ORDER_YEAR_FALLING,
  ORDER_YEAR_UP,
} from "../actions/constantActions";

let initialStore = {
  bands: [],
  genre: [],
  albums: [],
  reset: [],
};

export default function rootReducer(state = initialStore, action) {
  switch (action.type) {
    case GET_BANDS:
      return {
        ...state,
        bands: action.payload,
        reset: action.payload,
      };
    case GET_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    case SEARCH_BAND:
      return {
        ...state,
        bands: action.payload,
      };
    case RESET:
      return {
        ...state,
        bands: state.reset,
      };
    case ORDER_NAME_FALLING:
      return {
        ...state,
        bands: action.payload,
      };
    case ORDER_NAME_UP:
      return {
        ...state,
        bands: action.payload,
      };
    case ORDER_YEAR_FALLING:
      return {
        ...state,
        bands: action.payload,
      };
    case ORDER_YEAR_UP:
      return {
        ...state,
        bands: action.payload,
      };
    default:
      return state;
  }
}
