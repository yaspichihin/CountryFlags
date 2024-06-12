import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { selectCountryInfo } from "../store/country/country-selector";
import {
  loadCountryByName,
  clearCountry,
} from "../store/country/country-actions";

export const Details = () => {
  const dispatch = useDispatch();
  const { country, status, error } = useSelector(selectCountryInfo);

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearCountry());
    };
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {country && <Info push={navigate} {...country} />}
    </div>
  );
};
