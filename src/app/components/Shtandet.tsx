import Image from "next/image";
import React from "react";

const stands = [
  {
    title: "Çfarë përfshihet në shtand bazik?",
    description: [
      "Tavolinë + karrige + ndriçim",
      "Shtandi me emër/logo të kompanisë 4m X 3m",
      "Rrymë elektrike dhe internet",
      "Pastrim ditor i hapësirës",
      "Asistencë logjistike dhe teknike",
    ],
    image: "/assets/images/shtandet/1.png",
  },
];

const Shtandet = () => {
  return (
    <section className="relative bg-[#F4EDE2] py-32 md:py-[70px] px-[127px] lg:px-[60px] md:px-[33px] md:pb-0">
      <div className=" bg-[#F4EDE2]">
        {stands.map((stand, index) => (
          <div
            key={index}
            className=" p-8 md:p-0 md:py-8 flex flex-row-reverse items-center justify-between gap-10 border-b border-[#221F1F] last:border-b-0 sticky top-20 md:relative md:top-0 bg-[#F4EDE2] "
          >
            {/* Image */}
            <div className="flex-shrink-0 w-1/2 md:hidden md:w-0 md:h-0">
              <Image
                width={1000}
                height={1000}
                src={stand.image}
                alt={stand.title}
                className="w-full h-[427px] object-contain"
              />
            </div>

            {/* Text */}
            <div className="w-1/2 md:!w-full max-w-[438px] md:max-w-none md:flex md:flex-col md:gap-5 md:items-center ">
              <h3 className="text-[54px] lg:text-[35px]  font-semibold font-['Hoves'] text-[#221F1F] mb-4 leading-tight md:text-center">
                {stand.title}
              </h3>
              <div className="flex-shrink-0 w-0 md:w-full md:h-full md:block">
                <Image
                  width={1000}
                  height={1000}
                  src={stand.image}
                  alt={stand.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <ul className="text-[20px] lg:text-[16px] font-['Hoves'] text-[#221F1F] list-disc pl-6 space-y-1">
                {stand.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between  gap-[46px] ">
        <Image
          src="https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4zemh2HItaZ4QBf9PbRWrVhwSED318gUY0G5p"
          alt="BTP-Holding"
          width={564}
          height={393}
          className=" h-fit w-full"
        />
        <Image
          src="https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4Jwwl34cWneKG1UIo8f2isma0XLhxBYw9gQd7"
          alt="AS-Tech"
          width={564}
          height={393}
          className=" w-full h-full "
        />
      </div>
    </section>
  );
};

export default Shtandet;
