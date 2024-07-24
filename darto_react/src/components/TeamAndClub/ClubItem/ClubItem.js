import React from "react";
import "../../../domains/HomePage/Team/Team.css";


//import { Container,Row,Col, Button } from "react-bootstrap";
import { RiTeamLine } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FcShare } from "react-icons/fc";
import MaterialIcon from "react-google-material-icons";
import { Link, useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ShareItem from "../../../containers/ShareItem/ShareItems/ShareItems";
import "../TeamItem/TeamItem.css";
import { width } from "@mui/system";

const ClubItem = ({
  teamClub,
  TeamName,

  More,
  locality,
  recordId,
  Member,

  Club,
  locate,
}) => {
  const history = useHistory();
  const [modalShows, setModalShows] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const myteamup = (id) => {
    history.push("/club/" + id);
  };

  // const myclubup = () => {
  //   history.push("/clubt");
  // };
  return (
    <>
      <div
        className="stake-avator"
        style={{ borderBottom: "none"
        // ,
        // paddingLeft:'20px',paddingRight:'20px'
         }}
        onClick={() => myteamup(recordId)}
      >
        <div className="team-one curser-pointer">
          <div>
          <div className="margin_paddin_Absolute">
                  <span className="loc_Tc_Logo1">
                    <MaterialIcon
                      color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                      icon="stream"
                      stretch={true}
                      size="12px"
                    />
                  </span>
                  <span className="total-members-10 loc_Tc_Logo_c">
                    {" "}
                    {Club}
                  </span>
                </div>
            <img
              className="team-d-p"
             
              src={teamClub}
            />
             
          </div>

          <div className="stake-team-details">
            <div className="textadmin" style={{ marginTop: "-20px" }}>
              <span className="font_Style_Common">{TeamName}</span>
            </div>
            <div className="stackline">
              <span className="color_Gray_Twelve"> {locality}</span>
            </div>
            {/* <div className="stackline">
              <span className="color_Gray_Twelve"> {Member}</span>
            </div> */}
            <div className="stackline">
              
              <div>
                <span className="loc_Tc_Logo">
                  <MaterialIcon
                    color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
                    icon="share_location"
                    stretch={true}
                    size="10px"
                  />
                </span>
                <span className="total-members-10"> {locate}</span>
              </div>
            </div>
          
            <div className="display_Line_End" >
            <div className="stackline">
              <span className="color_Gray_Twelve"> {More}</span>
            </div>

              <div className="align_Display_Flex"
                style={{
                  color:
                    "var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255))",
                }}
              >
                <MaterialIcon
                  color="var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255)) "
                  icon="navigate_next"
                  stretch={true}
                  size="12px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubItem;
