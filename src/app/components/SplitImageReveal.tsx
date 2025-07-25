import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SplitImageReveal() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "10% 50%",
            end: "10% 50%",
            scrub: true,
            pin: true,
            onEnter: () => {
              gsap.to(leftRef.current, {
                x: "-80%",
                duration: 1,
                ease: "power2.inOut",
              });
              gsap.to(rightRef.current, {
                x: "80%",
                duration: 1,
                ease: "power2.inOut",
              });

              gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 0 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power2.out",
                  delay: 0.2,
                }
              );
            },
            onLeaveBack: () => {
              gsap.to(leftRef.current, { x: "0%", duration: 1 });
              gsap.to(rightRef.current, { x: "0%", duration: 1 });

              gsap.to(contentRef.current, {
                opacity: 0,
                y: 50,
                duration: 0.5,
              });
            },
          },
        });
        console.log(tl);
      }, sectionRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[639px] md:h-fit overflow-hidden bg-[#F4EDE2] px-[50px] md:px-0 flex md:flex-col items-center justify-center md:pt-10"
    >
      {/* Split Image Layers */}
      <div className="absolute inset-0 flex px-[50px] md:px-5 md:w-full z-10 ">
        <Image
          ref={leftRef}
          className="w-1/2 h-[639px] md:w-0 md:h-0"
          src="/assets/prmallleft.png"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          ref={rightRef}
          className="w-1/2 h-[639px] md:w-0 md:h-0 md:hidden"
          src="/assets/prmallright.png"
          width={1000}
          height={1000}
          alt=""
        />
      </div>

      {/* Center Content */}
      <div
        ref={contentRef}
        className="w-[85%] flex items-center justify-center px-12 md:px-0 text-left md:w-full"
      >
        <div className=" bg-[#F4EDE2] p-8 md:px-4">
          <h2 className="text-[54px] lg:text-[35px] md:text-[25px] font-semibold font-['Hoves'] mb-4 text-center ">
            Pse Prishtina Mall?
          </h2>
          <p className="text-[24px] lg:text-[20px] md:text-[14px] font-['Hoves'] text-[#221F1F] mb-6">
            Expo Real Kosova 2025 do të mbahet nga 25 deri më 27 Korrik 2025 në
            një nga vendet më të mëdha dhe moderne në vend - në Prishtina Mall,
            me një salle qe ka sipërfaqe prej 2800 m².
            <br />
            <br />
            Ky lokacion është jashtëzakonisht i përshtatshëm për organizimin e
            këtij lloji eventi, falë avantazheve të mëposhtme:
            <br />
            <br />
            Bazuar në këto kushte ideale, pritshmëritë tona për këtë panair janë
            mbi 30,000 vizitorë gjatë tre ditëve të ngjarjes, duke e bërë këtë
            një mundësi të jashtëzakonshme për promovim, shitje dhe rrjetëzim
            për të gjithë ekspozuesit.
          </p>
          <ul className="text-left list-disc pl-6 space-y-2 text-[20px]  md:text-[14px] font-['Hoves'] text-[#221F1F]">
            <li>
              Ndodhet brenda qendrës më të madhe tregtare në Kosovë, duke ofruar
              një eksperiencë të kombinuar ekspozimi dhe argëtimi
            </li>
            <li>
              Ka kapacitet të madh parkimi, duke përfshirë mijëra vende për
              vetura
            </li>
            <li>
              Gjatë sezonës së verës, Prishtina Mall është destinacion i
              preferuar për vizitorët vendorë dhe të diasporës
            </li>
            <li>
              Në muajt e verës, qendra pret nga 60,000 deri në 80,000 vizitorë
              në ditë
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Fallback Image */}
      <Image
        className="w-0 h-0 md:w-full md:h-full md:object-cover  "
        src="/assets/Group 22.png"
        width={1000}
        height={1000}
        alt=""
      />
    </section>
  );
}
