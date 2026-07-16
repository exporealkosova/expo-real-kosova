const Hero = () => {
  return (
    <div className="flex justify-center items-center h-full md:max-h-[360px]">
      <video
        src="https://c8fo83w525.ufs.sh/f/clwFgu00CAMuSb8AA7q6gvRs3mpW8DoNISkBU0q1hit7GYEn"
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



