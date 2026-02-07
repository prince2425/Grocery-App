import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: " Food Blogger",
    rating: 3,
    para: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique ut error tempore officia culpa illo ",
    image: Customer1,
  },
  {
    id: 2,
    name: "Rohit sharma",
    profession: " chef",
    rating: 4,
    para: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique ut error tempore officia culpa illo ",
    image: Customer2,
  },
  {
    id: 3,
    name: "Harsit",
    profession: "Model ",
    rating: 3,
    para: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique ut error tempore officia culpa illo ",
    image: Customer3,
  },
  {
    id: 4,
    name: "Dheeraj",
    profession: " Fitness Coach",
    rating: 5,
    para: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique ut error tempore officia culpa illo ",
    image: Customer4,
  },
  {
    id: 5,
    name: "Titu",
    profession: " Nutritionist",
    rating: 4,
    para: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique ut error tempore officia culpa illo ",
    image: Customer5,
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[95vw] px-10 mx-auto py-20">
        <Heading highlight="Customers" heading="Saying" />

        <div className="flex justify-end py-5 gap-x-3">
          <button className="custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center   items-center bg-zinc-100 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-2xl  text-zinc-800 rounded-lg w-11 h-11  flex justify-center items-center bg-zinc-100 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}  //loop lagtaar chalta rahega
          breakpoints={{  // screen ke hisaab se slide show hoga
            640: {slidesPerView: 1, spaceBetween:20},
            768: {slidesPerView: 2, spaceBetween:20},
            1024: {slidesPerView: 3, spaceBetween:20}
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img src={item.image} className="w-full h-full"/>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-yellow-400 mt-3 text-xl gap-1">
                      {Array.from({length:item.rating},(_, index)=>(
                        <FaStar />
                      ))}
                    </span>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
