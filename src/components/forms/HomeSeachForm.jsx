import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form } from "semantic-ui-react";
import { AMOUNT, CITY, COUNTRY, STATE } from "../../assets/strings";

const HomeSeachForm = ({
  countryOptions,
  stateOptions,
  citiesOptions,
  onChange,
  onFinish,
}) => {
  const [dataValues, setDataValues] = useState({
    countryOptions,
  });

  const onChangeForm = (name, value) => {
    // setDataValues({ ...dataValues, [name]: value });
    onChange(name, value);
  };
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field>
          <label>País</label>
          <Dropdown
            placeholder="Select Country"
            fluid
            selection
            options={countryOptions || []}
            onChange={(e, { value }) => onChangeForm(COUNTRY, value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Región</label>
          <Dropdown
            placeholder="Selecciona región"
            fluid
            selection
            options={stateOptions || []}
            onChange={(e, { value }) => onChangeForm(STATE, value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Ciudad</label>
          <Dropdown
            placeholder="Selecciona Ciudad"
            fluid
            selection
            options={citiesOptions || []}
            onChange={(e, { value }) => onChangeForm(CITY, value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Monto</label>
          <input
            placeholder="Precio"
            onChange={(e) => onChangeForm(AMOUNT, e?.target?.value)}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group>
        <Button onClick={onFinish}>Buscar</Button>
      </Form.Group>
    </Form>
  );
};

export default HomeSeachForm;
