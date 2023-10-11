import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { formatearPesosChilenos } from "../../utils/money";

const HousesList = ({ houses, handleChoose, selectedIds }) => {
  return (
    <Card.Group itemsPerRow={3}>
      {houses?.map((house) => (
        <Card key={house.id}>
          <Image src={house.thumbnail} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{house.title}</Card.Header>
            <Card.Meta>
              <span>Dirección: {house.location.address_line}</span>
              {/* Add other meta info if needed */}
            </Card.Meta>
            <Card.Description>
              Precio: {formatearPesosChilenos(house.price)} {house.currency_id}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              basic
              color="blue"
              onClick={() => handleChoose(house.id)}
              disabled={selectedIds.includes(house.id)}
            >
              Elegir
            </Button>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default HousesList;
