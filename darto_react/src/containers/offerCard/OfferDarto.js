import React from "react";
import OfferCard from "./OfferCard";
import offer from "./offer.jpg";
const OfferDarto = () => {
  return (
    <>
      <div className='padding_left_18px_right width_60_media padding_99px_from_footer'>
        <div className='row'>
          <div className=' col-md-auto col-lg-6 padding_9px'>
            <OfferCard
              TitleOffer='Offer'
              textoffer='Comming Soon'
              offerimg={offer}
            />
          </div>
          <div className=' col-md-auto col-lg-6 padding_9px'>
            <OfferCard
              TitleOffer='Offer'
              textoffer='Comming Soon'
              offerimg={offer}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default OfferDarto;
