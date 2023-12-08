"use client";
import Memory from "@/components/game/memory";
import React, { useState } from "react";

const DisplayPage = () => {
  // État pour suivre la sélection de l'utilisateur
  const [selectedGame, setSelectedGame] = useState(null);

  // Fonction pour changer le jeu sélectionné
  const selectGame = (game) => {
    setSelectedGame(game);
  };

  return (
    <div>
      <h1 className="my-10 text-center text-4xl font-bold">
        Selectionnez un jeu auquel vous voulez jouer
      </h1>

      {/* Boutons de sélection des jeux */}
      <div className="flex justify-center space-x-4">
        <button onClick={() => selectGame("Quizz")}>Quizz</button>
        <button onClick={() => selectGame("Memory")}>Memory</button>
        {/* Ajoute d'autres boutons pour d'autres jeux si nécessaire */}
      </div>

      {/* Rendu conditionnel du composant en fonction du choix de l'utilisateur */}
      {selectedGame === "Quizz" && <div>Insère ici le composant Quizz</div>}
      {selectedGame === "Memory" && <Memory />}
      {/* Ajoute d'autres conditions pour d'autres jeux si nécessaire */}
    </div>
  );
};

export default DisplayPage;
