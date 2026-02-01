import React from "react";
import {IoIosArrowForward} from "react-icons/io"

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap gap-y-10 max-w-[95vw] mx-auto px-10">
        <div className="flex-1 basis-[300px]">
          <a href="#" className="md:text-3xl text-2xl font-bold">
            {/* text md se bada hoga tab 3xl nahi to 2xl */}
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>

          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content off beneficial substances. Our products are
            a
          </p>

          <p className="text-zinc-800 mt-6">2025 &copy; All Rights Reserved</p>
        </div>

        <ul className="flex-1">
          <li>
            <h5 className="font-bold text-zinc-800 text-2xl ">Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              FAQ'S
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="font-bold text-zinc-800 text-2xl ">Support</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Support Center
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>

          <p className="mt-6 text-zinc-600">
            Questions or Feedback <br />
            We'd love to hear from you.
          </p>

          <div className=" flex justify-center items-center bg-white p-1 rounded-lg mt-6">
            <input className="h-[5vh] pl-4 flex-1 focus:outline-none" type="email" name="email" autoComplete="off" placeholder="Email Address" />
            <button className="bg-linear-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-2xl text-white hover:to-orange-600 cursor-pointer">
                <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
