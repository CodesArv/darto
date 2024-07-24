import React from "react";

import vpm from "./vpm.jpg";
import vpm2 from "./vpm2.jpg";
import vpm3 from "./vpm3.jpg";
import vpm4 from "./vpm4.jpg";

import CommonGallery from "../../domains/HomePage/CommonGalary/CommonGalary";

const GalleryParticipate = () => {
  return (
    <>
      <h1 className='txtcolor7'>Gallery</h1>
      <div class='grid-container'>
        <div className='row'>
          <div className='col-md-auto col-lg-6'>
            <CommonGallery eventImg={vpm} />
          </div>
          <div className='col-md-auto col-lg-6'>
            <CommonGallery eventImg={vpm4} />
          </div>
          <div className='row'>
            <div className='col-md-auto col-lg-6'>
              <CommonGallery eventImg={vpm2} />
            </div>
            <div className='col-md-auto col-lg-6'>
              <CommonGallery eventImg={vpm3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GalleryParticipate;
