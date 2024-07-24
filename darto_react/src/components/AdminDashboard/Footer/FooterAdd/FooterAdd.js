import React, { useState, useEffect } from "react";
import CustomInputs from "../../CustomInput/CustomInputs";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
const FooterAdd = ({ onHide }) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");

  const onAdd = async () => {
    const result = await apiHandler({
      url: endpoint.CREATE_FOOTER,
      method: "POST",
      data: {
        //ageGroup:ageGroup,
        //noticeModal

        category: category,
        name: name,
        url: url,
        content: content,
      },
    });
    // console.log("Resultput - ", result.data);
    onHide();
  };
  return (
    <>
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        placeholder='Enter'
        className='teamclass teamclass1'
        style={{ padding: "none" }}
        // value={totalMembers}
        // onChange={(e) => setTotalMembers(e.target.value)}
      >
        <option value='Category'>Category</option>
        <option value='General Info'>General Info</option>
        <option value='Website Info'>Website Info</option>
      </select>
      <CustomInputs
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <CustomInputs
        placeholder='Url'
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />
      <CustomInputs
        placeholder='Content'
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div
        className='floating-left flot-flot'
        style={{
          backgroundColor:
            "background-color: var(--token-0c8f20d5-9442-43c5-8769-af4fe5a08096, #0d132b);",
        }}
      >
        <button
          onClick={() => onAdd()}
          style={{
            backgroundColor:
              "background-color: var(--token-0c8f20d5-9442-43c5-8769-af4fe5a08096, #0d132b);",
          }}
          className='style-team-buttons2 button2'
        >
          Add
        </button>
      </div>
    </>
  );
};
export default FooterAdd;
