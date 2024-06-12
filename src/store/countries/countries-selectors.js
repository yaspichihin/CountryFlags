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
