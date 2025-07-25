"use client";

import { Element } from "react-scroll";
// import ComingSoon from "./components/ComingSoon";
// import ExpoAccordion from "./components/ExpoAccordion";
import About from "./components/About";
import Expozuesit from "./components/Expozuesit";
import FairLayout from "./components/FairLayout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Kontakti from "./components/Kontakti";
// import MediaSection from "./components/MediaSection";
import ParticipantsGrid from "./components/ParticipantsGrid";
import Shtandet from "./components/Shtandet";
import SplitImageReveal from "./components/SplitImageReveal";
import WhyParticipate from "./components/WhyParticipate";

export default function Home() {
  return (
    <>
      {/* <ComingSoon /> */}
      <div className="bg-[#F4EDE2] z-[2] overflow-hidden">
        <Header />
        <Hero />
        <Element name="about">
          <About />
        </Element>
        <Element name="expozuesit">
          <Expozuesit />
        </Element>
        <Element name="who">
          <ParticipantsGrid />
        </Element>
        <Element name="why">
          <WhyParticipate />
        </Element>

        {/* <Element name="programi"><ExpoAccordion /></Element> */}
        <Element name="plan">
          <FairLayout />
        </Element>
        {/* <MediaSection /> */}
        <Shtandet />
        <SplitImageReveal />
        <div className="w-full px-[50px] bg-[#F4EDE2] flex flex-col items-center justify-center py-[50px] gap-20 md:p-5">
          <a
            href="https://maps.app.goo.gl/AsU5p9vbkyYioEyTA"
            target="_blank"
            className="rounded-[10px] bg-[#00362D] px-[55px] py-[18px] md:py-3  md:px-[65px] text-[16px]  font-normal font-['Hoves'] text-[#F4EDE2] hover:bg-[#12423a] transition-all duration-500"
          >
            Merr Udhëzimet
          </a>
          <Element name="location" className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.5713004684694!2d21.130704476390243!3d42.56447762216206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549dec301cb849%3A0xdf6994a48e64c161!2sPrishtina%20Mall!5e0!3m2!1sen!2s!4v1749856288624!5m2!1sen!2s"
              className="w-full h-[533px] rounded-[16px] md:h-[260px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Element>
        </div>
        <Element name="contact">
          <Kontakti />
        </Element>
        <Footer />
      </div>
    </>
  );
}
