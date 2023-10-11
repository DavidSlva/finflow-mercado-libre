import React, { useEffect, useState } from "react";
import { useCallGetApi } from "../../api/useCallApi";
import HouseSearchView from "../views/HouseSearchView";
import { getToApi } from "../../api/axios";

const HouseSearch = () => {
  const [isLoadingCountries, setIsLoadingCountries] = useState(false);
  const [isLoadingStates, setIsLoadingStates] = useState(false);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [isLoadingHouses, setIsLoadingHouses] = useState(false);

  const [countries, callCountries, statusCountries, errorCountries] =
    useCallGetApi("http://127.0.0.1:8000/api/ml/countries/", {
      defaultValue: [],
    });
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    setIsLoadingCountries(true);
    callCountries().finally(() => setIsLoadingCountries(false));
  }, [callCountries]);

  const getStates = async (country) => {
    setIsLoadingStates(true);
    try {
      const response = await getToApi(
        `http://127.0.0.1:8000/api/ml/states/${country}/`
      );
      setStates(response.states || []);
    } finally {
      setIsLoadingStates(false);
    }
  };

  const getCities = async (state) => {
    setIsLoadingCities(true);
    try {
      const response = await getToApi(
        `http://127.0.0.1:8000/api/ml/cities/${state}/`
      );
      setCities(response.cities || []);
    } finally {
      setIsLoadingCities(false);
    }
  };

  const getHouses = async ({ city, amount }) => {
    setIsLoadingHouses(true);
    try {
      let url = `http://127.0.0.1:8000/api/ml/houses/${city}/${
        amount || 99999999999
      }/`;
      const response = await getToApi(url);
      console.log(response);
      let _houses = response.results;
      _houses = _houses?.map((item) => {
        const thumbnail = item.thumbnail;
        return {
          ...item,
          thumbnail:
            thumbnail.slice(0, thumbnail.lastIndexOf(".") - 1) + "W.webp",
        };
      });
      setHouses(_houses || []);
    } finally {
      setIsLoadingHouses(false);
    }
  };

  return (
    <HouseSearchView
      countries={countries}
      states={{
        get: getStates,
        data: states,
        isLoading: isLoadingStates,
      }}
      cities={{
        get: getCities,
        data: cities,
        isLoading: isLoadingCities,
      }}
      houses={{
        get: getHouses,
        data: houses,
        isLoading: isLoadingHouses,
      }}
      isLoadingCountries={isLoadingCountries}
    />
  );
};

export default HouseSearch;
