import Image from "next/image";
import React from "react";

const reasons = [
  {
    text: "Lidhje direkte me mijëra klientë dhe investitorë potencialë",
    image: "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4McA4UzLsvqbx93hHg0KRz5MjV6PYkGaWnlO7",
  },
  {
    text: "Shtrirje mediatike në të gjithë Kosovën dhe diasporën",
    image: "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4UPZZEHK2aPtguMTXFN0Cfq39LYRVKDdji46A",
  },
  {
    text: "Platformë për të promovuar produktet, projektet dhe teknologjitë më të fundit",
    image: "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4tK3h0rTeS6U7H3mrLy2Gsv1VPQlRZAzjdMwO",
  },
  {
    text: "Rrjetëzim me profesionistë të industrisë dhe institucione financiare",
    image: "https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4h2poAnXWIJpx8qPgF0dyes1tCUn75cwuQrBS",
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
