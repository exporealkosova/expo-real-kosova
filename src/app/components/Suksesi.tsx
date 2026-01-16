import React from "react";

const reasons = [
  {
    title: "40",
    text: "Kompani prezantuan produktet, shërbimet dhe projektet e tyre inovative",
  },
  {
    title: "8 000",
    text: "Rreth 8,000 vizitorë morrën pjesë, duke përfshirë profesionistë të industrisë, investitorë dhe qytetarë të interesuar",
    image: "/assets/images/psemerrpjese/2.png",
  },
  {
    title: "10+",
    text: "Panelista të cilët mbajtën fjalime frymëzuese dhe panele diskutimi të cilët ndanë praktikat më të mira dhe vizionet për të ardhmen ",
    image: "/assets/images/psemerrpjese/3.png",
  },
  {
    title: "2800m²",
    text: "Hapësirë me atmosferë profesionale dhe dinamike, e cila e beri këtë event një platformë të shkëlqyer për rrjetëzimin dhe krijimin e partneriteteve të reja",
    image: "/assets/images/psemerrpjese/4.png",
  },
];

const Suksesie = () => {
  return (
    <section className="bg-[#F4EDE2] md:bg-[#F4EDE2] py-32 px-[50px] lg:px-4 md:px-5  text-[#221F1F] md:text-[#221F1F] md:sticky md:top-0 md:!pt-0 ">
      <div className="flex flex-col gap-12 mb-[55px]">
        <h2 className="text-[44px] lg:text-[35px] md:text-[20px] font-semibold font-['Hoves'] text-center  md:sticky md:top-6">
          Suksesi i Expo Real 2025
        </h2>

        <p className="text-center text-[28px] font-['Hoves'] font-normal lg:text-[20px] md:text-[16px] md:mx-0">
          Edicioni i vitit të kaluar dëshmoi fuqinë dhe rëndësinë e këtij
          <br className="md:hidden" /> panairi si ngjarja më e madhe në Kosovë
          për ndërtim dhe patundshmëri.
        </p>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-3 gap-6  mx-auto md:flex md:flex-col md:items-center md:sticky md:top-32">
        {reasons.map((reason, index) => (
          <Card title={reason.title} description={reason.text} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Suksesie;

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#5556ff] rounded-[22px] shadow-md p-4 font-['Hoves'] flex flex-col justify-between items-start h-[266px] md:h-auto md:w-full md:py-4 md:px-5 gap-4">
      <span className="text-[72px] text-white font-['Hoves'] leading-none font-thin">{title}</span>
      <p className=" text-white font-['Hoves']">{description}</p>
    </div>
  );
};
