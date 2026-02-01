import React from "react";

const Heading = (props) => {
  return (
    <div className="mx-auto w-fit ">
      <h2 className="text-zinc-800 md:text-5xl text-[1.5rem] font-bold">
        <span className="text-orange-500">{props.highlight}</span> {props.heading}
      </h2>
      <div className="md:w-34 w-24 h-1 rounded-full bg-orange-500 md:mt-6 mt-2 ml-auto"></div>
    </div>
  );
};

export default Heading;
