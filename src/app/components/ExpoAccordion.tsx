"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

type AccordionItem = {
  time: string;
  title: string;
  description: string;
};

const data: AccordionItem[] = [
  { time: "09:30", title: "Program part 1", description: "Details for part 1" },
  { time: "10:00", title: "Opening", description: "Opening ceremony details" },
  { time: "10:20", title: "Speaker One", description: "First speaker session" },
  { time: "10:40", title: "Program part 1", description: "Continuation" },
  { time: "11:00", title: "Program part 1", description: "Next steps" },
];

const ExpoAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (!ref) return;
      if (i === activeIndex) {
        gsap.to(ref, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          display: "flex",
        });
      } else {
        gsap.to(ref, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          display: "none",
        });
      }
    });
  }, [activeIndex]);

  return (
    <section className="bg-[#F4EDE2] py-16 px-[127px] lg:px-[116px] md:px-5 md:py-4  flex flex-col gap-[77px]">
      <h2 className="text-center text-[54px] lg:text-[40px] md:text-[25px] font-semibold font-['Hoves'] text-[#221F1F]">
        Expo programi
      </h2>

      <div className="w-full mx-auto  divide-y divide-[#221f1f]">
        {data.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between font-['Hoves'] items-center py-4 md:py-1"
            >
              <span className="text-[34px] lg:text-[26px] md:text-[18px] font-['Hoves'] font-light w-1/2 text-left lg:text-left  p-2.5">
                {item.time}
              </span>
              <span className="text-[34px] lg:text-[26px] md:text-[18px] font-['Hoves'] font-semibold w-1/2 text-left lg:text-right lg:pr-2.5">
                {item.title}
              </span>
            </button>

            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className="overflow-hidden h-0 opacity-0  w-full flex flex-row justify-between "
            >
              <div className="!w-1/2"> </div>
              <p className="w-1/2 text-[18px] md:text-[14px] text-[#221f1f] pb-4  text-left font-normal lg:text-right lg:pr-2.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpoAccordion;
