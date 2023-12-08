import React, { useState } from "react";
import { Button } from "../ui/button";

export default function App() {
  const questions = [
    {
      questionText:
        "Quel est le gaz à effet de serre le plus répandu sur Terre ? ",
      answerOptions: [
        { answerText: "H2O", isCorrect: false },
        { answerText: "CO2", isCorrect: true },
        { answerText: "CH4(méthane)", isCorrect: false },
        { answerText: "O3", isCorrect: false },
      ],
    },
    {
      questionText:
        "Combien de degré la température à t elle augmenter(par rapport à 1850-1900) ?",
      answerOptions: [
        { answerText: "+3.5°C", isCorrect: false },
        { answerText: "-0.3°C", isCorrect: false },
        { answerText: "+1.9°C", isCorrect: true },
        { answerText: "+0.5°C", isCorrect: false },
      ],
    },
    {
      questionText: "Combien de km2 de forêts sont détruits chaque année ? ",
      answerOptions: [
        { answerText: "78 000 km2", isCorrect: true },
        { answerText: "30,000 km2", isCorrect: false },
        { answerText: "45,000 km2", isCorrect: false },
        { answerText: "l60,000 km2", isCorrect: false },
      ],
    },
    {
      questionText:
        "A combien estime-t-on la hausse du réchauffement climatique sans aucun renforcement des politiques climatiques actuelles à la fin du siècle ? ",
      answerOptions: [
        { answerText: "+1.0°C", isCorrect: false },
        { answerText: "+4.5°C", isCorrect: false },
        { answerText: "+2.5°C", isCorrect: false },
        { answerText: "+3.2°C", isCorrect: true },
      ],
    },
    {
      questionText:
        "Quel terme désigne le phénomène par lequel la Terre retient une partie de la chaleur du soleil dans son atmosphère ?",
      answerOptions: [
        { answerText: "Érosion", isCorrect: false },
        { answerText: "Réfraction", isCorrect: false },
        { answerText: "Tectonique des plaques", isCorrect: false },
        { answerText: "Effet de serre", isCorrect: true },
      ],
    },
    {
      questionText:
        "Quelle activité humaine est la principale source d émissions de dioxyde de carbone (CO2) ? ",
      answerOptions: [
        { answerText: "Déforestation", isCorrect: false },
        {
          answerText:
            "Combustion des combustibles fossiles (industrie, transport, etc.)",
          isCorrect: true,
        },
        { answerText: "Agriculture", isCorrect: false },
        { answerText: "Manger Mcdo", isCorrect: false },
      ],
    },
    {
      questionText:
        "Quel accord international vise à limiter le réchauffement climatique en limitant les émissions de gaz à effet de serre ? ",
      answerOptions: [
        { answerText: "Accor Hotel Arena", isCorrect: false },
        { answerText: "Protocole de Kyoto", isCorrect: false },
        { answerText: "Accord de Paris", isCorrect: true },
        { answerText: "Accord de Copenhague", isCorrect: false },
      ],
    },
    {
      questionText:
        "Quelle énergie renouvelable utilise la chaleur interne de la Terre pour produire de l électricité ? ",
      answerOptions: [
        { answerText: "Énergie géothermique", isCorrect: true },
        { answerText: "Énergie solaire", isCorrect: false },
        { answerText: " Énergie hydraulique", isCorrect: false },
        { answerText: "Énergie des piles", isCorrect: false },
      ],
    },
    {
      questionText:
        "Quel est l impact du réchauffement climatique sur le niveau des océans ?",
      answerOptions: [
        { answerText: "Diminution du niveau des océans", isCorrect: false },
        { answerText: "Aucun impact", isCorrect: false },
        {
          answerText:
            "Augmentation du niveau des océans (fonte des glaces et expansion thermique de l eau)",
          isCorrect: true,
        },
        { answerText: "Stagnation du niveau des océans", isCorrect: false },
      ],
    },
    {
      questionText:
        "Quelle est la principale source d émissions de méthane (CH4) d origine humaine ? ",
      answerOptions: [
        { answerText: "Péter en publique", isCorrect: false },
        { answerText: "Décharges de déchets", isCorrect: false },
        { answerText: "Utilisation de pesticides", isCorrect: false },
        {
          answerText: "Élevage de bétail (digestion des ruminants)",
          isCorrect: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setshowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect: any) => {
    if (isCorrect === true) {
      alert("BONNE REPONSE !");
      setScore(score + 1);
    } else {
      const correctAnswer = questions[currentQuestion].answerOptions.find(
        (option) => option.isCorrect === true
      );
      alert(
        `MAUVAISE REPONSE. La bonne réponse était : ${
          correctAnswer!.answerText
        }`
      );
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setshowScore(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-light-500 to-dark-500 text-light-900">
      {showScore ? (
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Votre score est de {score} sur {questions.length}
          </h2>
          <p className=" mt-6 text-xl text-indigo-500 ">
            Charlie est proche de vous, mais il a utilisé un code de triche très
            connu pour se cacher... Etes vous aussi fûté que lui ?
          </p>
        </div>
      ) : (
        <div className="text-center">
          <div className="mb-2 text-xl font-semibold">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="mb-4 text-2xl font-bold">
            {questions[currentQuestion].questionText}
          </div>
          <div className="space-y-2">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <Button
                  key={index}
                  className=" block w-full rounded-md bg-light-400 p-3 hover:bg-light-800 focus:outline-none focus:ring"
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </Button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
