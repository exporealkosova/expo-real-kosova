const Hero = () => {
  return (
    <div className="flex justify-center items-center h-full md:max-h-[360px]">
      <video
        src="https://res.cloudinary.com/dwinvxbiw/video/upload/v1769371075/EXPO_Real_AfterMovie_Compressed_01_tsilcg.mp4"
        className="w-full h-full object-cover absolute top-0 left-0 md:h-[360px]"
        width={1920}
        height={1080}
        autoPlay
        loop
        muted
      />
      <div className="flex z-10 h-screen w-full flex-col justify-center items-center">
        <div className="text-center text-[18px] md:text-[10px] text-[#F4EDE2] font-['SupermolotThin']">
          Prishtina Mall | 24-25-26 Korrik 2026
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
