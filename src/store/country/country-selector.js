export function selectCountry(state) {
  return state.country.country;
}

export function selectCountryInfo(state) {
  return state.country;
}

export function selectNeighbors(state) {
  return state.country.neighbors;
}
