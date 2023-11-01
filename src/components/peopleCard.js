import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import personData from "public/DreamTeam/people.json";

import "../styles/peopleCard.css";

export default function PeopleCard() {
  const scrollContainer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const element = scrollContainer.current;
    let requestId;

    function scrollInfinitely() {
      if (isPlaying) {
        element.scrollLeft += 1; // The speed of the scroll, adjust as needed

        if (element.scrollLeft + element.clientWidth >= element.scrollWidth) {
          element.scrollLeft = 0; // Reset position
        }
      }
      requestId = requestAnimationFrame(scrollInfinitely);
    }

    requestId = requestAnimationFrame(scrollInfinitely);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      ref={scrollContainer}
      className="flex items-stretch overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-500"
      onClick={togglePlay}
    >
      {personData.map((person, index) => (
        <React.Fragment key={index}>
          <div className="w-full sm:w-1/2 md:w-1/3 p-4 flex-shrink-0 h-full">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-full">
              <Image
                src={person.srcImage}
                alt={person.srcImage}
                width={600}
                height={600}
                layout="contain"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">
                  {person.nomPrenom}
                </div>
                <b className="text-gray-700 text-base ">{person.role}</b>
                <p className="text-gray-700 text-base text-justify">
                  {person.description}
                </p>
              </div>
            </div>
          </div>
          {/* Duplicate the list for the infinite effect */}
          {index === personData.length - 1 &&
            personData.map((duplicatePerson) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 p-4 flex-shrink-0 h-full"
                key={duplicatePerson.id}
              >
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-full">
                  <Image
                    src={duplicatePerson.srcImage}
                    alt={duplicatePerson.srcImage}
                    width={600}
                    height={600}
                    layout="contain"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">
                      {duplicatePerson.nomPrenom}
                    </div>
                    <b className="text-gray-700 text-base ">
                      {duplicatePerson.role}
                    </b>
                    <p className="text-gray-700 text-base text-justify">
                      {duplicatePerson.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </React.Fragment>
      ))}
    </div>
  );
}
