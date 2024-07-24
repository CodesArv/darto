import React, { useEffect, useState, useCallback, useRef } from "react";
import "./AddClubData.css";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
import { useHistory } from "react-router";
import CustomInputs from "../../CustomInput/CustomInputs";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import styled from "styled-components";
import Uploady, {
  withRequestPreSendUpdate,
  useItemFinalizeListener,
  useItemStartListener,
} from "@rpldy/uploady";
import { getMockSenderEnhancer } from "@rpldy/mock-sender";
import MaterialIcon from "react-google-material-icons";
import { Modal, Button } from "react-bootstrap";
import UploadButton from "@rpldy/upload-button";
import UploadPreview, { PREVIEW_TYPES } from "@rpldy/upload-preview";
import cropImage from "./ImageCrop";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import UploadImageCrop from "../../TournamentAdmin/AddAdminData/UploadImageCrop";
import tshirt_back from "./tshirt_back.png";
import tshirt_front from "./tshirt_front.png";
import dp_club from "./dp_club.png";
//import Croppers from "../../TournamentAdmin/AddAdminData/Croppers";
import Croppers from "../../../../domains/HomePage/CreateTeamClub/CreateTeamButton/Croppers";

const mockSenderEnhancer = getMockSenderEnhancer({ delay: 1500 });

const StyledReactCrop = styled(ReactCrop)`
  width: 100%;
  max-width: 900px;
  max-height: 400px;
`;

