export function selectCountriesInfo(state) {
  return {
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length,
  };
}

export function selectAllCountries(state) {
  return state.countries.list;
}

export function selectVisibleCountries(state, { search = "", region = "" }) {
  return state.countries.list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
      country.region.includes(region)
  );
}
