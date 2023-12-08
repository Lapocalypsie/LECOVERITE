"use client";
import Memory from "@/components/game/memory";
import React, { useState, useEffect } from "react";
import Quizz from "./quizz";
import Image from "next/image";

const DisplayPage = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [konamiCode, setKonamiCode] = useState([]);
  const [konamiActivated, setKonamiActivated] = useState(false);
  const konamiSequence = [
    "arrowup",
    "arrowup",
    "arrowdown",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "arrowleft",
    "arrowright",
    "b",
    "a",
  ];

  const handleKeyDown = (event) => {
    event.preventDefault();
    console.log("Key event" + event.key);
    const key = event.key.toLowerCase();

    setKonamiCode((prevCode) => {
      const updatedCode = [...prevCode, key];

      console.log("updated Code : " + updatedCode.join(" "));
      console.log(konamiSequence.join(" "));

      if (updatedCode.join("") === konamiSequence.join("")) {
        alert(`Konami Code Activated!`);
        console.log(`Konami Code Activated!`);
        setKonamiActivated(true);

        return []; // Reset the code
      }

      return updatedCode;
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectGame = (game) => {
    setSelectedGame(game);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="my-10 text-4xl font-bold">
        Sélectionnez un jeu auquel vous voulez jouer
      </h1>

      <div className="flex space-x-4">
        <button
          onClick={() => selectGame("Quizz")}
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Quizz
        </button>
        <button
          onClick={() => selectGame("Memory")}
          className="rounded-md bg-green-500 px-4 py-2 text-white"
        >
          Memory
        </button>
      </div>

      {selectedGame === "Quizz" && (
        <div className="mt-8">
          <Quizz />
        </div>
      )}
      {selectedGame === "Memory" && (
        <div className="mt-8">
          <Memory />
        </div>
      )}

      {konamiActivated && (
        <div className="mt-8 flex flex-col items-center">
          <div className="mb-4 w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/BGycFj-V3x4"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mb-4 w-full md:w-1/3 lg:w-1/2 xl:w-1/3">
            <Image
              src="/assets/images/charlie.png"
              width={400}
              height={400}
              alt="Charlie"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayPage;
