import HeaderGreen from "../components/HeaderGreen";
import Footer from "../components/Footer";
import Image from "next/image";
const items = [
  {
    logo: "/assets/images/expozuesit/v.svg",
  },
  {
    logo: "/assets/images/expozuesit/w.svg",
  },
  {
    logo: "/assets/images/expozuesit/p.svg",
  },
  {
    logo: "/assets/images/expozuesit/v.svg",
  },
  {
    logo: "/assets/images/expozuesit/w.svg",
  },
  {
    logo: "/assets/images/expozuesit/p.svg",
  },
  {
    logo: "/assets/images/expozuesit/v.svg",
  },
  {
    logo: "/assets/images/expozuesit/w.svg",
  },
  {
    logo: "/assets/images/expozuesit/p.svg",
  },
  {
    logo: "/assets/images/expozuesit/v.svg",
  },
  {
    logo: "/assets/images/expozuesit/w.svg",
  },
  {
    logo: "/assets/images/expozuesit/p.svg",
  },
  {
    logo: "/assets/images/expozuesit/v.svg",
  },
  {
    logo: "/assets/images/expozuesit/w.svg",
  },
  {
    logo: "/assets/images/expozuesit/p.svg",
  },
  {
    logo: "/assets/images/expozuesit/w.svg",
  },
  {
    logo: "/assets/images/expozuesit/p.svg",
  },
  {
    logo: "/assets/images/expozuesit/w.svg",
  },
];
export default function Expozuesit() {
  return (
    <div className="bg-[#F4EDE2] z-[2] overflow-hidden">
      <HeaderGreen />
      <div className="flex flex-col items-center justify-center gap-20 px-[120px] lg:px-0 py-[123px] md:py-[70px] ">
        <h2 className="text-[54px] md:text-[25px] font-['Hoves'] font-semibold lg:pl-5 md:pl-0">
          Expozuesit
        </h2>
        <div className="flex flex-row gap-32 flex-wrap justify-center">
          {items.map((item, index) => (
            <Image
              key={index}
              src={item.logo}
              alt={`expo-logo-${index}`}
              className="w-[191px] h-full"
              width={1000}
              height={1000}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
