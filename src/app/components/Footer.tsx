"use client";
import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#5556ff] text-[#f8f3ed] py-16 mt-36 md:mt- pl-[143px] lg:pl-[100px] md:pl-5 relative overflow-hidden">
      <div className=" mx-auto flex flex-col  justify-between items-start gap-12 z-10 relative">
        {/* Left Side */}
        <div className="max-w-[500px] lg:max-w-none">
          <h2 className="text-[40px] lg:text-[35px] md:text-[25px] font-semibold mb-10 leading-tight">
            Rezervo shtandin tënd
          </h2>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-[#f8f3ed] text-[#01372e] px-[55px] py-[18px] rounded-xl font-thin text-[16px] cursor-pointer"
          >
            Rezervo shtandin
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-[25px] text-[16px] font-['SupermolotThin']">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:underline  cursor-pointer"
            >
              Rreth Panarit
            </Link>
          </li>
          <li>
            <Link
              to="who"
              smooth={true}
              duration={500}
              className="hover:underline  cursor-pointer"
            >
              Kush merr pjesë?
            </Link>
          </li>
          <li>
            <Link
              to="why"
              smooth={true}
              duration={500}
              className="hover:underline  cursor-pointer"
            >
              Pse të merrni pjesë?
            </Link>
          </li>
          <li>
            <Link
              to="location"
              smooth={true}
              duration={500}
              className="hover:underline  cursor-pointer"
            >
              Lokacioni
            </Link>
          </li>
        </ul>
        <div className="flex gap-[21px]">
          <a href="https://www.instagram.com/exporealkosova/">
            <RiInstagramFill size={26} color="white" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61576219461346">
            <FaFacebook size={26} color="white" />
          </a>
          <a href="">
            <AiFillTikTok size={26} color="white" />
          </a>
        </div>
      </div>

      {/* Background Icon Overlay */}
      <div className="absolute right-20 lg:-right-80 top-0 bottom-0 z-0 block">
        <svg
          width="448"
          height="473"
          viewBox="0 0 448 473"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full aspect-square w-full"
        >
          <path
            d="M114.457 357.582L0 236.495L223.555 0L447.1 236.495L332.773 357.443L225.148 242.512L114.457 357.582ZM25.6578 236.495L114.57 330.557L225.316 215.428L332.858 330.21L421.442 236.495L223.555 27.1441L25.6578 236.495Z"
            fill="#4B4CD9"
          />
          <path
            d="M222.241 473.001L133.16 378.71L224.855 281.703L313.945 375.944L222.241 473.001ZM158.846 378.71L222.278 445.817L288.325 375.944L224.893 308.837L158.846 378.71Z"
            fill="#4B4CD9"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
