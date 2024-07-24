import React, { useState, useEffect } from "react";
import "./Member.css";
import MaterialIcon from "react-google-material-icons";
import darto_avatar from "../../assets/darto_avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { apiHandler } from "../../assets/api";
import { endpoint } from "../../assets/api/endpoint";
import { Link, useHistory } from "react-router-dom";
const Membership = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useSelector((state) => state.login.userData);
  const { authToken } = useSelector((state) => state.login.authData);
  const { status } = useSelector((state) => state.login.userData);
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [memberShip, setMemberShip] = useState("");
  const [imageData, setImageData] = useState("");
  useEffect(() => {
    GetByIdMemberData();
  }, []);
  const GetByIdMemberData = async () => {
    const res = await apiHandler({
      url: endpoint.GETBYID_USER + id,
      method: "GET",
      data: null,
    });
    console.log("member", res.data.response);
    setImageData(res.data.response.image ? res.data.response.image : "");
    setfirstName(
      res.data.response.firstName ? res.data.response.firstName : ""
    );
    setlastName(res.data.response.lastName ? res.data.response.lastName : "");
    setmobileNumber(
      res.data.response.mobileNumber ? res.data.response.mobileNumber : ""
    );
    setMemberShip(
      res.data.response.memberShipId ? res.data.response.memberShipId : ""
    );
  };
  return (
    <div className='padding_left_right_20px'>
      <div className='stack-membership-card width_60_media'>
        <div className='profile-avatar-membership'>
          <div className='stack-ashwa-profile '>
            <div className='size-manage'>
              <span>
                {imageData === "" ? (
                  <>
                    {" "}
                    <img
                      src={darto_avatar}
                      className='size_of_img_ninty_nine'
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <img src={imageData} className='size_of_img_ninty_nine' />
                  </>
                )}
              </span>
            </div>
            <div className='profile-avatar-or-code '></div>
          </div>
          <div className='stack-box-size-define'>
            <span className='ashvva-ghosh-def'>
              {firstname + " " + lastname}
            </span>
            <span className='text-membership-define '>
              Darto Premium Membership
            </span>
            <span className='text-valid-dj'>Valid UP TO 25 OCT</span>
          </div>
        </div>
        <div className='stack-valid-dfn-num'>
          <div className='stack-dh-df'>
            <span className='material_icon_color_define_g'>
              <MaterialIcon
                color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
                icon='badge'
                stretch={true}
                size='16px'
              />
            </span>{" "}
            <div className='membership-number-d'>
              <span>Membership Number</span>
            </div>
          </div>
          <div className='_1100-9623-7869-9999'>{memberShip}</div>
        </div>
        <div className='stack-ds-df-contact'>
          <div className='contact-details-num-member'>
            <div className='contact-details-df-dt'>
              <span>Contact Details</span>
            </div>
            <div className='stack-verify-and-num '>
              <div className='stack-detail-define'>
                <span className='material_icon_color_define_g'>
                  <MaterialIcon
                    color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                    icon='phone_enabled'
                    stretch={false}
                    size='16px'
                  />
                </span>
                <div className='_7290xxxxxx03'>
                  <span>{mobileNumber}</span>
                </div>
              </div>
              <div className='stack-verified-tag'>
                <span className='material_verified'>
                  <MaterialIcon
                    color='var(--token-95ce18c7-cfcb-4ba5-9af9-6888ca0cea28, rgb(135, 192, 2))'
                    icon='verified'
                    stretch={false}
                    size='16px'
                  />
                </span>
                <div className='verified-some-number'>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Membership;
