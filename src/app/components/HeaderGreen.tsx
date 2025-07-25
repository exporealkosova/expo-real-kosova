"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import gsap from "gsap";
import x from "../../../public/assets/svg/x.svg";
import borgir from "../../../public/assets/svg/borgir.svg";
type LinkProps = {
  to: string;
  text: string;
  className?: string;
  onClick?: () => void;
};

const Link: React.FC<LinkProps> = ({ to, text, className, onClick }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    className={`cursor-pointer text-white text-[16px] lg:text-[14px] font-["Hoves"] md:text-[40px] font-normal hover:underline transition-all duration-300 ${
      className || ""
    }`}
    onClick={onClick}
  >
    {text}
  </ScrollLink>
);

const HeaderGreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { y: "-100%", opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          y: "-100%",
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
        });
      }
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative top-0 md:top-0 z-50 w-full bg-[#00362D] px-[110px] md:px-5 py-[35px]">
      <div className="flex justify-between items-center py-[10px] px-[66px] mx-auto lg:px-[38px] md:px-5">
        <Image
          src="/assets/logo.svg"
          alt="Header Logo"
          className="w-fit min-w-[130px] min-h-[80px] h-full md:min-w-[40px] md:w-[80px]"
          width={1000}
          height={1000}
        />

        {/* Desktop navigation */}
        <div className="md:hidden flex gap-12 md:gap-8 items-center">
          <Link to="about" text="Rreth Nesh" />
          <Link to="expozuesit" text="Ekspozuesit" />
          <Link to="programi" text="Expo Programi" />
          <Link to="plan" text="Plani i Sallës" />
          <Link to="location" text="Lokacioni" />
        </div>

        <div className="md:hidden flex">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            className={`w-fit rounded-[10px] leading-none bg-[#F4EDE2] font-["Hoves"] text-[#00362D] px-[55px] py-[18px] lg:px-5 lg:py-3 md:px-2 hover:bg-[#12423a] transition-all duration-300 text-[16px] md:text-[40px] md:rounded-[10px] md:py-[10px]  cursor-pointer`}
          >
            Ballina
          </ScrollLink>
        </div>

        {/* Mobile burger button */}
        <div className="hidden md:block">
          <Image
            alt="openMenuButton"
            height={1000}
            width={1000}
            src={borgir}
            onClick={toggleMenu}
            className="w-7 h-7 cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile navigation overlay */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 w-screen h-screen bg-[#00362D] flex flex-col items-center justify-center gap-10 text-[#F4EDE2] z-40 md:flex ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ opacity: isOpen ? 1 : 0 }}
      >
        <Link to="about" text="Rreth Nesh" onClick={closeMenu} />
        <Link to="expozuesit" text="Ekspozuesit" onClick={closeMenu} />
        {/* <Link to="programi" text="Expo Programi" onClick={closeMenu} /> */}
        <Link to="plan" text="Plani i Sallës" onClick={closeMenu} />
        <Link to="location" text="Lokacioni" onClick={closeMenu} />
        <Image
          onClick={closeMenu}
          alt="closeMenuButton"
          height={1000}
          width={1000}
          src={x}
          className="flex absolute top-4 right-4 text-[#F4EDE2] w-7 h-7 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default HeaderGreen;
export { Link };
