import Image from "next/image";
import React from "react";

const mediaItems = [
  {
    title:
      "Investo, Ndërto, Mobilo – EXPO REAL Kosova 2025, nga 25 deri më 27 korrik",
    image: "/assets/heroImg.png",
  },
  {
    title:
      "Investo, Ndërto, Mobilo – EXPO REAL Kosova 2025, nga 25 deri më 27 korrik",
    image: "/assets/heroImg.png",
  },
  {
    title:
      "Investo, Ndërto, Mobilo – EXPO REAL Kosova 2025, nga 25 deri më 27 korrik",
    image: "/assets/heroImg.png",
  },
];

const MediaSection = () => {
  return (
    <section className=" py-16 px-[50px]">
      <h2 className="text-[54px] text-center font-semibold font-['Hoves'] mb-12">
        Media
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-2  gap-3 ">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden flex flex-col gap-3"
          >
            <Image
              src={item.image}
              alt="Media"
              className="w-full h-[246px] object-cover rounded-[20px]"
              width={1000}
              height={1000}
            />
            <div className="flex items-start gap-5 justify-center">
              <Image
                src={item.image}
                alt="Media"
                className="w-[54px] h-[54px] object-cover rounded-full"
                width={1000}
                height={1000}
              />
              <p className="text-[20px] text-left font-semibold font-['Hoves'] text-[#221F1F] leading-none">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaSection;
