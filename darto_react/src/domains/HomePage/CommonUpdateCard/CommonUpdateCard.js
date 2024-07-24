import React from "react";
import "../../../domains/HomePage/Team/Team.css";

import "./CommonCardUpdate.css";

const CommonUpdateCard = ({ TeamName, memberClub, Member, Age, image }) => {
  return (
    <>
      <div className='stake-avator1' style={{ padding: "10px" }}>
        <div className='stacks1'>
          <div className='team-joined'>
            <p>{TeamName}</p>
          </div>
        </div>
        <div className='team-one'>
          {/* <div className="team-d-p"> */}
          <img className='team-d-p' src={memberClub} />
          {/* </div> */}

          <div className='stake-team-details1'>
            <div className='textpara1'>
              <p style={{ color: "#00bbff" }}> {Member}</p>
            </div>
            <div className='stackline'>
              <p className='total-members-10'> {Age}</p>
            </div>
          </div>
          {/* <span className="stake-avator-remve">
         Remove
    </span> */}
        </div>
      </div>
    </>
  );
};

export default CommonUpdateCard;
