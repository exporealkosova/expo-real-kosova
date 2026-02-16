const Hero = () => {
  return (
    <div className="flex justify-center items-center h-full md:max-h-[360px]">
      <video
        src="https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4VuN5wLcP3J9jdnQhw7mCktpPGT6Re1XLazAl"
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



