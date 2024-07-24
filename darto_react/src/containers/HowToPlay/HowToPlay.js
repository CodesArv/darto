import React from "react";
import "./HowToPlay.css";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import index from "../../themes"
const HowToPlay = () => {
  const history = useHistory();
  const play = () => {
    history.push("/playcontent");
  };
  return (
    <>
      <div className='frame-slide6'>
        <div className='how-to-play'>How To Play</div>
     
        <div className='how-to-play1 padding_profile_top'>
          Darts is a sport enjoyed by all regardless of age or gender. People
          play for fun while others take this sport very seriously. The ’01 game
          is the most common followed Game 501, 701, 301,
        </div>
        <hr />
        <hr />
        <div className='how-to-play1' style={{ fontWeight: "400" }}>
          The DARTO commitment to spreading darts professional, as hobbies
          across India affiliations with regional tours in Delhi, UP, Tamilnadu,
          West Bangal
        </div>
        <hr />
        <hr />
        <div className='how-to-play2'>
          <button className='how-to-play3' onClick={() => play()}>
            Start Learning
          </button>
        </div>
      </div>
    </>
  );
};
export default HowToPlay;
