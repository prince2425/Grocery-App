import React from "react";
import Grocery from "../../assets/Grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className=" min-h-screen max-w-[95vw] mx-auto md:px-10 px-2 flex item-center md:flex-row flex-col md:pt-25 pt-35 ">
        {/* Hero Content */}

        <div className="flex-1 ">
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="md:text-7xl/20 text-3xl/9 font-bold mt-4">
            Tasty Oranic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span> In Your City
          </h1>
          <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10">
            Bred for a hight content of beneficial substance. Our products are all fresh and healdhy.
          </p>
          <Button content='shop Now'/>
        </div>
        
        {/* Hero Image */}

        <div className="flex-1">
          <img src={Grocery} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
