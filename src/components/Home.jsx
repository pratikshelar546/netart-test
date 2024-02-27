import React from "react";
import logos from "../asserts/logo.png";
import award from "../asserts/1.png";
import award2 from "../asserts/2.png";
import machines from "../asserts/3.png";
import { FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
const Home = () => {
  const industries = [
    "CHEMICALS & PROCESS",
    "POWER",
    "WATER & WASTE WATER",
    "OILS & GAS",
    "PHARMA",
    "SUGARS & DISTILLERIES",
    "PAPER & PULP",
    "MARINE & DEFENCE",
    "METAL & MINING",
    "FOOD & BEVERAGE",
    "PETROCHEMICAL & REFINERIES",
    "SOLAR",
    "BUILDING",
    "HVAC",
    "FIRE FIGHTING",
    "AGRICULTURE & RESIDENTIAL",
  ];

  return (
    <>
      <main className="w-full h-full ">
        {/* logo */}
        <section className="w-full h-full flex justify-center items-center">
          <img src={logos} alt="logo" className="h-40 " />
        </section>
        <section className="sm:px-5 px-5">
          {/* containt */}
          <div className="w-full h-full  flex sm:flex-row flex-col  ">
            {/* award */}
            <div className=" sm:w-1/3 w-full sm:mt-8 mt-0 flex justify-center">
              <img
                src={award}
                alt="award"
                className="w-full sm:h-5/6 h-80 object-contain"
              />
            </div>
            {/* image and containtent */}
            <div className="w-full sm:w-3/5 h-full flex flex-col">
              <b>
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </b>
              <div className="">
                <ul className=" list-disc sm:pl-10 pl-3 pt-3">
                  <li className=" list-disc">
                    C.R.I.'s energy efficient products are well recognized by
                    various Government Institutions, as trustworthy products for
                    various projects across the globe to save energy.
                  </li>
                  <li className=" list-disc">
                    C.R.I. is the highest contributor in the country for the
                    projects of EESL (Energy Efficiency Services Limited) to
                    replace the old inefficient pumps with 5 Star rated energy
                    efficient smart pumps with IoT enabled control panel.
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src={award2}
                  alt="award2"
                  className=" object-contain mt-4"
                />
              </div>
              <h3 className="px-2">
                Government of India has awarded the{" "}
                <b>"National Energy Conservation Award 2018".</b> Mr. G.
                Selvaraj, Joint Managing Director of C.R.I. Group received the
                award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
                Raj Kumar Singh, Honorable Minister of State.
              </h3>
            </div>
          </div>
          <div className="w-full flex justify-center pt-5 items-center">
            <b>
              INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
              RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS
              OF POWER FOR THE NATION.
            </b>
          </div>
          <div className="w-full  flex justify-center items-center">
            <div className="w-full max-w-6xl flex justify-center items-center flex-col  ">
              <img src={machines} alt="machines" />
              <b className="p-2">
                Valves - Pumps - Pipes - IoT Drives & Controllers - Wires &
                Cables - Solar Systems - Motors{" "}
              </b>
            </div>
          </div>
          <hr className="w-full h-1 bg-red-600 rounded-full my-1"></hr>
          {/* footer */}
          <section className="w-full flex justify-center items-center flex-col py-5 gap-6">
            <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
            <div className=" flex justify-center items-center flex-wrap">
              {industries.map((idustry, index) => (
                <>
                  {index > 0 && (
                    <span className="border-l border-red-600 mx-2 border h-6"></span>
                  )}
                  <span>{idustry}</span>
                </>
              ))}
            </div>
            <div className="w-full sm:h-28 h-32 bg-red-600 text-white font-semibold flex sm:flex-row flex-col px-5  justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <FaPhoneAlt
                  className="w-8 p-2 h-8 bg-white rounded-full"
                  color="red"
                />
                <p>Toll free 1800 200 1234</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <FaFacebook
                  className="w-8 h-8 bg-red-600 rounded-full"
                  color="white"
                />
                <p>www.facebook.com/cripumps </p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <TfiWorld
                  className="w-8 h-8 bg-red-600 rounded-full"
                  color="white"
                />
                <p>www.crigroups.com</p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
