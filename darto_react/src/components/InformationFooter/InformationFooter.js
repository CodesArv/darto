import React from "react";
import "./Style.css";
// import SocialFooter from "../SocialFooter/SocialFooter";
import CompanyLogos from "../../containers/Layout/FooterInfo/CompanyLogos/CompanyLogos";
import GeneralInfo from "../../containers/Layout/FooterInfo/GeneralInfo/GeneralInfo";
import WebInfo from "../../containers/Layout/FooterInfo/WebInfo/WebInfo";
import SocialFooter from "../SocialFooter/SocialFooter";
import { Link, useHistory } from "react-router-dom";
import HowToPlay from "../../containers/HowToPlay/HowToPlay";
import { Container } from "@mui/material";
import Bottom from "../../domains/HomePage/Gallery/galleryBotton";
import JoinFooter from "./joinWithUs";

const InformationFooter = () => {
  const history = useHistory();

  const list = () => {
    history.push("/spacelist");
  };
  return (
    <>
      <div className='width_60_media'>
        <div className='container  padding-10px-left-right-tournament'>
          <Bottom />
          <div className='row width_100_per gap_with_10px '>
            <div className='col-md-auto col-lg-6'>
              <HowToPlay />
            </div>
            <div className=' col-md-auto col-lg-6 '>
              <JoinFooter />
            </div>
            <div></div>
            {/* <SocialFooter /> */}

            <CompanyLogos />
            <div className='row divider_1px_23345d'>
              <div className='col-md-auto col-lg-8'>
                <GeneralInfo />
              </div>
              <div className='col-md-auto col-lg-4'>
                <WebInfo />
                <SocialFooter />
              </div>

              <div
                className='copyRight_define '
                style={{ paddingBottom: "130px" }}
              >
                <span>
                  Copyright © 2022 DARTO. ALL RIGHTS RESERVED. ALL TRADEMARKS
                  CONTAINED HEREIN ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS.
                  VIZ CREATIVE.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InformationFooter;
