import React from "react";
import "./Style.css";

import { Link, useHistory } from "react-router-dom";

const JoinFooter = () => {
  const history = useHistory();

  const list = () => {
    history.push("/spacelist");
  };
  return (
    <>
      <div className=''>
        <div className=' width_100_per gap_with_10px'>
          <div className='parent '>
            <center>
              <br />
              <h4 className='parent-heading'> Join hand with us: </h4>

              <div className='parent-data padding_profile_top'>
                We can accomplish great things if we all join hands and work
                together. Darto also offering new business opportunities in
                field of darts game, we are open to join hands in different
                segments like: Training centers, Product Store, Sports Centers
                etc…
              </div>
            </center>
            <center>
              <br />
              <div className='child'>
                {" "}
                <h3 className='child-heading'>Open Darto Center</h3>
                <div className='parent-data class_fontweight_bold'>
                  Bare Shell | Business Center | Cafe | Club | Office Space |
                  Hotel | Resorts | Society | School Etc.
                </div>
                <div className='padding_bottom_18px'>
                  <button
                    className='with_buttom_lst_spc'
                    onClick={() => list()}
                  >
                    Open Darto Center
                  </button>
                </div>
              </div>
              <br />
            </center>
          </div>
        </div>
      </div>
    </>
  );
};
export default JoinFooter;
