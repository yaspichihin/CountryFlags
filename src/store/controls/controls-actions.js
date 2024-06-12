import { SET_REGION, SET_SEARCH } from "./controls-consts";

export function setSearch(search) {
  return {
    type: SET_SEARCH,
    payload: search,
  };
}

export function setRegion(region) {
  return {
    type: SET_REGION,
    payload: region,
  };
}
