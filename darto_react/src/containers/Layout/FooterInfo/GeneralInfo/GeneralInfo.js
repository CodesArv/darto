import React, { useState, useEffect } from "react";
import "./GeneralInfo.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import { endpoint } from "../../../../assets/api/endpoint";
import { apiHandler } from "../../../../assets/api";

const GeneralInfo = () => {
  // const [footerElem, setFooterElem] = useState([]);
  // const [footerWebElem, setFooterWebElem] = useState([]);
  // useEffect(() => {
  //   GetFooter();
  // }, []);
  // const GetFooter = async () => {
  //   const result = await apiHandler({
  //     url: endpoint.GET_FOOTER,
  //     method: "GET",
  //     data: null,
  //   });
  // parseData(result.data);
  // parseWebInfoData(result.data);
  // };
  // const parseData = (data) => {
  //   let lists = [];
  //   data &&
  //     data.eventFooter.forEach((item) => {
  //       if (item.category === "General Info") {
  //         lists.push({
  //           url: item.url,
  //           name: item.name,
  //         });
  //       }
  //     });
  //   setFooterElem(lists);
  // };
  // const parseWebInfoData = (data) => {
  //   let lists = [];
  //   data &&
  //     data.eventFooter.forEach((item) => {
  //       if (item.category === "Web Info") {
  //         lists.push({
  //           url: item.url,
  //           name: item.name,
  //         });
  //       }
  //     });
  //   setFooterWebElem(lists);
  // };
  // const parseData = (data) => {
  //   let lists = [];
  //   data &&
  //     data.forEach((item) => {
  //       if (item.category === "General Info") {
  //         lists.push({
  //           url: item.url,
  //           name: item.name,
  //         });
  //       }
  //     });
  //   setFooterElem(lists);
  // };
  return (
    <>
      <div className='s-t-a-k-e-genres'>
        <div className='general-info'>
          <h1 className='general-info'>General Info</h1>
        </div>
        {/* {footerElem &&
          footerElem.map((item) => ( */}
        <>
          <div className='row' style={{ width: "100%" }}>
            <div className='col-md-auto col-lg-6'>
              <Link className='list-serach1' to='/aboutcontent'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'>About Us</span>
                <span>
                  {" "}
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
              <Link className='list-serach1' to='/contactcontent'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'>Contact Us</span>
                <span>
                  {" "}
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
              <Link className='list-serach1' to='/playcontent'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'>How to Play</span>
                <span>
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
              <Link className='list-serach1' to='/tournament'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'>Tournament & Event</span>
                <span>
                  {" "}
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
              <Link className='list-serach1' to='/teamclub'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'> Clubs & Teams</span>
                <span>
                  {" "}
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
              <Link className='list-serach1' to='/advantages'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'> Advantages</span>
                <span>
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
            </div>
            <div className='col-md-auto col-lg-6'>
              <Link className='list-serach1' to='/liveplay'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'>Live Play</span>
                <span>
                  {" "}
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
              <Link className='list-serach1' to='/match'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'>Matches</span>
                <span>
                  {" "}
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
              <Link className='list-serach1' to='/offer'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'>Offers</span>
                <span>
                  {" "}
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
              <Link className='list-serach1' to='/gallery'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'>Gallery</span>
                <span>
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
              <Link className='list-serach1' to='/parteners'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'>Partners & Franchies</span>
                <span>
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
              <Link className='list-serach1' to='/spacelist'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'>Open Darto Center</span>
                <span>
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
              <Link className='list-serach1' to='/rules'>
                {/* <div className="list-serach1"> */}
                <span className='about-darto'>Darto Rules</span>
                <span>
                  <MdOutlineArrowForwardIos className='about-darto' />
                </span>
                {/* </div> */}
              </Link>
            </div>
          </div>
        </>
        {/* ))} */}
      </div>

      {/* <div className="list-serach1">
          <p className="about-darto">Contact Us</p>
          <MdOutlineArrowForwardIos className="about-darto" />
        </div>
        <div className="list-serach1">
          <p className="about-darto">How to Play</p>
          <MdOutlineArrowForwardIos className="about-darto" />
        </div>
        <div className="list-serach1">
          <p className="about-darto">Rules & Regulations</p>
          <MdOutlineArrowForwardIos className="about-darto" />
        </div>
        <div className="list-serach1">
          <p className="about-darto">FAQs</p>
          <MdOutlineArrowForwardIos className="about-darto" />
        </div> */}
    </>
  );
};
export default GeneralInfo;
