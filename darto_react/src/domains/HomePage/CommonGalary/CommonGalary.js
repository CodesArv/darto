import React from "react";

import { Card, CardImg, CardText, CardBody } from "reactstrap";
const CommonGallery = ({
  eventImg,
  CardTexts,
  Carttexts1,
  description,
  session,
}) => {
  return (
    <>
      <div class='grid-item-def mb-2 '>
        <Card style={{ flex: 1, backgroundColor: "#10142c" }}>
          <CardImg
            style={{ width: "100%", borderRadius: "10px" }}
            src={eventImg}
            alt='Card image cap'
            className='styleHeight'
          />
          <CardBody style={{ textAlign: "left" }}>
            <CardText className='twelve_With_Blue'>
              {CardTexts} {session}
            </CardText>
            <CardText className='txtcolor6'>{description}</CardText>
            <CardText className='txtcolor6'>{Carttexts1}</CardText>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default CommonGallery;
