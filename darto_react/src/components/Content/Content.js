import React, { useState, useEffect } from "react";
//import './GeneralInfo.css';
import "./content.css";

import { endpoint } from "../../assets/api/endpoint";
import { apiHandler } from "../../assets/api";

const Content = () => {
  const [rawDatafooter, setRawDatafooter] = useState([]);
  // console.log("json", contentjson);
  useEffect(() => {
    GetFooter();
  }, []);
  const GetFooter = async () => {
    const result = await apiHandler({
      url: endpoint.GET_FOOTER_CONTENT,
      method: "GET",
      data: null,
    });
    // if (result.data.status ===404 ) {
    //  setNoticeModalHeaderMsg("Error");
    //  setNoticeModalErrMsg(result.data.message);
    //  setNoticeModal(true);
    //  } else {
    //    if(result.data.length === 0){
    //      setNoticeModalHeaderMsg("Error");
    //     setNoticeModalErrMsg("No Record Found");
    //     setNoticeModal(true);
    //   }
    //   else {
    console.log(result.data);
    setRawDatafooter(result.data);
    // }

    //  }
  };
  //const { classes, contentPath } = props;

  //   const componentDidMount =  async() => {
  //     await footerjson.get().then((res) => {
  //       const cms = res.data;
  //       setCms(cms);
  //     });
  //   }

  //   useEffect(() => {
  //     componentDidMount();
  //   }, []);

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  //   const renderContent = (content) => {
  //     if (typeof content === "string") {
  //       return <p className="">{cms.body.content}</p>;
  //     } else if (Array.isArray(content)) {
  //       return createTag(content);
  //     }
  //   };

  //   const formatContent = (content) => {
  //     if (typeof content === "string") {
  //       return content;
  //     } else if (typeof content === "object" && !Array.isArray(content)) {
  //       if (content.type === "a") {
  //         return <a href={content.link}>{content.linkText}</a>;
  //       } else if (content.type === "p") {
  //         return content.content;
  //       } else if (content.type === "inline") {
  //         const renderedContent =
  //           content.content &&
  //           content.content.map((pContent) => formatContent(pContent));
  //         return renderedContent;
  //       }
  //     }
  //   };

  //   const createTag = (content, wrapperEl) => {
  //     return content.map((item, key) => {
  //       if (item.type === "p" || item.type === "div") {
  //         const renderedContent =
  //           item.content &&
  //           item.content.map((pContent, pKey) =>
  //             item.type === "p" ? (
  //               <>
  //                 {pKey === 0 && item.heading && (
  //                   <h4>
  //                     <b>{item.heading}</b>
  //                   </h4>
  //                 )}
  //                 <p className="" key={pKey}>
  //                   {formatContent(pContent)}
  //                 </p>
  //               </>
  //             ) : (
  //               <div className="" key={pKey}>
  //                 {formatContent(pContent)}
  //               </div>
  //             )
  //           );

  //         if (wrapperEl && wrapperEl === "li")
  //           return (
  //             <li key={key}>
  //               {/* {item.heading && (
  //                 <>
  //                   <div>{item.heading}</div>
  //                   <br />
  //                 </>
  //               )} */}

  //               {renderedContent && <div className="">{renderedContent}</div>}
  //               {item.afterContent && renderContent(item.afterContent)}
  //             </li>
  //           );
  //         if (wrapperEl && wrapperEl === "td")
  //           return (
  //             <td className="" key={key}>
  //               {renderedContent}
  //             </td>
  //           );
  //         return renderedContent;
  //       } else if (item.type === "ol") {
  //         return (
  //           <ol className="" key={key}>
  //             {createTag(item.content, "li")}
  //           </ol>
  //         );
  //       } else if (item.type === "ul") {
  //         return (
  //           <ul className="" key={key}>
  //             {createTag(item.content, "li")}
  //           </ul>
  //         );
  //       } else if (item.type === "table") {
  //         return (
  //           <table className="" key={key}>
  //             <tbody>{createTag(item.content, "tr")}</tbody>
  //           </table>
  //         );
  //       } else if (item.type === "tr") {
  //         return <tr key={key}>{createTag(item.content, "td")}</tr>;
  //       } else if (item.type === "text") {
  //         return <p className="">{item.content}</p>;
  //       } else {
  //         return item;
  //       }
  //     });
  //   };
  return (
    <>
      <div className="s-t-a-k-e-genres">
        {rawDatafooter &&
          rawDatafooter.eventFooter &&
          rawDatafooter.eventFooter.map((item) => (
            <>
              <div className="general-info ">
                <h1 className="general-info gen-info-del">
                  {(item && item.name) || ""}
                </h1>
              </div>
              <div style={{ marginTop: 10 }}>
                <div>
                  {/* <h3 className="general-infosubheading ">{item.name}</h3> */}
                  <p className="about-dartosw">
                    {JSON.parse(JSON.stringify(item.content))}
                  </p>
                </div>
              </div>
            </>
          ))}
        {/* <div className="general-info">
          {cms.headingwebinfo && (
            <h1 className="general-info">{cms.headingwebinfo.content}</h1>
          )}
        </div>
        <div>
          {cms.bodywebinfo &&
            cms.bodywebinfo.contents.map((item, i) => (
              <div key={i}>
                <p className="about-darto">{item.subheading}</p>
                <MdOutlineArrowForwardIos className="about-darto" />
              </div>
            ))}
        </div> */}
      </div>
      {/* {cms.body && cms.body.content} */}
      {/* {cms.list && (
          <div className="">
            {cms.list.map((item, key) => {
              return (
                <div
                  key={key}
                  style={{ display: item.image ? "flex" : "block" }}
                >
                  {item.image && (
                    <div>
                      <h3 />
                      <img
                        src={item.image.url}
                        alt={"title"}
                        className=""
                        style={{ width: 300, height: 350, marginRight: 30 }}
                      />
                    </div>
                  )}
                  <div>
                    <h3>{item.heading.content}</h3>
                    <p>{item.body.content}</p>
                  </div>
                </div>
              );
            })}
          </div> */}
      {/* )} */}
      {/* <div className="general-info">
          <h1 className="general-info">Website Info</h1>
        </div>
        <div className="list-serach1">
          <p className="about-darto">Cookie Policy</p>
          <MdOutlineArrowForwardIos className="about-darto" />
        </div>
        <div className="list-serach1">
          <p className="about-darto">Privacy Policy</p>
          <MdOutlineArrowForwardIos className="about-darto" />
        </div>
        <div className="list-serach1">
          <p className="about-darto">Term & Conditions</p>
          <MdOutlineArrowForwardIos className="about-darto" />
        </div>
        <div className="list-serach1">
          <p className="about-darto">Side Map</p>
          <MdOutlineArrowForwardIos className="about-darto" />
        </div>
        <div className="list-serach1">
          <p className="about-darto">FAQs</p>
          <MdOutlineArrowForwardIos className="about-darto" />
        </div> */}

      {/* {window.innerWidth <= 768 && <MobileHeader />} */}
    </>
  );
};
export default Content;
