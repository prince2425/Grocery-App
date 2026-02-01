import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

//............................................shop by category...........................................

// create array object
const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:"Fresh , orangic produce sourced daily from local forms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
    path:'/fruits'
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
    path:'/dairy'
  },
  {
    id: 1,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat,
    path:"seafood"
  },
];

const renderCards = category.map((card) => {
  return (
    // card
    <div className="flex-1 flex-basis-[300px]" key={card.id}>
      {/* card image */}
      <div className=" w-full min-h-[30vh]  relative -mb-10">
        <img src={card.image} alt="" className="absolute bottom-0" />
      </div>

      {/* Card Content */}
      <div className="bg-zinc-100 pt-17 md:p-8 p-2 rounded-xl">
        <h3 className="text-zinc-800 md:text-3xl text-2xl font-bold">
          {card.title}
        </h3>
        <p className="text-zinc-600 md:mt-3 mt-2 md:mb-9 mb-4">
          {card.description}
        </p>
        {/* <Button content="See All" /> */}
        <Link
          // to="/fruits"
          to={card.path}
          className="bg-linear-to-b from-orange-400 to-orange-500 text-white md:px-8 px-5 md:py-2 py-2 rounded-lg 
        md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300  cursor-pointer"
        >
          See All
        </Link>
      </div>
    </div>
  );
});

const Category = () => {
  return (
    <section>
      <div className="max-w-[95vw] mx-auto md:px-10 px-2 py-20">
        <Heading highlight="Shop" heading="by Category" />

        {/* Category card */}

        <div className="flex flex-wrap gap-10 md:mt-15 mt-10">
          {renderCards}
        </div>
      </div>
    </section>
  );
};

export default Category;
