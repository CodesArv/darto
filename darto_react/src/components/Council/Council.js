import React from "react";
import "./Council.css";
const Council = ({
  CouncilName,
  CouncilImage,
  EmailId,
  Country,
  State,
  City,
  Pincode,
  recordId,
}) => {
  return (
    <>
      <div className='stake-avator row'>
        <div>
          <img className='team-d-p-council' src={CouncilImage} />
        </div>

        <div className='textadmin_council'>
          <p className='font_Style_Common_council'>{CouncilName}</p>
        </div>

        <div className='stackline_council'>
          <p className='color_Gray_Twelve_council'>
            {" "}
            {State}  {City} 
          </p>
        </div>
      </div>
    </>
  );
};
export default Council;
