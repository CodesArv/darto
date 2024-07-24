import React from "react";
import darto_background_customer from "./darto_background_customer.jpg";
import darto1_customer_engagement from "./darto1_customer_engagement.webp";
import darto2_returning_customer from "./darto2_returning_customer.webp";
import darto3_Unique_atmosphere from "./darto3_Unique_atmosphere.webp";
import darto4_Players from "./darto4_Players.webp";

import "./Customer.css";
const Customer = () => {
  return (
    <>
      <div className='padding-top-18px-left-right'>
        <div className='padding_top_customer'>
          <div className='row customer-position-position'>
            <div className='col-md-auto col-lg-6 padding-left-right-10px'>
              <div className=' row  customer-align-center'>
                {" "}
                <img
                  src={darto1_customer_engagement}
                  className='margin-auto-with-img'
                  style={{ width: "200px" }}
                />
              </div>
              <div className='row'>
                <div className='customer-engagement'>
                  <span>Greater customer engagement</span>
                </div>
                <div className='parra-customer'>
                  It doesn’t matter whether your customers have ever thrown a
                  dart before or if they’re professional players, Darto “What
                  about just one more game?” Our research shows that guests tend
                  to hang around Darto twice as long as conventional boards and
                  that much more fun means just as many more trips to the bar,
                  inside jokes, and fond memories.
                </div>
              </div>
            </div>
            <div className='col-md-auto col-lg-6 padding-left-right-10px'>
              <div className=' row  customer-align-center'>
                {" "}
                <img
                  src={darto2_returning_customer}
                  className='margin-auto-with-img'
                  style={{ width: "200px" }}
                />
              </div>
              <div className='row'>
                <div className='customer-engagement'>
                  <span>Returning customers</span>
                </div>
                <div className='parra-customer'>
                  Darto makes up for one particular advantage of old dartboards,
                  through the incorporation of gamified feedback about players
                  and their abilities. Players can check their stats in the
                  Darto History, which helps them keep tabs on their progress
                  and improve. And now getting better at darts has never been
                  easier—with simple, forgiving games for beginners and more
                  challenging, competitive games for players looking to test
                  their mettle.
                </div>
              </div>
            </div>
          </div>
          <div className='row customer-position-position'>
            <div className='col-md-auto col-lg-6 padding-left-right-10px'>
              <div className=' row  customer-align-center'>
                {" "}
                <img
                  src={darto3_Unique_atmosphere}
                  className='margin-auto-with-img'
                  style={{ width: "200px" }}
                />
              </div>
              <div className='row'>
                <div className='customer-engagement'>
                  <span>Unique atmosphere</span>
                </div>
                <div className='parra-customer'>
                  Darto’s look and feel are fully customizable; they can be
                  tailored to fit any environment, whether sleek and
                  sophisticated, rambunctious, or neighborly and quaint.
                  Similarly, Darto’s responses to guests' throws can also be
                  customized, creating a unique yet familiar experience that
                  will resonate with your guests and have them coming back over
                  and over.
                </div>
              </div>
            </div>
            <div className='col-md-auto col-lg-6 padding-left-right-10px'>
              <div className=' row  customer-align-center'>
                {" "}
                <img
                  src={darto4_Players}
                  className='margin-auto-with-img'
                  style={{ width: "200px" }}
                />
              </div>
              <div className='row'>
                <div className='customer-engagement'>
                  <span>Players of every level can enjoy it</span>
                </div>
                <div className='parra-customer'>
                  Darto makes learning this classic game a fun, simple,
                  low-stakes experience. Accordingly, we have designed games
                  specifically with both beginners and pros in mind: try for
                  casual fun, then step up to 501 once you’re ready to show off
                  your hard-earned skills.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Customer;
