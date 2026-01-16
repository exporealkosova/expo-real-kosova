import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const Expo2025 = () => {
  return (
    <section className="bg-[#F4EDE2] py-12 px-6 lg:px-4 md:px-5 ">
      <div className="px-[50px]  lg:px-0  flex flex-col gap-[206px] md:gap-20 items-center">
        <div className="flex flex-col items-center justify-between mb-4  ">
          <div className="text-center text-[64px] md:text-[30px] text-[#221F1F] font-['SupermolotBold'] font-bold">
            EXPO REAL KOSOVA 2025
          </div>
          <h2 className="text-[54px] md:text-[25px] font-['Hoves']  lg:pl-5 md:pl-0">
            Expozuesit
          </h2>
          <div className="flex items-center gap-4 text-sm text-gray-600 h-full"></div>
        </div>

        <Image
          src="https://res.cloudinary.com/dwinvxbiw/image/upload/v1768595527/Group_5175_qrwwfm.png"
          alt="Expozuesit Logot"
          className="w-full h-full "
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default Expo2025;
