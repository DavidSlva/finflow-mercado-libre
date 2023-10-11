import React from "react";
import { Checkbox, Dropdown, Form } from "semantic-ui-react";

const CreditConditionForm = () => {
  const options = [{ key: 1, value: "option1", text: "Seleccione" }];
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field>
          <label>Tipo Bien Raíz</label>
          <Dropdown
            placeholder="Seleccione Bien Raíz"
            fluid
            selection
            options={options}
          />
        </Form.Field>
        <Form.Field>
          <label>Finalidad</label>
          <Dropdown
            placeholder="Compraventa"
            fluid
            selection
            options={options}
          />
        </Form.Field>
        <Form.Field>
          <label>Tipo Crédito</label>
          <Dropdown
            placeholder="Fines Generales"
            fluid
            selection
            options={options}
          />
        </Form.Field>
        <Form.Field>
          <label>Producto</label>
          <Dropdown
            placeholder="CRÉDITO UNIVERSAL"
            fluid
            selection
            options={options}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field>
          <label>Campaña Hipotecaria</label>
          <Dropdown
            placeholder="Seleccione Campaña"
            fluid
            selection
            options={options}
          />
        </Form.Field>
        <Form.Field>
          <label>Antiguedad</label>
          <Dropdown
            placeholder="Seleccione Antiguedad"
            fluid
            selection
            options={options}
          />
        </Form.Field>
        <Form.Field>
          <label>Tipo Construcción</label>
          <Dropdown
            placeholder="Seleccione"
            fluid
            selection
            options={options}
          />
        </Form.Field>
        <Form.Field>
          <label>Seguro de Incendio</label>
          <Dropdown
            placeholder="INCENDIO - Consorcio Nacional de Seguros S.A.(0.1990000)"
            fluid
            selection
            options={options}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field>
          <label>Seguro de Desgravamen</label>
          <Dropdown
            placeholder="Seleccione Seguro"
            fluid
            selection
            options={options}
          />
        </Form.Field>
        <Form.Field>
          <label>Seguro de Cesantía</label>
          <Dropdown
            placeholder="Seleccione Seguro"
            fluid
            selection
            options={options}
          />
        </Form.Field>
        <Form.Field>
          <label>Nro. de Asegurados</label>
          <Dropdown
            placeholder="Nro. de Asegurador"
            fluid
            selection
            options={options}
          />
        </Form.Field>
        <Form.Field>
          <label>Recepción Municipal</label>
          <Dropdown
            placeholder="Seleccione"
            fluid
            selection
            options={options}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group>
        <Form.Field>
          <Checkbox label="DFL2" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Ley 20.130" />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default CreditConditionForm;
