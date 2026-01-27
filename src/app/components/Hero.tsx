const Hero = () => {
  return (
    <div className="flex justify-center items-center h-full md:max-h-[360px]">
      <video
        src="https://res.cloudinary.com/dwinvxbiw/video/upload/v1769371075/EXPO_Real_AfterMovie_Compressed_01_tsilcg.mp4"
        className="w-full h-full object-cover md:h-[360px]"
        width={1920}
        height={1080}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Hero;

