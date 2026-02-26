"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper"; // 👈 add this
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { EffectCards, Navigation } from "swiper/modules";
import { useRef, useState } from "react";

const Expozuesit = () => {
  const items = [
    {
      image:
        "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4e9CXjTiRVl4CiMhf9TodmIc0vU2exD8QYLGu",
    },
    {
      image:
        "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4SP5yqzlTOGuUCRf4vMndb1ALqJkpic8t2WPw",
    },
    {
      image:
        "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4flVNCJ8akFcT0JmYvUGld5CPsR6jtgZrIoeQ",
    },
    {
      image:
        "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4xTkIfVtECD3ZtdMqnYINzmw85OLb0AT7viP2",
    },
    {
      image:
        "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4EJvVUitbgaJFm3RPSMvBsCpGOH2fYKUwryi6",
    },
    {
      image:
        "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4o6ceVcx82DPL6dKak7scW9nz4ONeSXJ5Yjbo",
    },
    {
      image:
        "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4ldEHRrotzb2QuEXkvL1a6FS5DrV34s7wnJAq",
    },
    {
      image:
        "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4MsenGwLsvqbx93hHg0KRz5MjV6PYkGaWnlO7",
    },
    {
      image:
        "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4Mu5l15Lsvqbx93hHg0KRz5MjV6PYkGaWnlO7",
    },
    {
      image:
        "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl40GSyxpCJU837GYF1PinbAreVdOkfv09ayWqL",
    },
    {
      image:
        "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4iVvkSWdjx1gH4TrOARcPKt2VwqaU9b7Wom3Z",
    },
    {
      image:
        "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4fm2BE298akFcT0JmYvUGld5CPsR6jtgZrIoe",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section className="bg-[#F4EDE2] py-12 px-6 lg:px-4 md:px-5 ">
      <div className="px-[50px] lg:px-0 flex flex-col gap-[20px] md:gap-20 items-center">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[54px] md:text-[25px] font-['Hoves'] font-semibold lg:pl-5 md:pl-0">
            EXPO REAL KOSOVA 2025
          </h2>
        </div>

        <div className="relative w-4/5 mx-auto px-[80px] mb-[20px] md:px-10">
          <Swiper
            className="cardsStackSwiper"
            centeredSlides
            effect="cards"
            slidesPerView={1}
            loop
            grabCursor
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            cardsEffect={{
              rotate: false,
              perSlideRotate: 0,
              perSlideOffset: 18,
              slideShadows: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // ✅ typed correctly now

              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }

              setActiveIndex(swiper.realIndex);
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[EffectCards, Navigation]}
          >
            {items.map((item, idx) => (
              <SwiperSlide key={idx} className="w-full">
                <div className="rounded-2xl overflow-hidden w-full flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt=""
                    className="max-w-[800px] w-full h-[420px] md:h-[200px] object-cover rounded-xl"
                    width={800}
                    height={400}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 h-full">
          <div className="flex gap-14 items-center">
            <div
              ref={prevRef}
              className="flex w-4 h-4 justify-center items-center rounded-full cursor-pointer"
            >
              <Image
                src="https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4eaXbjwiRVl4CiMhf9TodmIc0vU2exD8QYLGu"
                alt="Previous"
                width={24}
                height={24}
              />
            </div>

            <PaginationDynamic
              activeIndex={activeIndex}
              total={items.length}
              visible={5}
              loop={true}
              onDotClick={(i) => swiperRef.current?.slideToLoop(i)} // ✅ now valid
            />

            <div
              ref={nextRef}
              className="flex w-4 h-4 justify-center items-center rounded-full cursor-pointer"
            >
              <Image
                src="https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl49hYok8jBK8C3vmHNnFUyGOLpsuJ4RDlhzkxf"
                alt="Next"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expozuesit;
type PaginationDynamicProps = {
  activeIndex: number;
  total: number;
  visible?: number; // 5
  loop?: boolean;
  onDotClick?: (index: number) => void;
};

export function PaginationDynamic({
  activeIndex,
  total,
  visible = 5,
  loop = true,
  onDotClick,
}: PaginationDynamicProps) {
  if (total <= 0) return null;

  const V = Math.min(visible, total);

  // Must match Tailwind: w-2.5 (10px) and gap-2 (8px)
  const DOT = 10;
  const GAP = 8;
  const STEP = DOT + GAP;

  const viewportWidth = V * DOT + (V - 1) * GAP;

  const centerOffset = ((V - 1) / 2) * STEP;
  let translateX = -activeIndex * STEP + centerOffset;

  // Clamp if not looping
  if (!loop && total > V) {
    const min = -(total - V) * STEP;
    const max = 0;
    translateX = Math.max(min, Math.min(max, translateX));
  }

  return (
    <div
      className="overflow-hidden flex items-center"
      style={{ width: `${viewportWidth}px`, height: `${DOT}px` }}
    >
      <div
        className="flex gap-2 transition-transform duration-300 will-change-transform items-center"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {Array.from({ length: total }).map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => onDotClick?.(i)}
              className={[
                "shrink-0 h-2.5 w-2.5 rounded-full",
                isActive ? "bg-blue-600" : "bg-gray-400 w-2 h-2",
              ].join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
}
