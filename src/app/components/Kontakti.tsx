"use client";

import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
type FormState = {
  emri: string;
  mbiemri: string;
  biznesi: string;
  telefoni: string;
  email: string;
  mesazhi: string;
};

type Errors = Partial<Record<keyof FormState, string>>;
const initialState: FormState = {
  emri: "",
  mbiemri: "",
  biznesi: "",
  telefoni: "",
  email: "",
  mesazhi: "",
};

const Kontakti = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  // Simple validation logic
  const validate = (values: FormState): Errors => {
    const newErrors: Errors = {};
    if (!values.emri) newErrors.emri = "Emri është i detyrueshëm";
    if (!values.mbiemri) newErrors.mbiemri = "Mbiemri është i detyrueshëm";
    if (!values.biznesi)
      newErrors.biznesi = "Emri i biznesit është i detyrueshëm";
    if (!values.email || !/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = "Email adresa nuk është valide";
    if (!values.mesazhi) newErrors.mesazhi = "Mesazhi është i detyrueshëm";
    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        setSubmitted(true);
        setForm(initialState);
        setTimeout(() => setSubmitted(false), 3000);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="h-screen md:!h-fit bg-[#F4EDE2] flex items-center justify-center px-[60px] my-12 lg:px-5 ">
      <div className=" w-full grid grid-cols-2 lg:grid-cols-1  gap-12 items-center py-12 rounded-3xl">
        {/* Left: Form */}
        <div>
          <div className="text-[54px] md:text-[25px] lg:text-[40px] font-semibold mb-[22px] text-[#221F1F] leading-nonw">
            Rezervo shtandin tënd
          </div>
          <p className="text-[16px] font-['Hoves'] mb-[73px] md:mb-10 text-[#221F1F]">
            Na kontakto duke plotësuar formularin
          </p>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="flex gap-8">
              <div className="w-1/2">
                <input
                  placeholder="Emri"
                  id="emri"
                  name="emri"
                  value={form.emri}
                  onChange={handleChange}
                  className="w-full border-b border-[#221F1F] bg-transparent outline-none font-['Hoves'] py-2 placeholder:text-[#221F1F] text-[#221f1f] "
                  autoComplete="off"
                />
                {errors.emri && (
                  <div className="text-red-500 text-xs mt-1">{errors.emri}</div>
                )}
              </div>
              <div className="w-1/2">
                <input
                  placeholder="Mbiemri"
                  id="mbiemri"
                  name="mbiemri"
                  value={form.mbiemri}
                  onChange={handleChange}
                  className="w-full border-b border-[#221F1F] bg-transparent outline-none font-['Hoves'] py-2 placeholder:text-[#221F1F] text-[#221f1f] "
                  autoComplete="off"
                />
                {errors.mbiemri && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.mbiemri}
                  </div>
                )}
              </div>
            </div>
            <div>
              <input
                placeholder="Emri i biznesit tuaj"
                id="biznesi"
                name="biznesi"
                value={form.biznesi}
                onChange={handleChange}
                className="w-full border-b border-[#221F1F] bg-transparent outline-none font-['Hoves'] py-2 placeholder:text-[#221F1F] text-[#221f1f] "
                autoComplete="off"
              />
              {errors.biznesi && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.biznesi}
                </div>
              )}
            </div>
            <div>
              <input
                placeholder="Numri telefonit"
                id="telefoni"
                name="telefoni"
                value={form.telefoni}
                onChange={handleChange}
                className="w-full border-b border-[#221F1F] bg-transparent outline-none font-['Hoves'] py-2 placeholder:text-[#221F1F] text-[#221f1f] "
                autoComplete="off"
              />
              {errors.telefoni && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.telefoni}
                </div>
              )}
            </div>
            <div>
              <input
                placeholder="Email adresa e biznesit tuaj"
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-b border-[#221F1F] bg-transparent outline-none font-['Hoves'] py-2 placeholder:text-[#221F1F] text-[#221f1f] "
                autoComplete="off"
              />
              {errors.email && (
                <div className="text-red-500 text-xs mt-1">{errors.email}</div>
              )}
            </div>
            <div>
              <textarea
                placeholder="Mesazhi juaj"
                rows={5}
                id="mesazhi"
                name="mesazhi"
                value={form.mesazhi}
                onChange={handleChange}
                className="w-full border-b border-[#221F1F] bg-transparent outline-none font-['Hoves'] py-2 placeholder:text-[#221F1F] text-[#221f1f]  resize-none"
              />
              {errors.mesazhi && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.mesazhi}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#5556ff] text-white py-3 rounded-xl text-base font-medium hover:bg-[#5556ff] transition"
            >
              Dergo
            </button>
            {submitted && (
              <div className="text-[#F4EDE2] text-center text-sm mt-2">
                Formulari u dërgua me sukses!
              </div>
            )}
          </form>
          <div className="flex flex-col gap-5 items-center mt-5 justify-center font-['Hoves'] text-[18px]">
            <p className=" font-thin ">ose duke na kontaktuar në:</p>
            <div className="flex items-center justify-center flex-col">
              <div className="flex   flex-row gap-2 md:flex-col md:justify-center md:items-center">
                Email •{" "}
                <a
                  className=" font-semibold"
                  href="mailto:info@modus-events.com"
                >
                  info@modus-events.com
                </a>{" "}
                ose{" "}
                <a
                  className=" font-semibold"
                  href="mailto:info@pr-solutions.com"
                >
                  info@pr-solutions.com
                </a>
              </div>
              <div className="flex flex-row gap-2">
                Tel •{" "}
                <a className=" font-semibold" href="tel:+38346557766">
                  +383 46 55 77 66
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center items-center h-full lg:hidden lg:h-0 lg:w-0">
          <Image
            width={1000}
            height={1000}
            src="https://a6wxlnk8hx.ufs.sh/f/esmUdOliRVl4OXigrjVoqG8zsNmB2tKkcdFxaW5AhpEfCTb1"
            alt="Building"
            className="w-full h-[805px] lg:h-[600px] object-cover rounded-[40px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Kontakti;
