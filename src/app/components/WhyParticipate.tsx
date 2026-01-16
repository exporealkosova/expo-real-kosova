import Image from "next/image";
import React from "react";

const reasons = [
  {
    text: "Lidhje direkte me mijëra klientë dhe investitorë potencialë",
    image: "https://res.cloudinary.com/dwinvxbiw/image/upload/v1768594698/image_nabzuy.png",
  },
  {
    text: "Shtrirje mediatike në të gjithë Kosovën dhe diasporën",
    image: "https://res.cloudinary.com/dwinvxbiw/image/upload/v1768594702/Rectangle_193_sw3fc4.png",
  },
  {
    text: "Platformë për të promovuar produktet, projektet dhe teknologjitë më të fundit",
    image: "https://res.cloudinary.com/dwinvxbiw/image/upload/v1768594702/Rectangle_194_peswxs.png",
  },
  {
    text: "Rrjetëzim me profesionistë të industrisë dhe institucione financiare",
    image: "https://res.cloudinary.com/dwinvxbiw/image/upload/v1768594700/Rectangle_195_zbzhen.png",
  },
];

const WhyParticipate = () => {
  return (
    <section className="bg-[#F4EDE2] md:bg-[#F4EDE2] py-32 px-[50px] lg:px-4 md:px-5  text-[#221F1F] md:text-[#221F1F] md:sticky md:top-0 md:!pt-0 ">
      <h2 className="text-[44px] lg:text-[35px] md:text-[20px] font-semibold font-['Hoves'] text-center mb-12 md:sticky md:top-6">
        Pse të merrni pjesë në <br className="md:hidden" /> EXPO REAL KOSOVA?
      </h2>

      <div className="grid grid-cols-4 md:grid-cols-3 gap-6  mx-auto md:flex md:flex-col md:items-center md:sticky md:top-32">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="text-center md:w-full md:mb-8 md:sticky md:top-32 md:bg-[#F4EDE2] rounded-xl"
            style={{
              zIndex: reasons.length + index,
            }}
          >
            <div className="rounded-xl overflow-hidden shadow-md mb-5">
              <Image
                src={reason.image}
                alt={reason.text}
                className="w-full h-[393px] lg:h-[232px] object-cover rounded-[15px]"
                width={1000}
                height={1000}
              />
            </div>
            <p className="text-[20px] lg:text-[16px] text-left font-['Hoves'] font-normal text-[#221F1F]">
              {reason.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyParticipate;
