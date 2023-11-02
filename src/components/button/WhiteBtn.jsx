import React from "react";

const WhiteBtn = (props) => {
  return (
    <>
      <button className="py-4 px-8 bg-goldenTainoi-300 text-black text-lg rounded-[4px] shadow-lg hover:shadow-xl">
        {props.btntxt}
      </button>
    </>
  );
};

export default WhiteBtn;
