import React from "react";
import "./Payment.css";
import { Container, Row, Col } from "reactstrap";
import { SiVerizon } from "react-icons/si";
import { ImCross } from "react-icons/im";
import MobileHeader from "../Layout/MobileHeader/MobileHeader";
import MaterialIcon from "react-google-material-icons";
const PaymentPlan = () => {
  return (
    <div className="screen-home-payment">
      <div className="payment-plans-head">Payment Plans</div>
      <div className="stack-paymnet-plant">
        <div className="select-your-plans">Select Your Plans</div>
        <div className="stack-your-plan-paymnt">
          <div className="frame-stack-your-plan-paymnt">
            <div className="round-paymt">
              <div className="std-pyt ">std</div>
            </div>
            <div className="standard-define">Standared</div>
          </div>
          <div className="frame-stack-your-plan-paymnt">
            <div className="round-paymt-premium ">
              <div className="std-pyt ">Pre</div>
            </div>
            <div className="standard-define">Premium</div>
          </div>
        </div>
        <div className="frame-df-all">
          <div className="round-all-d">
            {/* <div className="round-d-al-us"></div> */}
          </div>
          <div className="month-df-h" style={{display:'flex'}}>
          <div className="">
            <div className="_1-roun">1</div>{" "}
            </div>{" "}
            <div className="" style={{padding:'5px'}}>
            <span  className="row value-for-money">Month</span>{" "}
            <span className="row value-for-money">Value For Money</span>
            </div>
          </div>
          <div className="_10-dd">10$</div>
        </div>
      </div>
      <div className="stack-all-time">
        <div className="features-all-time">
          <span>Features</span>
        </div>
        <div className="features-list1"></div>
        <div className="features-list1-define">
          <span className="mt_Color_D">
            <MaterialIcon
              color="var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255))"
              icon="done"
              // Using default values:
              // stretch={false}
            />
          </span>
          <span className="no-watermark">no watermark</span>
        </div>
        <div className="features-list1-define" style={{display:'flex'}}>
          <div className="mt_Color_D1">
            <MaterialIcon
              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
              icon="close"
              // stretch={false}
            />
          </div>
          <span className="no-watermark">Logo Gallery Access</span>
        </div>
        <div className="features-list1-define">
          <span  className="mt_Color_D1">
            <MaterialIcon
              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
              icon="close"
              stretch={true}
            />
          </span>
          <span className="no-watermark">Templates Access</span>
        </div>
        <div className="features-list1-define">
          <span  className="mt_Color_D1">
            <MaterialIcon
              color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))"
              icon="close"
              stretch={true}
            />
          </span>
          <span className="no-watermark">Layout Access</span>
        </div>
      </div>
      {/* <div className="round-buy-bt "> */}
      <button className="round-buy-bt">
        buy-standard-plan
      </button>
      {/* </div> */}
      {window.innerWidth <= 768 && <MobileHeader />}
    </div>
     
  );
};
export default PaymentPlan;
