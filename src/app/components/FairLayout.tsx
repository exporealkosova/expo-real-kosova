import Image from "next/image";

export default function FairLayout() {
  return (
    <div className="flex  bg-[#5556ff] text-[#F4EDE2] px-[70px] py-[108px] lg:p-[50px]">
      <div className="w-1/2 md:w-full flex flex-col justify-center items-start gap-10 md:gap-5">
        <h1 className="text-[54px] lg:text-[35px] md:text-[25px] text-left md:text-center font-bold font-['Hoves'] md:w-full">
          Hapësira e panairit
        </h1>
        <div className="hidden h-0 w-0 md:h-full md:w-full md:block">
          <Image
            className="w-full h-full lg:h-full md:w-full md:h-full object-cover"
            src="https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4KYRth7vazPrWBCwmLHG6OqlRuXUDTcgjp4oA"
            alt="Fair Layout"
            width={1000}
            height={1000}
          />
        </div>
        <ul className="space-y-2 ml-2 h-[238px] md:space-y-1 md:h-fit">
          <li className="text-[28px] lg:text-[25px] md:text-[16px] font-normal font-['Hoves'] text-left ">
            • Hapësirë 2800 m²
          </li>
          <li className="text-[28px] lg:text-[25px] md:text-[16px] font-normal font-['Hoves'] text-left ">
            • Shtande me hapësirë të ndryshme
          </li>
          <li className="text-[28px] lg:text-[25px] md:text-[16px] font-normal font-['Hoves'] text-left ">
            • Hapsirë e skenës, B2B Lounge
          </li>
        </ul>
      </div>
      <div className="w-1/2 md:w-0">
        <Image
          className="w-full h-full lg:h-full object-cover md:hidden md:w-0 md:h-0"
          src="https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4KYRth7vazPrWBCwmLHG6OqlRuXUDTcgjp4oA"
          alt="Fair Layout"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
