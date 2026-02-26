import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const participants = [
  {
    title: "BANKA DHE INSTITUCIONE FINANCIARE QË OFROJNË KREDI BANESASH",
    image:
      "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4UyhQMFK2aPtguMTXFN0Cfq39LYRVKDdji46A",
  },
  {
    title: "STUDIO ARKITEKTURORE DHE DIZAJNI",
    image:
      "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl47ejt6z1lPUTBe32inSw6AxMVk5rphfaRNtFg",
  },
  {
    title: "KOMPANI NDËRTIMORE DHE ZHVILLUESE",
    image:
      "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4EAaUoRtbgaJFm3RPSMvBsCpGOH2fYKUwryi6",
  },
  {
    title: "AGJENCI TË PATUNDSHMËRIVE",
    image:
      "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4E3rjgegtbgaJFm3RPSMvBsCpGOH2fYKUwryi",
  },
  {
    title: "PRODHUES DHE DISTRIBUTORË TË MATERIALEVE NDËRTIMORE",
    image:
      "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4ovAmWQx82DPL6dKak7scW9nz4ONeSXJ5Yjbo",
  },
  {
    title: "FURNIZUES TË MOBILEVE, PAJISJEVE TË BRENDSHME DHE TEKNOLOGJISË",
    image:
      "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4lt7h8iotzb2QuEXkvL1a6FS5DrV34s7wnJAq",
  },
];

const ParticipantsGrid = () => {
  return (
    <section className=" py-16 px-[50px] lg:px-4 md:px-5">
      <h2 className="text-[54px] lg:text-[40px] md:text-[24px] font-['Hoves'] font-semibold text-center text-gray-900 mb-12">
        Kush mund të marrë pjesë?
      </h2>

      <div className=" md:hidden md:h-0 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-3 gap-x-[15px]  gap-y-[10px] mx-auto lg:gap-[4px]">
        {participants.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[10px] overflow-hidden shadow-md group"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-[285px] lg:h-[205px] object-cover transform group-hover:scale-105  transition-transform duration-300"
              width={1000}
              height={1000}
            />
            <div
              className="absolute inset-0 opacity-45"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,54,45,1) 100%, rgba(0,54,45,0.44) 0%)",
              }}
            ></div>
            <div className="absolute inset-0  flex items-end p-4">
              <p className="text-[#F4EDE2] text-[18px] lg:text-[16px] font-medium font-['SupermolotThin']">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="hidden h-0 md:flex w-full md:h-[271px]  mx-auto relative"
      >
        {participants.map((item, index) => (
          <SwiperSlide
            key={index}
            className=" rounded-[10px] overflow-hidden shadow-md group relative"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-[285px] lg:h-[271] object-cover transform group-hover:scale-105 transition-transform duration-300"
              width={1000}
              height={1000}
            />
            <div
              className="absolute inset-0 opacity-45"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,54,45,1) 100%, rgba(0,54,45,0.44) 0%)",
              }}
            ></div>
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <p className="text-[#F4EDE2] text-[18px] lg:text-[16px] font-medium font-['SupermolotThin']">
                {item.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ParticipantsGrid;

