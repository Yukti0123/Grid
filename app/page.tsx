"use client";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

const Home = () => {
  const cards = [
    {
      title: "Dealer Network",
      imageSrc: "/Network.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nesciunt. Est, quisquam ipsum doloribus, non sint similique nobis, dolor id odit",
      buttonText: "Find a Dealer >",
      buttonColor: "bg-orange-500",
    },
    {
      title: "Training & Safety",
      imageSrc: "/Safety.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nesciunt. Est, quisquam ipsum doloribus, non sint similique nobis, dolor id odit",
      buttonText: "Find Training >",
      buttonColor: "bg-orange-500",
    },
    {
      title: "Parts & Service",
      imageSrc: "/Services.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nesciunt. Est, quisquam ipsum doloribus, non sint similique nobis, dolor id odit",
      buttonText: "Get Support >",
      buttonColor: "bg-orange-500",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleDotClick = (index: React.SetStateAction<number>) => {
    setCurrentCardIndex(index);
  };

  const handlePrev = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <div className="p-6 my-40  bg-[#f2e8d5]">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl lg:leading-none font-bold font-sans text-gray-800  text-center">
          More Than The <br></br> Right Equipment
        </h1>
        <p className="mt-4 text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          repellendus veniam quam repudiandae eum. Illum aspernatur id tempora,
          minima, adipisci laudantium recusandae totam earum ipsa, dolor debitis
          temporibus pariatur quam.
        </p>

        {/* Display the current card for small screens */}
        <div
          {...swipeHandlers}
          className="mt-8 w-full flex justify-center items-center lg:hidden"
        >
          <div className="bg-white p-6 px-0 lg:px-30 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs justify-items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              {cards[currentCardIndex].title}
            </h2>
            <div className="mb-4">
              <Image
                src={cards[currentCardIndex].imageSrc}
                alt={cards[currentCardIndex].title}
                width={100}
                height={50}
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-600 mb-4 text-center">
              {cards[currentCardIndex].description}
            </p>
            {/* Button with full width */}
            <button
              className={`w-full px-4 py-2 ${cards[currentCardIndex].buttonColor} text-white hover:bg-opacity-80 transition-colors duration-200`}
            >
              {cards[currentCardIndex].buttonText}
            </button>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="mt-4 flex justify-center space-x-2 lg:hidden">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                currentCardIndex === index ? "bg-orange-500" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Display all cards horizontally on large screens */}
      <div className="mt-8 lg:px-40 hidden lg:grid grid-cols-3 gap-12 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 justify-items-center"
          >
            <div className="mb-4">
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={150}
                height={50}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {card.title}
            </h2>
            <p className="text-gray-600 text-center mb-6">{card.description}</p>
            {/* Button with full width */}
            <button
              className={`w-full font-serif mb-0 px-4 py-2 ${card.buttonColor} text-white hover:bg-opacity-80 transition-colors duration-200`}
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
