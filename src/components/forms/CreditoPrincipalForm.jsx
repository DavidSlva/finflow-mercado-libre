import React from "react";
import { Form, Dropdown, Button, Checkbox } from "semantic-ui-react";

const CreditoPrincipalForm = () => {
  const currencyOptions = [
    { key: "UF", value: "UF", text: "UF" },
    { key: "Pesos", value: "Pesos", text: "Pesos" },
    // Add more options as needed
  ];

  const dropdownOptions = [
    { key: "option1", value: "option1", text: "DS 01" },
    // Add more options as needed
  ];

  return (
    <Form>
      <Form.Group>
        <Form.Field width={4}>
          <label>Crédito Principal</label>
          <input placeholder="" />
        </Form.Field>
        <Form.Field width={4}>
          <label>Gastos Operacionales</label>
          <input placeholder="" />
        </Form.Field>
        <Form.Field width={4}>
          <label>Tasa</label>
          <input placeholder="Pesos" />
        </Form.Field>
        <Form.Field width={4}>
          <Checkbox label="Personalizar" slider />
        </Form.Field>
      </Form.Group>

      <Form.Group>
        <Form.Field width={4}>
          <label>Valor Propiedad</label>
          <input placeholder="" />
          <Dropdown
            inline
            options={currencyOptions}
            defaultValue={currencyOptions[0].value}
          />
        </Form.Field>
        <Form.Field width={4}>
          <label>Plazo (Años)</label>
          <input placeholder="Pesos" />
        </Form.Field>
      </Form.Group>

      <Form.Group>
        <Form.Field width={4}>
          <label>DS (No se qué es)</label>
          <Dropdown
            placeholder="DS 01"
            fluid
            selection
            options={dropdownOptions}
          />
          <Dropdown
            inline
            options={currencyOptions}
            defaultValue={currencyOptions[0].value}
          />
        </Form.Field>
        <Form.Field width={4}>
          <label>Monto Crédito</label>
          <input placeholder="" />
          <Dropdown
            inline
            options={currencyOptions}
            defaultValue={currencyOptions[0].value}
          />
        </Form.Field>
        <Form.Field width={4}>
          <label>Valor Contado</label>
          <input placeholder="" />
          <Dropdown
            inline
            options={currencyOptions}
            defaultValue={currencyOptions[0].value}
          />
        </Form.Field>
        <Form.Field width={4}>
          <label>% Financiamiento</label>
          <input placeholder="80,00" />
        </Form.Field>
      </Form.Group>

      <Form.Group>
        <Form.Field width={4}>
          <label>Monto Asegurable</label>
          <input placeholder="" />
          <Dropdown
            inline
            options={currencyOptions}
            defaultValue={currencyOptions[0].value}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group>
        <Form.Field>
          <Button primary>Calcular</Button>
        </Form.Field>
        <Form.Field>
          <Button>Imprimir</Button>
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default CreditoPrincipalForm;
