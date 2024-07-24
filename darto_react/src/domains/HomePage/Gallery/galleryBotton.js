import React from "react";

import { Link, useHistory } from "react-router-dom";

const Bottom = () => {
  const history = useHistory();
  const onevent = () => {
    history.push("/gallery");
  };
  return (
    <>
      <button className='btnt' onClick={() => onevent()}>
        Event Gallery
      </button>
    </>
  );
};
export default Bottom;
