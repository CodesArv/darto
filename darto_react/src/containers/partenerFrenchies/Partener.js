import React, { useState, useEffect } from "react";
// import "./CompanyLogos.css";
// import "../../../../components/InformationFooter/Style.css";
import { Container, Row, Col } from "reactstrap";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import ct_logo_sign from "../../assets/logodarts/ct_logo_sign.png";
import LOGO_KEA_final from "../../assets/logodarts/LOGO_KEA_final.png";
import LOGO_Screen1024_with_txt from "../../assets/logodarts/LOGO_Screen1024_with_txt.png";
import Vc_creative_text from "../../assets/logodarts/Vc_creative_text.png";
import viz_onair_plus_logoscreen from "../../assets/logodarts/viz_onair_plus_logoscreen.png";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../assets/api/endpoint";

const Partener = () => {
  const [rawDataRecord, setRawDataRecord] = useState([]);

  useEffect(() => {
    GetPartnerData();
  }, []);

  const GetPartnerData = async () => {
    const result = await apiHandler({
      url: endpoint.GET_PARTENER,
      method: "GET",
      data: null,
    });
    console.log(result.data);
    setRawDataRecord(result.data);
    //setFilteredTournamnetData(result.data);
  };
  return (
    <>
      <div className='width_60_media padding-lef-20px-padding-right-20px'>
        <div className='team_ClubBlock'>
          <div className='logo_With_Content padding_left_18px'>
            <span className='common_Font_Style_Gray padding_left_9px '>
              {" "}
              Partners & Franchies{" "}
            </span>
          </div>
        </div>
        <div class='about_Header'>
          <span>Streaming</span>
        </div>
        <div className='padding_profile_top'>
        <div className='col iconsrow'>
        {rawDataRecord &&
        rawDataRecord.map((item) => (
       
            <div className='col-3 arun justify_Content_flex_start' xs='3' sm='3'>
              <div className='icondiv'>
                <center>
                  <img src={item.image} className='companyL_0_G_O' /> <br />
                </center>
              </div>
            </div>
    
        
        ))}
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Partener;
