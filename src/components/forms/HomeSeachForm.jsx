import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form } from "semantic-ui-react";

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
            onChange={(e, { value }) => onChangeForm("country", value)}
          />
        </Form.Field>
        <Form.Field>
          <label>State</label>
          <Dropdown
            placeholder="Select State"
            fluid
            selection
            options={stateOptions || []}
            onChange={(e, { value }) => onChangeForm("state", value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Ciudad</label>
          <Dropdown
            placeholder="Select City"
            fluid
            selection
            options={citiesOptions || []}
            onChange={(e, { value }) => onChangeForm("city", value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Monto</label>
          <input
            placeholder="Amount"
            onChange={(e) => onChangeForm("amount", e?.target?.value)}
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
