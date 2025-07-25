import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex jusitfy-center items-center h-full md:max-h-[360px]">
      <Image
        src="/assets/heroImg.png"
        alt="Hero Image"
        className="w-full h-full object-cover absolute top-0 left-0 md:h-[360px]"
        width={1920}
        height={1080}
      />
      <div className="flex z-10 h-screen w-full flex-col justify-center items-center">
        <div className="text-center text-[18px] md:text-[10px] text-[#F4EDE2] font-['SupermolotThin']">
          Prishtina Mall | 25-27 Korrik
        </div>
        <div className="text-center text-[64px] md:text-[30px] text-[#F4EDE2] font-['SupermolotBold'] font-bold">
          EXPO REAL KOSOVA
        </div>
        <div className="text-center text-[18px] md:text-[10px] text-[#F4EDE2] font-['SupermolotThin']">
          Ndërtim, Patundshmëri, Materiale Ndërtimore dhe Industri Përcjellëse
        </div>
      </div>
    </div>
  );
};

export default Hero;
