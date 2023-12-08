"use client";

import { randomInt } from "crypto";
import React, { useState, useEffect } from "react";

const regions = [
  "Amérique du Nord",
  "Europe",
  "Asie",
  "Afrique",
  "Amérique du Sud",
  "Australie",
];
const events = [
  {
    name: "Inondations",
    explanation:
      "Les inondations sont amplifiées par des phénomènes météorologiques extrêmes, menaçant les zones basses et les villes. Dans cette situation, aussi bien le reboisement que l'utilisation d'énergies renouvelables sont des solutions viables. Le reboisement contribue à la gestion des sols et peut aider à limiter les inondations en absorbant l'excès d'eau. D'un autre côté, l'utilisation d'énergies renouvelables contribue à réduire les émissions de gaz à effet de serre, atténuant ainsi le changement climatique et potentiellement les phénomènes météorologiques extrêmes. Les deux solutions sont importantes, mais dans ce contexte particulier, les énergies renouvelables sont soulignées en raison de leur impact sur les émissions de gaz à effet de serre.",
  },
  {
    name: "Sécheresse",
    explanation:
      "La sécheresse menace les ressources en eau et l'agriculture. Le recyclage de l'eau, la promotion de cultures résistantes à la sécheresse et l'adoption de pratiques agricoles durables peuvent aider à atténuer les effets de la sécheresse. Il est crucial d'éduquer les communautés sur la conservation de l'eau et de développer des stratégies d'utilisation efficace de l'eau pour faire face à ce défi.",
  },
  {
    name: "Pollution de l'air",
    explanation:
      "La pollution de l'air a des impacts néfastes sur la santé humaine et l'environnement. La transition vers des sources d'énergie propres, la promotion des transports durables et la réduction des émissions industrielles sont des moyens essentiels de lutter contre la pollution de l'air. Il est également important de sensibiliser le public aux dangers de la pollution de l'air et de promouvoir des modes de vie respectueux de l'environnement.",
  },
  {
    name: "Changement climatique",
    explanation:
      "Le changement climatique est un défi mondial majeur résultant des émissions de gaz à effet de serre. La réduction des émissions, l'adoption d'énergies renouvelables et la préservation des écosystèmes sont des stratégies essentielles pour atténuer le changement climatique. Il est impératif de prendre des mesures au niveau individuel et mondial pour minimiser les impacts sur notre planète.",
  },
  {
    name: "Déforestation",
    explanation:
      "La déforestation a des conséquences graves sur la biodiversité et le climat. La plantation d'arbres, la promotion de pratiques forestières durables et la lutte contre la déforestation illégale sont des actions cruciales. La préservation des forêts contribue à maintenir l'équilibre écologique et à préserver la diversité des espèces, tout en jouant un rôle clé dans la lutte contre le changement climatique.",
  },
];

const solutions = [
  "Énergies renouvelables",
  "Reboisement",
  "Éducation climatique",
  "Réduction des émissions de carbone",
];

const mauvaisesReponses = [
  "Centrales à charbon",
  "Utilisation intensive des plastiques",
  "Déforestation sans replantation",
  "Utilisation massive des énergies fossiles",
];

const Jeu = () => {
  const [playerPosition, setPlayerPosition] = useState(0);
  const [event, setEvent] = useState({});
  const [answers, setAnswers] = useState([]);
  const [solution, setSolution] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!gameOver && !gameWon) {
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      setEvent(randomEvent);

      const correctSolution =
        solutions[Math.floor(Math.random() * solutions.length)];
      const incorrectSolutions = mauvaisesReponses
        .filter((incorrect) => incorrect !== correctSolution)
        .slice(0, 3);

      const shuffledAnswers = [correctSolution, ...incorrectSolutions].sort(
        () => Math.random() - 0.5
      );
      setAnswers(shuffledAnswers);
      setSolution([]);
    }
  }, [playerPosition, gameOver, gameWon]);

  const handleMove = () => {
    if (playerPosition < regions.length - 1) {
      setPlayerPosition(playerPosition + 1);
      setSolution([]);
      setGameOver(false);
      setGameWon(false);
    } else {
      setGameWon(true);
    }
  };

  const handleSolution = (selectedSolution) => {
    if (!gameOver && !gameWon) {
      const correctSolution = solution[0];
      setSolution([correctSolution]);
      if (selectedSolution === correctSolution) {
        setScore(score + 1);
      } else {
        setGameOver(true);
      }

      const newIncorrectSolutions = mauvaisesReponses
        .filter((incorrect) => incorrect !== correctSolution)
        .slice(0, 3);

      const newShuffledAnswers = [
        correctSolution,
        ...newIncorrectSolutions,
      ].sort(() => Math.random() - 0.5);

      setAnswers(newShuffledAnswers);
    }
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="mb-4 text-3xl font-bold">Mission Climatique</h1>
      <p className="mb-2">
        Vous êtes actuellement en : {regions[playerPosition]}
      </p>
      <p className="mb-2">Événement en cours : {event.name}</p>
      <p className="mb-2">Choisissez la meilleure solution :</p>
      <div className="space-x-2">
        {answers.map((a, index) => (
          <button
            key={index}
            onClick={() => handleSolution(a)}
            className={`mt-2 h-12 rounded ${
              a === solution[0] ? "bg-green-500" : "bg-blue-500"
            } px-4 py-2 font-bold text-white hover:bg-blue-700`}
          >
            {a}
          </button>
        ))}
      </div>
      {solution[0] && (
        <>
          {gameOver && (
            <p className="mt-4 font-bold text-red-500">
              Dommage ! La bonne solution était : {event.name}
            </p>
          )}
          {!gameOver && (
            <div className="mt-4">
              <p className="font-bold text-green-500">Bonne réponse !</p>
              <p>{event.explanation}</p>
            </div>
          )}
          <button
            onClick={handleMove}
            className="mb-4 mt-8 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Question suivante
          </button>
        </>
      )}
      {gameWon && (
        <p className="mt-4 font-bold text-green-500">
          Félicitations ! Vous avez réussi votre mission climatique. Score :{" "}
          {score}
        </p>
      )}
    </div>
  );
};

export default Jeu;
