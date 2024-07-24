import React from "react";
import "./CompanyLogos.css";
import "../../../../components/InformationFooter/Style.css";
import { Container, Row, Col } from "reactstrap";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import corbettrip_512X512 from "../CompanyLogos/dartoComapanylogos/corbettrip_512X512.png";
import darto_garnd_slam_logo_hd_16bit_final_greysacle from "../CompanyLogos/dartoComapanylogos/darto_garnd_slam_logo_hd_16bit_final_greysacle.png";
import darto_india_Series_of_darts_logo_hd_16bit_final_without_shadow_greyscale from "../CompanyLogos/dartoComapanylogos/darto_india_Series_of_darts_logo_hd_16bit_final_without_shadow_greyscale.png";
import darto_india_open_logo_hd_16bit_final_greyscale from "../CompanyLogos/dartoComapanylogos/darto_india_open_logo_hd_16bit_final_greyscale.png";

import darto_masters_logo_hd_16bit_final_greyscale from "../CompanyLogos/dartoComapanylogos/darto_masters_logo_hd_16bit_final_greyscale.png";
import darto_supergirl_logo_hd_16bit_final_greyscale from "../CompanyLogos/dartoComapanylogos/darto_supergirl_logo_hd_16bit_final_greyscale.png";
import kea_512X512 from "../CompanyLogos/dartoComapanylogos/kea_512X512.png";
import onair_512X512 from "../CompanyLogos/dartoComapanylogos/onair_512X512.png";
import premier_league_logo_hd_16bit_FINAL_greyscale from "../CompanyLogos/dartoComapanylogos/premier_league_logo_hd_16bit_FINAL_greyscale.png";
import School_premier_league_logo_hd_16bit_final_greyscale from "../CompanyLogos/dartoComapanylogos/School_premier_league_logo_hd_16bit_final_greyscale.png";
import screen_512X512 from "../CompanyLogos/dartoComapanylogos/screen_512X512.png";
import viz_512X512 from "../CompanyLogos/dartoComapanylogos/viz_512X512.png";
const CompanyLogos = () => {
  return (
    <div className="padding_profile_top">
      <div className="col iconsrow">
        <div className="col arun" xs="3" sm="3">
          <div className="icondiv">
            <center>
              <img src={corbettrip_512X512} className="companyL_0_G_O" /> <br />
            </center>
          </div>
        </div>
        <div className="col arun" xs="3" sm="3">
          <div className="icondiv">
            <center>
              <img src={darto_garnd_slam_logo_hd_16bit_final_greysacle} className="companyL_0_G_O" /> <br />
            </center>
          </div>
        </div>
        <div className="col arun" xs="3" sm="3">
          <div className="icondiv">
            <center>
              <img src={darto_india_Series_of_darts_logo_hd_16bit_final_without_shadow_greyscale} className="companyL_0_G_O" /> <br />
            </center>
          </div>
        </div>
        <div className="col arun" xs="3" sm="3">
          <div className="icondiv">
            <center>
              <img src={darto_masters_logo_hd_16bit_final_greyscale} className="companyL_0_G_O" /> <br />
            </center>
          </div>
        </div>
      </div>
      <div className="col iconsrow">
        <div className="col arun" xs="3" sm="3">
          <div className="icondiv">
            <center>
              <img src={darto_supergirl_logo_hd_16bit_final_greyscale} className="companyL_0_G_O" /> <br />
            </center>
          </div>
        </div>
        <div className="col arun" xs="3" sm="3">
          <div className="icondiv">
            <center>
              <img src={kea_512X512} className="companyL_0_G_O" /> <br />
            </center>
          </div>
        </div>
        <div className="col arun" xs="3" sm="3">
          <div className="icondiv">
            <center>
              <img src={onair_512X512} className="companyL_0_G_O" /> <br />
            </center>
          </div>
        </div>
        <div className="col arun" xs="3" sm="3">
          <div className="icondiv">
            <center>
              <img src={premier_league_logo_hd_16bit_FINAL_greyscale} className="companyL_0_G_O" /> <br />
            </center>
          </div>
        </div>
      </div>
      <div className="col iconsrow">
        <div className="col arun" xs="3" sm="3">
          <div className="icondiv">
            <center>
              <img src={School_premier_league_logo_hd_16bit_final_greyscale} className="companyL_0_G_O" /> <br />
            </center>
          </div>
        </div>
        <div className="col arun" xs="3" sm="3">
          <div className="icondiv">
            <center>
              <img src={screen_512X512} className="companyL_0_G_O" /> <br />
            </center>
          </div>
        </div>
        <div className="col arun" xs="3" sm="3">
          <div className="icondiv">
            <center>
              <img src={viz_512X512} className="companyL_0_G_O" /> <br />
            </center>
          </div>
        </div>
        <div className="col arun" xs="3" sm="3">
          <div className="icondiv">
            <center>
              <img src={darto_india_open_logo_hd_16bit_final_greyscale} className="companyL_0_G_O" /> <br />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
