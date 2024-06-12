const BASE_URL = "https://restcountries.com/v2/";

export function getAllCountries() {
  return BASE_URL + "all?fields=name,capital,flags,population,region";
}

export function searchByCountry(name) {
  return BASE_URL + "name/" + name;
}

export function filterByCode(codes) {
  return BASE_URL + "alpha?codes=" + codes.join(",");
}
