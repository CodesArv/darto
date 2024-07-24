import React, { useState } from "react";
import "./TournamentCommonCard6.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const TournamentCommonCard6 = ({
  Subtitles,
  CardTexts,
  CommImg,
  tournamentBt,
  comingfield,
}) => {
  const [imgVal, setImgVal] = useState(CommImg);
  console.log("Image - ", CommImg);
  return (
    <div className='bg-color3'>
      <Card
        style={{
          flex: 1,
          backgroundColor: "#10142c",
          border: "1px solid #23354d",
        }}
      >
        <img src={imgVal} alt='Tournament Image' className='styleHeight' />
        {comingfield === "true" && (
          <div className=' '>
            <CardBody
              className='card_Body_none1  padding-t0p-bottom-10px'
              style={{
                backgroundColor: "#10142c",
              }}
            >
              <div className='zxcv padding-t0p-bottom-10px'>
                <CardSubtitle className='font_Blue_twenty'>
                  {" "}
                  Coming Soon{" "}
                </CardSubtitle>{" "}
              </div>{" "}
            </CardBody>{" "}
          </div>
        )}
        {comingfield === "false" && (
          <>
            <CardBody className='colourqw1'>
              <CardSubtitle className='mb-2 Commoncardpink1 '>
                {Subtitles}
              </CardSubtitle>
              <CardText
                className='tournamentdetailscardtour alignrightt'
                style={{ fontSize: "3rem" }}
              >
                {CardTexts}
              </CardText>
              <br />
            </CardBody>
          </>
        )}
        {/* )} */}
      </Card>
    </div>
  );
};
export default TournamentCommonCard6;
