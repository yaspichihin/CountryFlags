import { Info } from "./Info";
import { useCountryDetails } from "./use-countryDetails";

export const CountryDetails = ({ name = "", navigate }) => {
  const [currentCountry, { status, error }] = useCountryDetails(name);

  return (
    <>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};
