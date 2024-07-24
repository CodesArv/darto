import React from "react";
import Tournamentcard from "./Tournamentcard";
import MaterialIcon from "react-google-material-icons";
const mainTournament = () => {
  return (
    <>
      <div>
        <div className='team_ClubBlock'>
          <div className='logo_With_Content'>
            <span className='logo_Tc_color'>
              <MaterialIcon
                color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                icon='ads_click'
                stretch={true}
                size='16px'
              />{" "}
            </span>{" "}
            <span className='content_Right'>Tournaments&Event </span>
          </div>
        </div>
        <Tournamentcard />
      </div>
    </>
  );
};
export default mainTournament;
