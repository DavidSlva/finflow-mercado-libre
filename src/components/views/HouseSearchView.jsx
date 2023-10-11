import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  Dropdown,
  Form,
  Image,
  Segment,
} from "semantic-ui-react";
import { transformDropdown } from "../../utils/SemanticUI";
import HousesList from "../lists/HousesList";
import HomeSeachForm from "../forms/HomeSeachForm";
import { CITY, COUNTRY, STATE } from "../../assets/strings";
import Loading from "../Loading";

const HouseSearchView = (props) => {
  const { countries, states, houses, cities, isLoadingCountries } = props;

  const [dataValues, setDataValues] = useState({
    country: null,
    state: null,
    city: null,
    amount: null,
  });

  console.log(countries, states, houses, cities);

  const countryOptions = useMemo(() => {
    return transformDropdown(countries, "id", "id", "name");
  }, [countries]);

  const stateOptions = useMemo(() => {
    return transformDropdown(states?.data, "id", "id", "name");
  }, [states?.data]);

  const citiesOptions = useMemo(() => {
    return transformDropdown(cities?.data, "id", "id", "name");
  }, [cities?.data]);

  const [selectedIds, setSelectedIds] = useState([]);

  const handleChoose = (id) => {
    setSelectedIds((prev) => [...prev, id]);
  };

  const buscarCasas = () => {
    houses.get(dataValues);
  };
  const onChangeForm = (name, value) => {
    setDataValues({ ...dataValues, [name]: value });
    if (name === COUNTRY) states.get();
    if (name === CITY) houses.get();
    if (name === STATE) cities.get();
  };

  return (
    <div style={{ padding: "20px" }}>
      <Segment>
        {!isLoadingCountries ? (
          <HomeSeachForm
            countryOptions={countryOptions}
            stateOptions={stateOptions}
            citiesOptions={citiesOptions}
            onChange={onChangeForm}
            onFinish={buscarCasas}
          />
        ) : (
          <Loading />
        )}
      </Segment>

      <div style={{ marginTop: "20px" }}>
        <HousesList
          houses={houses.data}
          handleChoose={handleChoose}
          selectedIds={selectedIds}
        />
      </div>
    </div>
  );
};

export default HouseSearchView;
