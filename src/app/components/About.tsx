import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const [showFull, setShowFull] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && contentRef.current) {
      if (showFull) {
        gsap.fromTo(
          contentRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" },
        );
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    }
  }, [showFull, isMobile]);

  return (
    <section className="bg-[#F4EDE2] py-20 md:px-[20px]">
      <div className="mx-auto text-left md:text-left px-[12%] md:px-0">
        <h2 className="text-[54px] lg:text-[40px] md:text-[25px] font-['Hoves'] font-semibold text-[#221F1F] mb-6 text-center">
          Rreth Panairit
        </h2>

        <p className="text-[20px] lg:text-[16px] font-semibold text-[#221F1F] mb-4 font-['SupermolotThin']">
          EXPO REAL Kosova
          <span className="font-normal text-[#221F1F] font-['Hoves']">
            {" "}
            është panairi më i madh dhe më gjithëpërfshirës në Kosovë për
            ndërtim, patundshmëri, materiale ndërtimore dhe industri
            përcjellëse. I organizuar çdo vit në ambientet moderne të Prishtina
            Mall, ky panair ofron një platformë të fuqishme për rrjetëzim,
            promovim dhe bashkëpunim ndërmjet profesionistëve të industrisë dhe
            mijëra vizitorëve.
          </span>
        </p>

        {/* Always show full text on desktop */}
        {isMobile ? (
          <div
            ref={contentRef}
            style={{
              overflow: "hidden",
              height: 0,
              opacity: 0,
            }}
          >
            <p className="text-[20px] lg:text-[16px] font-normal text-[#221F1F] font-['Hoves']">
              Me moton{" "}
              <span className="font-semibold text-[#221F1F]">
                &quot;Investo, ndërto, mobilo!&quot;
              </span>{" "}
              EXPO REAL Kosova bashkon në një vend të vetëm kompanitë
              ndërtimore, zhvilluesit e patundshmërive, studiot e arkitekturës e
              dizajnit, prodhuesit e materialeve ndërtimore, furnizuesit e
              pajisjeve për shtëpi, si dhe institucionet financiare që
              mbështesin investimet në banim dhe ndërtim.
            </p>
            <p className="text-[20px] lg:text-[16px] text-[#221F1F] font-['Hoves']">
              Synimi ynë është të krijojmë një urë lidhëse midis tregut dhe
              inovacionit – ku ekspozuesit prezantojnë zgjidhjet më të fundit
              dhe vizitorët gjejnë mundësi konkrete për investim, bashkëpunim
              apo blerje. Me një hapësirë prej 2,400 m², struktura moderne e
              panairit dhe programi i pasur promovues garantojnë një përvojë
              cilësore dhe me ndikim.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-[20px] lg:text-[16px] font-normal text-[#221F1F] font-['Hoves']">
              Me moton{" "}
              <span className="font-semibold text-[#221F1F]">
                &quot;Investo, ndërto, mobilo!&quot;
              </span>{" "}
              EXPO REAL Kosova bashkon në një vend të vetëm kompanitë
              ndërtimore, zhvilluesit e patundshmërive, studiot e arkitekturës e
              dizajnit, prodhuesit e materialeve ndërtimore, furnizuesit e
              pajisjeve për shtëpi, si dhe institucionet financiare që
              mbështesin investimet në banim dhe ndërtim.
            </p>
            <p className="text-[20px] lg:text-[16px] text-[#221F1F] font-['Hoves']">
              Synimi ynë është të krijojmë një urë lidhëse midis tregut dhe
              inovacionit – ku ekspozuesit prezantojnë zgjidhjet më të fundit
              dhe vizitorët gjejnë mundësi konkrete për investim, bashkëpunim
              apo blerje. Me një hapësirë prej 2,400 m², struktura moderne e
              panairit dhe programi i pasur promovues garantojnë një përvojë
              cilësore dhe me ndikim.
            </p>
          </div>
        )}

        {/* Toggle only on mobile */}
        {isMobile && (
          <button
            onClick={() => setShowFull((prev) => !prev)}
            className="mt-4 text-[#5556ff] text-[14px] font-light underline text-center w-full font-['Hoves']"
          >
            {showFull ? "Lexo më pak" : "Lexo më shumë"}
          </button>
        )}
      </div>

      <div className="mt-24 rounded-lg overflow-hidden px-[50px] mx-auto md:px-0 lg:px-4">
        <div
          className="rounded-[16px] w-full h-[300px] md:h-[169px] bg-cover bg-center flex items-center justify-center text-2xl md:text-4xl font-light"
          style={{
            backgroundImage: "url('https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4RVqxUZMHB8EuZDCjo74LiQhradV0XbtWqceI')",
          }}
        >
          
        </div>
      </div>
    </section>
  );
};

export default About;

