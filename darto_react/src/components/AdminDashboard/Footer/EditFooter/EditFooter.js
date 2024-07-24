import React, { useState, useEffect } from "react";
import CustomInputs from "../../CustomInput/CustomInputs";
import { apiHandler } from "../../../../assets/api";
import { endpoint } from "../../../../assets/api/endpoint";
const EditFooter = ({ updateRecord, record, editable, onHide }) => {
  const [category, setCategory] = useState((record && record.category) || "");
  const [name, setName] = useState((record && record.name) || "");
  const [url, setUrl] = useState((record && record.url) || "");
  const [content, setContent] = useState((record && record.content) || "");
  const [rawData, setRawData] = useState({});
  const onEdit = async () => {
    updateRecord({
      id: record.id,
      category: category,
      name: name,
      url: url,
      content: content,
    });
    // console.log("updateRecord", updateRecord);
    onHide();
  };

  return (
    <>
      <select
        placeholder='Enter'
        className='teamclass teamclass1'
        style={{ padding: "none" }}
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value='Category'>Category</option>
        <option value='General Info'>General Info</option>
        <option value='Website Info'>Website Info</option>
        {/* <option value="40 Member">40 member</option>
            <option value="50 Member">50 member</option> */}
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
          onClick={onEdit}
          style={{
            backgroundColor:
              "background-color: var(--token-0c8f20d5-9442-43c5-8769-af4fe5a08096, #0d132b);",
          }}
          className='style-team-buttons2 button2'
        >
          Edit
        </button>
      </div>
    </>
  );
};
export default EditFooter;
