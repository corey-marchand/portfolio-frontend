import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carasoul from '../Carasoul/Carasoul-foodie';
import CarasoulEcommerce from '../Carasoul/Carasoul-eCommerce';
import CarasoulVeganCosmetics  from '../Carasoul/Carasoul-veganCosmetics';



const PortfolioCard = () => (
    <CardGroup className="container">
      <Card className="mr-5 px-4 py-4">
        <Carasoul variant="top" />
        <Card.Body>
          <Card.Title>Foodies Journal</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card className="mr-5 px-4 py-4">
        <CarasoulEcommerce variant="top" />
        <Card.Body>
          <Card.Title>eCommerce Store</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mr-5 px-4 py-4 border-left solid">
        <CarasoulVeganCosmetics variant="top" />
        <Card.Body>
          <Card.Title>Vegan Cosmetics</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
)

export default PortfolioCard;