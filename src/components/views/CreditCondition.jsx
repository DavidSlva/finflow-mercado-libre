import React from "react";
import { Container } from "semantic-ui-react";
import CreditConditionForm from "../forms/CreditConditionForm";

const CreditCondition = () => {
  return (
    <Container style={{ padding: "20px" }}>
      <h4>Condiciones del Crédito</h4>

      <CreditConditionForm />
    </Container>
  );
};

export default CreditCondition;