const PreviewImage = styled.img`
  margin: 5px;
  max-width: 200px;
  height: auto;
  max-height: 200px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const PreviewButtons = ({
  finished,
  crop,
  updateRequest,
  onUploadCancel,
  onUploadCrop,
}) => {
  return (
    <ButtonsWrapper>
      <div className='row'>
        <div className='col-4'>
          <button
            className='image_modal2'
            style={{
              display: !finished && updateRequest && crop ? "block" : "none",
            }}
            onClick={onUploadCrop}
          >
            Upload Cropped
          </button>
        </div>
        <div className='col-4'>
          <button
            className='image_modal2'
            style={{ display: !finished && updateRequest ? "block" : "none" }}
            onClick={updateRequest}
          >
            Upload without Crop
          </button>
        </div>
        <div className='col-4'>
          <button
            className='image_modal2'
            style={{
              display: !finished && updateRequest && crop ? "block" : "none",
            }}
            onClick={onUploadCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </ButtonsWrapper>
  );
};

const UPLOAD_STATES = {
  NONE: 0,
  UPLOADING: 1,
  FINISHED: 2,
};

const ItemPreviewWithCrop = withRequestPreSendUpdate((props) => {
  const {
    id,
    url,
    isFallback,
    type,
    updateRequest,
    requestData,
    previewMethods,
  } = props;
  const cropRef = useRef(null);
  const [uploadState, setUploadState] = useState(UPLOAD_STATES.NONE);
  const [crop, setCrop] = useState(null);
  const [croppedImg, setCroppedImg] = useState(null);
  const isFinished = uploadState === UPLOAD_STATES.FINISHED;

  useItemStartListener(() => setUploadState(UPLOAD_STATES.UPLOADING), id);
  useItemFinalizeListener(() => setUploadState(UPLOAD_STATES.FINISHED), id);

  const onImageLoaded = useCallback((image) => {
    cropRef.current = image;
  }, []);

  const onUploadCrop = useCallback(async () => {
    if (updateRequest && (crop?.height || crop?.width)) {
      const [croppedBlob, croppedUri] = await cropImage(
        cropRef.current,
        requestData.items[0].file,
        crop
      );

      requestData.items[0].file = croppedBlob;

      updateRequest({ items: requestData.items });
      setCroppedImg(croppedUri);
    }
  }, [requestData, updateRequest, crop]);

  const onUploadCancel = useCallback(() => {
    updateRequest(false);
    if (previewMethods.current?.clear) {
      previewMethods.current.clear();
    }
  }, [updateRequest, previewMethods]);

  return isFallback || type !== PREVIEW_TYPES.IMAGE ? (
    <PreviewImage src={url} alt='fallback img' />
  ) : (
    <>
      {requestData && uploadState === UPLOAD_STATES.NONE ? (
        <StyledReactCrop
          ruleOfThirds
          src={url}
          crop={crop}
          onImageLoaded={onImageLoaded}
          onChange={setCrop}
          onComplete={setCrop}
        />
      ) : (
        <PreviewImage src={croppedImg || url} alt='img to upload' />
      )}
      <PreviewButtons
        finished={isFinished}
        crop={crop}
        updateRequest={updateRequest}
        onUploadCancel={onUploadCancel}
        onUploadCrop={onUploadCrop}
      />
      <p>{isFinished ? "FINISHED" : ""}</p>
    </>
  );
});
const CategoryList = [
  "Sr Senior",
  "Professional",
  " Jr junior",
  "Sub Junior",
  "Master",
];

const AddClubData = ({ onHide }) => {
  let history = useHistory();
  const [age, setAge] = useState("");
  // const [ageUnderEighteen, setAgeUnderEighteen] = useState("Under 18 Up to 8 year");
  // const [ageUnderEight, setAgeUnderEight] = useState("Under 8 years");
  const [nameofclub, setNameofclub] = useState("");
  const [clubMembers, setClubMembers] = useState("");
  const [tagsName, setTagsName] = useState("");
  const [locality, setLocality] = useState("");
  const [state, setSelectedState] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");
  const [districtListData, setDistrictListData] = useState("");
  const [stateListData, setStateListData] = useState("");
  const [pincode, setPincode] = useState("");
  const [about, setAbout] = useState("");
  const [youtubeField, setYoutubeField] = useState("");
  const [instragramField, setInstragramField] = useState("");
  const [category, setcategory] = useState("");
  const [twitterField, settwitterField] = useState("");
  const [facebookField, setfacebookField] = useState("");
  const [address, setAddress] = useState("");
  const previewMethodsRef = useRef();
  const [rawData, setRawData] = useState({});
  const [countryListData, setCountryListData] = useState("");
  const [countryData, setCountryData] = useState("");
  const [imagedata, setImageData] = useState("");
  const [imagedata1, setImageData1] = useState("");
  const [imagedata2, setImageData2] = useState("");
  const [imagedata3, setImageData3] = useState("");
  const [imagedata4, setImageData4] = useState("");
  const [imagedata5, setImageData5] = useState("");
  const [imagedata6, setImageData6] = useState("");
  const [imagedata7, setImageData7] = useState("");
  const [imagedata8, setImageData8] = useState("");
  const [imagedata9, setImageData9] = useState("");
  const [imagedata10, setImageData10] = useState("");
  const [imagedata11, setImageData11] = useState("");
  const [imagedata12, setImageData12] = useState("");
  const [imagedata13, setImageData13] = useState("");
  const [imageValue, setImageValue] = useState("");
  // const onAddAge = async () => {
  //   const res = await apiHandler({
  //     url: endpoint.CREATE_USER_AGE,
  //     method: "POST",
  //     data: {
  //       age: age,
  //     },
  //   });
  //   console.log("Resput - ", res.data);
  //   onHide();
  //   //  closeModal();
  //   // history.push("/clubadmin")
  // };
  useEffect(() => {
    GetCountryList();
  }, []);
  const GetCountryList = async () => {
    const res = await apiHandler({
      url: endpoint.GET_COUNTRY,
      method: "GET",
      data: null,
    });
    // console.log(res.data);
    let countryList = res.data.Countrys.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    let currentIndex = -1;
    const countries = countryList.find((c, i) => {
      if (c.name === "India") {
        currentIndex = i;
        return true;
      }
    });
    if (countries && currentIndex !== -1) {
      countryList.splice(currentIndex, 1);
      countryList.unshift(countries);
      onSearchCounty("India");
    }

    setCountryData(countryList);
    //setFilteredTournamnetData(result.data);
  };
  const GetDistrictListData = async (query, type) => {
    const res = await apiHandler({
      url: endpoint.GET_DISTRICT + query,
      method: "GET",
      data: null,
    });
    // console.log(res.data);
    switch (type) {
      case "C":
        let data = res.data.sort((a, b) => (a.state > b.state ? 1 : -1));
        setStateListData(data);
        break;
      case "S":
      default:
        let dataD = res.data.sort((a, b) => (a.district > b.district ? 1 : -1));
        setDistrictListData(dataD);
        break;
    }
    //setFilteredTournamnetData(result.data);
  };
  const handleStateSelect = (event) => {
    setSelectedState(event.target.value);
    onSearchState(event.target.value);
  };
  const onSearchState = (state) => {
    const query = "?state=" + state;
    GetDistrictListData(query, "S");
    // setSearchBy("");
  };

  const handleCountrySelect = (event) => {
    setCountry(event.target.value);
    onSearchCounty(event.target.value);
  };
  const onSearchCounty = (country) => {
    const query = "?country=" + country;
    GetDistrictListData(query, "C");
    // setSearchBy("");
  };

  const onAdd = async () => {
    // const res = await apiHandler({
    //   url: endpoint.CREATE_USER_AGE,
    //   method: "POST",
    //   data: {
    //     age: age,
    //   },
    // });
    // console.log("agelimit", res.data);

    const result = await apiHandler({
      url: endpoint.CREATE_CLUB,
      method: "POST",
      data: {
        image: imagedata,
        image2: imagedata1 ? imagedata1 : null,
        image3: imagedata2 ? imagedata2 : null,
        image4: imagedata3 ? imagedata3 : null,
        image5: imagedata4 ? imagedata4 : null,
        image6: imagedata5 ? imagedata5 : null,
        image7: imagedata6 ? imagedata6 : null,
        image8: imagedata7 ? imagedata7 : null,
        image9: imagedata8 ? imagedata8 : null,
        image10: imagedata9 ? imagedata9 : null,
        image11: imagedata10 ? imagedata10 : null,
        image12: imagedata11 ? imagedata11 : null,
        image13: imagedata12 ? imagedata12 : null,
        image14: imagedata13 ? imagedata13 : null,
        nameofclub: nameofclub,
        clubMembers: clubMembers,
        tagsName: tagsName,
        age: age,
        category: category,
        about: about,
        facebookField: facebookField,
        twitterField: twitterField,
        instragramField: instragramField,
        youtubeField: youtubeField,

        // tagsName : tagsName,

        locality: locality,
        state: state,
        district: district,
        street: street,
        pincode: pincode,

        address: address,
        occupation: occupation,
      },
    });
    // console.log("Resultput - ", result.data);
    onHide();
  };
  const onUpload = (value) => {
    setImageValue(value);
    setShow(true);
  };
  const onUploadimge = (val) => {
    // console.log("fhf", val);
    switch (imageValue) {
      case "image":
        return setImageData(val);
      case "image1":
        return setImageData1(val);
      case "image2":
        return setImageData2(val);
      case "image3":
        return setImageData3(val);
      case "image4":
        return setImageData4(val);
      case "image5":
        return setImageData5(val);
      case "image6":
        return setImageData6(val);
      case "image7":
        return setImageData7(val);
      case "image8":
        return setImageData8(val);
      case "image9":
        return setImageData9(val);
      case "image10":
        return setImageData10(val);
      case "image11":
        return setImageData11(val);
      case "image12":
        return setImageData12(val);
      case "image13":
        return setImageData13(val);
    }
  };
  const onRemove = () => {
    setImageData11("");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const ageGroup =() =>{

  //  };
  return (
    <>
      <div
        style={{ backgroundColor: "#10142c" }}
        className='gap_12px padding_top_18px'
      >
        <div className='stackupdate'>
          <div className='border_Bottom_1px'>
            <span className='Darts-style1'>Add Photo</span>
            <div className='row gap_16px_Devide padding_profile_bottom'>
              <div
                className='border_profile_Add_item col'
                onClick={() => onUpload("image1")}
              >
                {imagedata1 === "" ? (
                  <>
                    {" "}
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='add'
                      stretch={true}
                    />
                  </>
                ) : (
                  <>
                    <img src={imagedata1} width={50} height={50} />
                  </>
                )}
              </div>
              <div
                className='border_profile_Add_item col'
                onClick={() => onUpload("image2")}
              >
                {imagedata2 === "" ? (
                  <>
                    {" "}
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='add'
                      stretch={true}
                    />
                  </>
                ) : (
                  <>
                    <img src={imagedata2} width={150} height={150} />
                  </>
                )}
              </div>
              <div
                className='border_profile_Add_item col'
                onClick={() => onUpload("image3")}
              >
                {imagedata3 === "" ? (
                  <>
                    {" "}
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='add'
                      stretch={true}
                    />
                  </>
                ) : (
                  <>
                    <img src={imagedata3} width={150} height={150} />
                  </>
                )}
              </div>
              <div
                className='border_profile_Add_item col'
                onClick={() => onUpload("image4")}
              >
                {imagedata4 === "" ? (
                  <>
                    {" "}
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='add'
                      stretch={true}
                    />
                  </>
                ) : (
                  <>
                    <img src={imagedata4} width={150} height={150} />
                  </>
                )}
              </div>
              <div
                className='border_profile_Add_item col'
                onClick={() => onUpload("image5")}
              >
                {imagedata5 === "" ? (
                  <>
                    {" "}
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='add'
                      stretch={true}
                    />
                  </>
                ) : (
                  <>
                    <img src={imagedata5} width={150} height={150} />
                  </>
                )}
              </div>
            </div>
            <span className='Darts-style1'>For Premium Member</span>
            <div className='row gap_16px_Devide'>
              <div
                className='border_profile_Add_item col'
                onClick={() => onUpload("image6")}
              >
                {imagedata6 === "" ? (
                  <>
                    {" "}
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='add'
                      stretch={true}
                    />
                  </>
                ) : (
                  <>
                    <img src={imagedata6} width={150} height={150} />
                  </>
                )}
              </div>
              <div
                className='border_profile_Add_item col'
                onClick={() => onUpload("image7")}
              >
                {imagedata7 === "" ? (
                  <>
                    {" "}
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='add'
                      stretch={true}
                    />
                  </>
                ) : (
                  <>
                    <img src={imagedata7} width={150} height={150} />
                  </>
                )}
              </div>
              <div
                className='border_profile_Add_item col'
                onClick={() => onUpload("image8")}
              >
                {imagedata8 === "" ? (
                  <>
                    {" "}
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='add'
                      stretch={true}
                    />
                  </>
                ) : (
                  <>
                    <img src={imagedata8} width={150} height={150} />
                  </>
                )}
              </div>
              <div
                className='border_profile_Add_item col'
                onClick={() => onUpload("image9")}
              >
                {imagedata9 === "" ? (
                  <>
                    {" "}
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='add'
                      stretch={true}
                    />
                  </>
                ) : (
                  <>
                    <img src={imagedata9} width={150} height={150} />
                  </>
                )}
              </div>
              <div
                className='border_profile_Add_item col'
                onClick={() => onUpload("image10")}
              >
                {imagedata10 === "" ? (
                  <>
                    {" "}
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='add'
                      stretch={true}
                    />
                  </>
                ) : (
                  <>
                    <img src={imagedata10} width={150} height={150} />
                  </>
                )}
              </div>
            </div>
          </div>
          {/* <div className="stackupdate1">
          <div className="stackupdate2">
            <h1 className="stackupdate3">Team</h1>

          
          </div>

          <div className="stackupdate4">
            <h1 className="members-list">Members List</h1>
          </div>
          <div className="editstack">
            <button className="editstack2" onClick={() => editProfile()}>
              Edit
            </button>
          </div>
        </div> */}

          <div className='stake-top-channel-i-d5'>
            <div className='stack-profile'>
              <div className=' my-profile1'>
                <div className='my-profile2'>
                  <div className='my-profile-img'>
                    {imagedata11 === "" ? (
                      <>
                        <img src={dp_club} style={{ width: "75px" }} />
                      </>
                    ) : (
                      <>
                        <img src={imagedata11} style={{ width: "75px" }} />
                      </>
                    )}
                  </div>
                  {/* <div className="be_button_de  _d_color_de"> */}
                  <span
                    className='be_button_de curser-pointer'
                    onClick={() => onRemove()}
                  >
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                      icon='delete'
                      // Using default values:
                      stretch={false}
                    />{" "}
                    Remove
                    {/* <button className="button-fixed1 button-fixed">Remove</button> */}
                  </span>
                  {/* </div> */}
                  <span
                    className='be_button_de curser-pointer'
                    onClick={() => onUpload("image11")}
                  >
                    <MaterialIcon
                      color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161))'
                      icon='cloud_upload'
                      // Using default values:
                      stretch={false}
                    />{" "}
                    Upload
                    {/* <button className="button-fixed1 button-fixed">Upload</button> */}
                  </span>
                </div>
              </div>
              <div className='stake-verified'>
                {/* <div className='verified2'>
                <div className='verified'>
                  <span>
                    <MaterialIcon
                      color='var(--token-a23514c0-d291-45a7-a6d4-86d49c549881, rgb(0, 187, 255)) '
                      icon='verified'
                   
                      stretch={false}
                    />{" "}
                  </span>
                  Verified
                </div>
              </div>
              <div className='verified2'>
                <div className='verified'>
                  {" "}
                  <span>
                    <MaterialIcon
                      color='var(--token-2a633678-f86b-4ab5-94be-ee4f65254cde, rgb(120, 144, 161)) '
                      icon='verified_user'
                      stretch={true}
                    />{" "}
                  </span>
                  Trusted
                </div>
              </div> */}

                {/* <div className='stake-share'>
             
                <span className='stake-favorite'>
                  <MaterialIcon
                    color='var(--token-d983c132-e015-4177-baf8-441dbe84f948, rgb(0, 187, 255)) '
                    icon='share'
                    stretch={true}
                  />
                </span>
                <p className='_50k-share'>50k share</p>
              </div> */}
              </div>
            </div>

            {/* <div className="tshirt-dsign">
        
       
         </div> */}
            <p className='Darts-style1_define'>Club T-shirt</p>
            <div class='flex-container'>
              <div
                class='flex-child magenta'
                onClick={() => onUpload("image12")}
              >
                {imagedata12 === "" ? (
                  <>
                    <img className='img5' src={tshirt_front} />
                    <div className=''>
                      <span className='color_Define_Always_Depend'>
                        <MaterialIcon
                          color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                          icon='delete'
                          stretch={true}
                          size='16px'
                        />
                      </span>
                      <span className='Darts-style9'> Front</span>
                    </div>
                  </>
                ) : (
                  <>
                    <img src={imagedata12} className='img5' />
                    <div className=''>
                      {/* <span className="color_Define_Always_Depend">
                                              <MaterialIcon
                                                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                                  icon="delete"
                                                  stretch={true}
                                                  size="16px"
                                              />
                                          </span> */}
                      <span className='Darts-style9'> Front</span>
                    </div>
                  </>
                )}
              </div>

              <div class='flex-child green' onClick={() => onUpload("image13")}>
                {imagedata13 === "" ? (
                  <>
                    <img className='img5' src={tshirt_back} />
                    <div className=''>
                      <span className='color_Define_Always_Depend'>
                        <MaterialIcon
                          color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                          icon='delete'
                          stretch={true}
                          size='16px'
                        />
                      </span>
                      <span className='Darts-style9'> back</span>
                    </div>
                  </>
                ) : (
                  <>
                    <img src={imagedata13} className='img5' />
                    <div className=''>
                      {/* <span className="color_Define_Always_Depend">
                                              <MaterialIcon
                                                  color="var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) "
                                                  icon="delete"
                                                  stretch={true}
                                                  size="16px"
                                              />
                                          </span> */}
                      <span className='Darts-style9'> back</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='stack-onclick gap_12px'>
          <div>
            <h1 className='age-group1'>Categories by Age Group</h1>
          </div>

          <div className='stack-age-group'>
            <div className='floating-left'>
              <span
                className='style-team-buttons2'
                onClick={() => setAge("I am 18+ Year")}
                value={age}
                id={"I am 18+ Year"}
              >
                I am 18+ Year
              </span>
            </div>
            <p className='parra-p1'> (Sr./Senior/Professional)</p>
          </div>
          <div className='stack-age-group'>
            <div className='floating-left'>
              <span
                className='style-team-buttons2'
                onClick={() => setAge("Under 18 Up to 8 year")}
                value={age}
                id={"Under 18 Up to 8 year"}
              >
                Under 18 Up to 8 year
              </span>
            </div>
            <p className='parra-p1'>(Jr./Junior)</p>
          </div>
          <div className='stack-age-group'>
            <div className='floating-left'>
              <span
                className='style-team-buttons2'
                onClick={() => setAge("Under 8 years")}
                value={age}
                id={"Under 8 years"}
              >
                Under 8 years
              </span>
            </div>
            <p className='parra-p1'>(Sub Junior)</p>
          </div>
        </div>
        {/*Club Name Club Details */}
        <div className=' teamclass gap_12px'>
          <CustomInputs
            type='text'
            placeholder='Club Name'
            onChange={(e) => setNameofclub(e.target.value)}
            value={nameofclub}
          />

          <select
            placeholder=''
            className='teamclass teamclass1'
            value={clubMembers}
            onChange={(e) => setClubMembers(e.target.value)}
          >
            <option value='Club Member Limit'>Club Member Limit</option>
            <option value='50 member'>50 member</option>
            <option value='100 member'>100 member</option>
            <option value='200 member'>200 member</option>
          </select>

          {/* <h1 className="tag-team"># Club Name Display</h1> */}
          <CustomInputs
            label='# Club Name Display'
            type='text'
            placeholder='Tag Name'
            CustomInputs
            onChange={(e) => setTagsName(e.target.value)}
            value={tagsName}
          />
          <div className='about-club-dt-define'>
            <div className='about-club-dt-define-name'>
              <span>About Club</span>
            </div>
            <textarea
              className='text-area-dfin'
              onChange={(e) => setAbout(e.target.value)}
              value={about}
              // pattern="secondary"
              placeholder='Discribe 150 Charcters'
              // Using default values:
              // disabled={false}
              intent='primary'
              resizable='none'
              resize='none'
              theme='light'
              type='text'
            />
          </div>
        </div>

        {/* <div className="padding-style12 gap_12px "> */}
        <div className=' color_With_Padding_18px gap_12px'>
          <div className='margin-form'>
            {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
            <select
              className='teamclass teamclass1'
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            >
              <option value='Occupition'>Occupition</option>
              <option value='Student'>Student</option>
              <option value='Professional'>Professional</option>
              <option value='Carporate'>Carporate</option>
            </select>
          </div>
          <div className='row text_Align_Crnter_Item'>
            <div className='col-10 '>
              <CustomInputs
                type='text'
                placeholder='Name of the Occupition Institution'
                CustomInputs
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>
            <div className='col-2 padding_left_18px color_789_define'>
              <span className='color_789_define'>
                <MaterialIcon
                  color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                  icon='view_list'
                  // Using default values:
                  stretch={false}
                />
              </span>
              <span className='padding_left_18px color_789_define'>
                <MaterialIcon
                  color='var(--token-a38dd3d3-b9de-4302-b504-277e6b4a701f, rgb(120, 144, 161)) '
                  icon='control_point '
                  // Using default values:
                  stretch={false}
                />
              </span>
            </div>
          </div>
        </div>

        <div className='row gap_12px' style={{ width: "100%" }}>
          <CustomInputs
            type='text'
            placeholder='Address'
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          />
          <div className='margin-form'>
            {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
            <select
              className='teamclass teamclass1'
              value={country}
              onChange={(e) => handleCountrySelect(e)}
            >
              {countryData &&
                countryData.map((cou) => (
                  <option value={cou.name}>{cou.name}</option>
                ))}
            </select>
          </div>
          {country === "India" ? (
            <div className='margin-form'>
              {/* <input  className="form-input-style margin-form" type="text" placeholder="Enter" /> */}
              <select
                className='teamclass teamclass1'
                value={state}
                onChange={(e) => handleStateSelect(e)}
              >
                {stateListData &&
                  stateListData.map((item) => (
                    <option value={item.state}>{item.state}</option>
                  ))}
              </select>
            </div>
          ) : (
            <div className='margin-form'>
              <CustomInputs
                className='teamclass teamclass1'
                type='text'
                placeholder='State'
                value={state}
                onChange={(e) => handleStateSelect(e)}
              />
            </div>
          )}
          {country === "India" ? (
            <div className='margin-form'>
              <select
                title='dis'
                className='teamclass teamclass1'
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                {districtListData &&
                  districtListData.map((item) => (
                    <option value={item.district}>{item.district}</option>
                  ))}
              </select>
            </div>
          ) : (
            <div className='margin-form'>
              <CustomInputs
                className='teamclass teamclass1'
                type='text'
                placeholder='District'
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
          )}
          <div className='margin-form'>
            <CustomInputs
              className='teamclass teamclass1'
              type='text'
              placeholder='City / Area / Town / Village'
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <CustomInputs
            type='number'
            placeholder='Pincode *'
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <div className='about-club-dt-define'>
            <textarea
              className='text-area-dfin'
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              // pattern="secondary"
              placeholder='Address (Optional)'
              // Using default values:
              // disabled={false}
              intent='primary'
              resizable='none'
              resize='none'
              theme='light'
              type='text'
            />
          </div>
          <div className='header-df-all'>
            <span>Social Connect</span>
          </div>
          <div className='divbtnconnect'>
            <br />
            <input
              className='btnconnect'
              placeholder=' Facebook link'
              onChange={(e) => setfacebookField(e.target.value)}
              value={facebookField}
              // Using default values:
              focusColor='#09F'
              backgroundColor='var(--token-e2079bf0-f281-429e-90ac-e5958a3c1a75, rgb(35, 53, 77)) '
              keyboard=''
              lineHeight={1.4}
              maxLength={50}
              type='text'
              textAlign='left'
              textColor='#333'
            />{" "}
            <p>
              {" "}
              <BsFacebook className='connecticons' />
            </p>{" "}
          </div>
          <div className='divbtnconnect'>
            <input
              className='btnconnect'
              placeholder=' Twitter link'
              onChange={(e) => settwitterField(e.target.value)}
              value={twitterField}
              // Using default values:
              focusColor='#09F'
              keyboard=''
              lineHeight={1.4}
              maxLength={50}
              type='text'
              textAlign='left'
              textColor='#333'
              // value=""
            />{" "}
            <p>
              <BsTwitter className='connecticons' />
            </p>{" "}
          </div>{" "}
          <div className='divbtnconnect'>
            <input
              className='btnconnect'
              placeholder=' Instagram link'
              onChange={(e) => setInstragramField(e.target.value)}
              value={instragramField}
              // Using default values:
              focusColor='#09F'
              keyboard=''
              lineHeight={1.4}
              maxLength={50}
              type='text'
              textAlign='left'
              textColor='#333'
              // value=""
            />{" "}
            <p>
              {" "}
              <AiFillInstagram className='connecticons' />
            </p>{" "}
          </div>{" "}
          <div className='divbtnconnect'>
            <input
              className='btnconnect'
              onChange={(e) => setYoutubeField(e.target.value)}
              value={youtubeField}
              placeholder=' Youtube'
              // Using default values:
              focusColor='#09F'
              keyboard=''
              lineHeight={1.4}
              maxLength={50}
              type='text'
              textAlign='left'
              textColor='#333'
              // value=""
            />{" "}
            <p>
              {" "}
              <BsYoutube className='connecticons' />
            </p>{" "}
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              variant='secondary'
              onClick={() => onUpload("image")}
              className='image_modal1'
            >
              Upload Image
            </Button>
            {/* {imagedata !== "" && (
                      <img src={imagedata} width={200} hight={200} />
                  )}
                  <Croppers
                      image={setImageData}
                      type="team"
                      mincropHeight={400}
                      mincropWidth={400}
                      responsive={false}
                  /> */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className='image_modal1'>
                <Modal.Title className='image_modal1'>Upload Image</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Croppers
                  setimage={onUploadimge}
                  type='club'
                  handleClose={handleClose}
                />
              </Modal.Body>
              {/* <Modal.Footer>
              <Button
                variant='secondary'
                onClick={handleClose}
                className='image_modal1'
              >
                Close
              </Button>
              <Button
                variant='primary'
                onClick={handleClose}
                className='image_modal1'
              >
                Save Changes
              </Button>
            </Modal.Footer> */}
            </Modal>
            {/* <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton className="image_modal1">
                          <Modal.Title className="image_modal1">
                              Upload Image
                          </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                          <UploadImageCrop image={setImageData} type="team" />
                      </Modal.Body>
                      <Modal.Footer>
                          <Button
                              variant="secondary"
                              onClick={handleClose}
                              className="image_modal1"
                          >
                              Close
                          </Button>
                          <Button
                              variant="primary"
                              onClick={handleClose}
                              className="image_modal1"
                          >
                              Save Changes
                          </Button>
                      </Modal.Footer>
                  </Modal> */}
          </div>
          <div>
            <div className='floating-left flot-flot'>
              <button
                className='style-team-buttons2 button2'
                onClick={() => onAdd()}
              >
                Add Club
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default AddClubData;
