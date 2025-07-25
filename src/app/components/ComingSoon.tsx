import Image from "next/image";
import React, { useState } from "react";

const ComingSoon = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black transition-opacity duration-500 ease-in-out ${
        hidden ? "opacity-0 pointer-events-none z-0" : "opacity-100 z-[9999999999999999999]"
      }`}
    >
      <div className="flex justify-center items-center h-full relative">
        <Image
          src="/assets/heroImg.png"
          alt="Hero Image"
          className="w-full h-full object-cover absolute top-0 left-0"
          width={1920}
          height={1080}
        />
        <div className="flex z-10 h-full w-full flex-col justify-evenly items-center">
          <Image
            src="/assets/logo.svg"
            alt="Hero Logo"
            className="w-full h-32"
            width={1920}
            height={1080}
          />
          <div className="text-center text-[80px] text-[#F4EDE2] font-['SupermolotBold'] font-bold md:text-[64px]">
            COMING SOON!
          </div>
          <div
            onClick={() => setHidden(true)}
            className="text-center text-[24px] text-[#F4EDE2] font-['SupermolotThin'] md:text-[20px] cursor-pointer transition-opacity duration-300"
          >
            Prishtina Mall | <span className="underline">25-27 Korrik</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
