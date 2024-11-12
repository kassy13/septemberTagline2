import React from "react";
import {section} from "./section";
import {RiHeart3Fill, RiStarFill} from "react-icons/ri";

const SectionTwo = () => {
  return (
    <div className="px-8 md:px-14 h-fit">
      <p className="text-center mb-4">
        <span className="bg-green-300 text-green-800 p-1 rounded-2xl px-8">
          Popular Tourist Sites
        </span>
      </p>
      <h1 className="text-center font-bold text-xl">
        Visit & enjoy life with full of dreams
      </h1>
      <div className="w-full flex py-4 flex-col relative md:flex-row md:gap-10 md:py-6">
        {section.map((sect) => (
          <div key={sect.id} className="relative ">
            <p className="absolute right-0">{sect.feature} </p>
            <RiHeart3Fill className="absolute" />
            <div className="relative w-full">
              <img
                src={sect.img}
                alt=""
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="before:block before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:z-10"></div>
            </div>
            <div className="bg-white relative shadow-md py-4 rounded-3xl bottom-[1.5rem] z-10 md:bottom-[2rem] mb-6">
              <span className="flex pb-2 text-orange-400 hover:text-orange-600">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
