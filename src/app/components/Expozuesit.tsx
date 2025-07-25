// import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

const Expozuesit = () => {
  // const items = [
  //   {
  //     image: "/assets/images/expozuesit/v.png",
  //     logo: "/assets/images/expozuesit/v.svg",
  //     name: "Vlora Marina",
  //   },
  //   {
  //     image: "/assets/images/expozuesit/w.png",
  //     logo: "/assets/images/expozuesit/w.svg",
  //     name: "Washington Residence",
  //   },
  //   {
  //     image: "/assets/images/expozuesit/p.png",
  //     logo: "/assets/images/expozuesit/p.svg",
  //     name: "Pro Real Estate",
  //   },
  // ];
  // const [activeIndex, setActiveIndex] = useState(0);
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);
  // const [, setSwiperReady] = useState(false);

  // const formatPagination = (index: number, total: number) => {
  //   const current = (index + 1).toString().padStart(2, "0");
  //   const totalSlides = total.toString().padStart(2, "0");
  //   return `${current} - ${totalSlides}`;
  // };

  // useEffect(() => {
  //   setSwiperReady(true); // ensures DOM refs are available
  // }, []);

  return (
    <section className="bg-[#F4EDE2] py-12 px-6 lg:px-4 md:px-5 ">
      <div className="px-[50px]  lg:px-0  flex flex-col gap-[206px] md:gap-20 items-center">
        <div className="flex items-center justify-between mb-4  ">
          <h2 className="text-[54px] md:text-[25px] font-['Hoves'] font-semibold lg:pl-5 md:pl-0">Expozuesit
          </h2>
          <div className="flex items-center gap-4 text-sm text-gray-600 h-full">
            {/* <div className="flex gap-14 items-center">
              <div
                ref={prevRef}
                className="flex w-2.5 h-4  justify-center items-center rounded-full border cursor-pointer"
              >
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.64985 15.6818C9.18297 16.1061 8.42554 16.106 7.95863 15.6818L0.350179 8.76808C-0.116727 8.34383 -0.116727 7.65616 0.350179 7.23192L7.95863 0.318155C8.42554 -0.106032 9.18297 -0.10607 9.64985 0.318155C10.1167 0.742379 10.1167 1.43059 9.64985 1.85484L2.88614 8L9.64985 14.1452C10.1167 14.5694 10.1167 15.2576 9.64985 15.6818Z"
                    fill="#221F1F"
                  />
                </svg>
              </div>
              <span className="font-['Hoves'] text-[13px] md:text-[20px]">
                {formatPagination(activeIndex, items.length)}
              </span>
              <div
                ref={nextRef}
                className="flex w-2.5 h-4 justify-center items-center rounded-full border cursor-pointer"
              >
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.315134 0.318154C0.73533 -0.10607 1.41701 -0.106032 1.83723 0.318154L8.68484 7.23192C9.10505 7.65616 9.10505 8.34384 8.68484 8.76808L1.83723 15.6818C1.41701 16.106 0.735329 16.1061 0.315132 15.6818C-0.105065 15.2576 -0.105027 14.5694 0.315132 14.1452L6.40248 8L0.315133 1.85484C-0.105026 1.43059 -0.105063 0.742378 0.315134 0.318154Z"
                    fill="#221F1F"
                  />
                </svg>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="text-[64px] lg:text-[40px] md:text-[32px] text-[#221F1F] font-['SupermolotBold'] mb-[156px] md:mb-0">
          COMING SOON
        </div> */}
        <Image   src="/assets/images/IMAGE_LOGO.png"
                    alt="Expozuesit Logot"
                    className="w-full h-full "
                    width={1000}
                    height={1000}
                  />
        {/* <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 3 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 2.5, spaceBetween: 24 },
          }}
          onSwiper={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              type NavigationParams = {
                prevEl?: HTMLElement | null;
                nextEl?: HTMLElement | null;
              };
              const navigationParams = swiper.params
                .navigation as NavigationParams;
              navigationParams.prevEl = prevRef.current;
              navigationParams.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col gap-2">
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[300px]  object-cover hover:scale-110 transition-all duration-500 ease-in-out"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="flex items-center ">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="min-w-20 min-h-20 w-20 h-20 md:w-[30px] md:h-[30px]"
                    width={1000}
                    height={1000}
                  />
                  <span className="px-2.5 py-[15px] text-[24px] font-['Hoves'] font-normal">
                    {item.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  );
};

export default Expozuesit;