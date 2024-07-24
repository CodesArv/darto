import React from "react";
import Card from "react-bootstrap/Card";
import { CardText } from "reactstrap";
import "./OfferCard.css";
const OfferCard = ({ TitleOffer, textoffer, offerimg }) => {
  return (
    <>
      <Card style={{ backgroundColor: "#00bbff" }}>
        <Card.Img variant='top' src={offerimg} />
        <Card.Body className='card_Body_BackGround'>
          <Card.Title className='class_text_27px'>{TitleOffer}</Card.Title>
          <Card.Text className='class_text_14px'>{textoffer}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  );
};
export default OfferCard;
