import React from "react";
import "./Style.css";
import { Input } from "reactstrap";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const SocialConnect = () => {
  return (
    <div className="connect1 width_60_media">
    <div className="header-df-all">
         <span>Social Connect</span>
    </div>
      <div className="divbtnconnect">
        <br />
        <input
          className="btnconnect"
          placeholder=" Facebook link"
          // Using default values:
          focusColor="#09F"
          backgroundColor="var(--token-e2079bf0-f281-429e-90ac-e5958a3c1a75, rgb(35, 53, 77)) "
          keyboard=""
          lineHeight={1.4}
          maxLength={50}
          type="text"
          textAlign="left"
          textColor="#333"
        />{" "}
        <p>
          {" "}
          <BsFacebook className="connecticons" />
        </p>{" "}
      </div>
      <div className="divbtnconnect">
        <input
          className="btnconnect"
          placeholder=" Twitter link"
          // Using default values:
          focusColor="#09F"
          keyboard=""
          lineHeight={1.4}
          maxLength={50}
          type="text"
          textAlign="left"
          textColor="#333"
          // value=""
        />{" "}
        <p>
          <BsTwitter className="connecticons" />
        </p>{" "}
      </div>{" "}
      <div className="divbtnconnect">
        <input
          className="btnconnect"
          placeholder=" Instagram link"
          // Using default values:
          focusColor="#09F"
          keyboard=""
          lineHeight={1.4}
          maxLength={50}
          type="text"
          textAlign="left"
          textColor="#333"
          // value=""
        />{" "}
        <p>
          {" "}
          <AiFillInstagram className="connecticons" />
        </p>{" "}
      </div>{" "}
      <div className="divbtnconnect">
        <input
          className="btnconnect"
          placeholder=" Youtube"
          // Using default values:
          focusColor="#09F"
          keyboard=""
          lineHeight={1.4}
          maxLength={50}
          type="text"
          textAlign="left"
          textColor="#333"
          // value=""
        />{" "}
        <p>
          {" "}
          <BsYoutube className="connecticons" />
        </p>{" "}
      </div>
    </div>
  );
};
export default SocialConnect;
