import React from "react";
import {  useParams } from "react-router-dom";

import { RiStarFill } from "react-icons/ri";
import { section } from "./section";


const HomePopular = () => {
  const { id } = useParams();



 

  // Find the section object with the matching ID
  const selectedSection = section.find((sect) => sect.id === parseInt(id));



  return (
    <section className="flex flex-col mt-8 md:flex-row">
      <div className="px-8 md:px-14 h-fit">
        <p className="text-center mb-4">
          <span className="bg-green-300 text-green-800 p-1 rounded-2xl px-8">
            Popular Tourist Sites
          </span>
        </p>
        <h1 className="text-center font-bold text-xl">
          Visit & enjoy adventure life with full of dreams
        </h1>
        <div className="w-full flex py-4 flex-col relative md:flex-row md:gap-10 md:py-6">
          {selectedSection && (
            <div key={selectedSection.id} className="relative group">
              <p className="absolute right-0 z-50 bg-green-300 text-white p-1">{selectedSection.feature}</p>
              <div className="relative w-full">
                <img
                  src={selectedSection.img}
                  alt="image"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="before:block before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:z-10"></div>
              </div>
              <div className="bg-white relative shadow-md py-4 px-4 rounded-3xl bottom-[1.5rem] z-10 md:bottom-[2rem]  mb-6  ">
                <span className="flex pb-2 text-orange-400 hover:text-orange-600 ">
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                </span>
                <h2 className="font-bold text-green-300 hover:text-green-700">
                  {selectedSection.title}
                </h2>
                <p className="flex gap-1 items-center py-2 ">
                  {selectedSection.text}
                </p>
                <p className="flex items-center gap-1 pb-6">
                  {selectedSection.price}
                </p>
                <hr />
                <div className="flex justify-between py-3">
                  <p className="flex items-center gap-1">
                    {selectedSection.footer.day}
                  </p>
                  <p className="flex items-center gap-1">
                    {selectedSection.footer.people}
                  </p>
                  <p className="flex items-center gap-1">
                    {selectedSection.footer.explore}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
     
    </section>
  );
};

export default HomePopular;
