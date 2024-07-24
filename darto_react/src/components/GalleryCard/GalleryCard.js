import React  from "react";
import image from '../../assets/images/image.jpg';
import { BsFillShareFill} from 'react-icons/bs';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
const GalleryCard = ({title ,body ,stadium}) => {
    return(
        


<div className="cardcompo">
    <Card style={{flex:1, backgroundColor:'rgb(16, 20, 44)' ,width:'100%'}}>
       <CardImg style={{ height:'60%',padding:'1%' }} src={image} alt="Card image cap"  /> 
    
      <CardBody >
         <div className="zxcv">
        <CardSubtitle  tag="h6" className="mb-2  txtcolor1">{title}</CardSubtitle>
        <BsFillShareFill className="shareicon" />
        </div>
        <CardText className="stadiumname">{stadium}</CardText>
        <CardText className="tournamentdetails">{body}</CardText>
        
      </CardBody>
    </Card>
    
  </div>
  
 );
}
export default GalleryCard;