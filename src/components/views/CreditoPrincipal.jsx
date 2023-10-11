import React from "react";
import { Container } from "semantic-ui-react";
import CreditoPrincipalForm from "../forms/CreditoPrincipalForm";

const CreditoPrincipal = () => {
  return (
    <Container style={{ padding: "20px" }}>
      <h4>Simulacion Credito</h4>

      <CreditoPrincipalForm />
    </Container>
  );
};

export default CreditoPrincipal;
