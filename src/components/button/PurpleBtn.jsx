import React from "react";

const PurpleBtn = (props) => {
  return (
    <>
      <button className="py-4 px-8 bg-studio-700 text-white text-lg rounded-[4px] shadow-lg hover:shadow-xl">
        {props.btntxt}
      </button>
    </>
  );
};

export default PurpleBtn;
