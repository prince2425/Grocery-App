import React,{useState, useEffect} from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import {Link} from 'react-router-dom'

const Navbar = () => {

  const[showMenu, setShowMenu] = useState(false)
  const[isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () =>{
    setShowMenu(!showMenu);
  }

  useEffect(()=>{
    const handleScroll = () =>{
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll);    //remove ke liye
  },[])





  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled?'drop-shadow-[0_4px_25px_rgba(0,0,0,.5)]':''}`}>
      <nav className="max-w-[95vw] mx-auto md:px-10 px-2 md:h-[14vh] h-[12vh] flex justify-between items-center ">
        {/* logo */}
         <Link to="/" className="md:text-3xl text-2xl font-bold"> {/* text md se bada hoga tab 3xl nahi to 2xl */}
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Desktop menu */}

        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* nav action */}

        <div className="flex gap-x-5 items-center">
          {/* input fild */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden justify-center items-center">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl ">
              <IoSearchSharp />
            </button>
          </div>
          <a href="" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>
          <a href="" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>

          {/* Hamburger */}
          <a href="#" className="text-zinc-800 text-3xl md:hidden" onClick={toggleMenu}>
             {showMenu?<TbMenu3 />:<TbMenu2 />}
          </a>
        </div>


        {/* mobile menu */}
        <ul className={`flex flex-col gap-y-11 bg-orange-500/15 backdrop-blur-xl rounded-xl p-3 items-center gap-x-15 md:hidden absolute
         top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2':""} `}>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          {/* input box */}
          <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden justify-center items-center">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-1 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl ">
              <IoSearchSharp />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
