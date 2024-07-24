import React from "react";
import "./Style.css";

import { Card, CardText, CardBody, CardSubtitle } from "reactstrap";

const TournamentCommonCard = ({ Subtitles, CardTexts, HomeImage }) => {
  console.log("HomeImage - ", HomeImage);
  return (
    <div className='bg-color3 '>
      <Card
        style={{
          flex: 1,
          backgroundColor: "#10142c",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <img src={HomeImage} style={{ width: "100%" }} />

        <CardBody className='colourqw'>
          <CardSubtitle className='mb-2 Commoncardpink '>
            {Subtitles}
          </CardSubtitle>
          <CardText
            className='tournamentdetailscardtour alignrightt '
            style={{ fontSize: "14px" }}
          >
            {CardTexts}
          </CardText>

          <br />
        </CardBody>
      </Card>
    </div>
  );
};
export default TournamentCommonCard;
