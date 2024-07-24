import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./CommonSign.css";
import logos from "./logos.png";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const CommonSign = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const onSerach =()=>{
  const { authToken } = useSelector((state) => state.login.authData);
  const { status } = useSelector((state) => state.login.userData);

  const Tappingl = () => {
    history.push("/tapping");
  };
  const handleLogout = () => {
    dispatch({ type: "SIGNOUT" });
    history.push("/userregister");
  };
  return (
    <>
    <div className="padding-10px-left-right-tournament">
      <div class='container1 '>
        <div class='first'>
          <h4 className='text'>
            FREE signup to the DARTO TO Receive Information, Latest News and
            Competitions
          </h4>
        </div>

        {status === 200 ? (
          <div class='second'>
            <img src={logos} alt='Logos' className='dartos' />
            <button className='dartosbtn' onClick={() => handleLogout()}>
              SignOut
            </button>
          </div>
        ) : (
          <div class='second'>
            <img src={logos} alt='Logos' className='dartos' />
            <button className='dartosbtn' onClick={() => handleLogout()}>
              SignUp
            </button>
          </div>
        )}
      </div>
      </div>
    </>
  );
};
export default CommonSign;
