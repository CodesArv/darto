import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Container,
} from "reactstrap";
import "./ArenaCrd.css";
import imgn from "../../../assets/images/logo_files/imgn.jpg";
import { BiStopwatch } from "react-icons/bi";
import { MdTrain } from "react-icons/md";
import { FcShare } from "react-icons/fc";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
const ArenaCard = () => {
  const history = useHistory();
  const onSerach = () => {
    history.push("/login");
  };
  return (
    <>
      <div>
        <Card
          style={{
            flex: 1,
            backgroundColor: "",
            marginLeft: "20px",
            marginRight: "20px",
          }}
          onClick={() => onSerach()}
        >
          <CardImg style={{ width: "100%" }} src={imgn} alt='Card image cap' />

          <CardBody>
            <CardSubtitle tag='h6' className='mb-2 text-muted amigo'>
              Amigo <span className='spn1'> 1.5 Km Away</span>
            </CardSubtitle>
            <CardText className='txtcolor3'>
              Coworking | <span className='spn'> Sector 4 Noida</span>
            </CardText>
            <Container>
              <table>
                <tr>
                  <td className='txtcolor1st'>Working Hours</td>
                  <td className='txtcolor2nd'>Metro Connectivity</td>
                </tr>
                <tr>
                  <td className='txtcolor1st'>
                    <BiStopwatch /> 9:00 To 18:00
                  </td>
                  <td className='txtcolor2nd'>
                    <MdTrain /> Noida Sector 16
                  </td>
                </tr>
              </table>
            </Container>
            <div class='button-container-div12'></div>
          </CardBody>
          <CardBody>
            <CardText className='txtcolor3b'>
              RESERVE DARTO SPACE <AiOutlineArrowRight />
              <span className='mdshare'>
                <FcShare />
              </span>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default ArenaCard;
