import { SET_SEARCH } from "./controls-consts";

export function setSearch(search) {
  return {
    type: SET_SEARCH,
    payload: search,
  };
}
