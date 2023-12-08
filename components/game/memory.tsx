// @ts-ignore
"use client";
import React, { useState, useEffect } from "react";

const boardIcons = ["🌍", "🌳", "🚿", "♻️", "💧", "🚲", "🌸", "🐝"];

const Memory = () => {
  const [boardData, setBoardData] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [foundCards, setFoundCards] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (foundCards.length === 16) {
      setGameOver(true);
    } else {
      setGameOver(false);
    }
  }, [foundCards]);

  const initialize = () => {
    shuffle();
    setFlippedCards([]);
    setFoundCards([]);
    setMoves(0);
    setGameOver(false);
  };

  const shuffle = () => {
    const shuffledCards = [...boardIcons, ...boardIcons].sort(
      () => Math.random() - 0.5
    );
    setBoardData(shuffledCards);
  };

  const updateBoardData = (idx: number) => {
    if (foundCards.includes(idx)) {
      return;
    }

    if (flippedCards.includes(idx)) {
      const newFlipped = flippedCards.filter((cardIdx) => cardIdx !== idx);
      setFlippedCards(newFlipped);
      return;
    }

    if (flippedCards.length < 2 && !gameOver) {
      const newFlipped = [...flippedCards, idx];
      setFlippedCards(newFlipped);

      if (newFlipped.length === 2) {
        setTimeout(() => compareCards(newFlipped), 400);
      }
    }
    setMoves((prevMoves) => prevMoves + 1);
  };

  const compareCards = (flipped: number[]) => {
    const [firstIdx, secondIdx] = flipped;
    if (boardData[firstIdx] === boardData[secondIdx]) {
      setFoundCards([...foundCards, firstIdx, secondIdx]);
    }
    setTimeout(() => {
      setFlippedCards([]);
    }, 400);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid">
        <div className="mb-4 flex justify-between">
          <span>Moves: {moves}</span>
          <button
            onClick={initialize}
            className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Reset
          </button>
        </div>
        {/* Affichage du message de victoire */}
        {gameOver && (
          <div className="text-4xl font-bold text-green-500">
            Bravo, vous avez gagné !
          </div>
        )}
        <div className="grid grid-cols-4 gap-4">
          {boardData.map((icon, index) => (
            <div
              key={index}
              className={`flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-gray-200`}
              onClick={() => updateBoardData(index)}
            >
              {flippedCards.includes(index) || foundCards.includes(index) ? (
                <span style={{ fontSize: "3em" }}>{icon}</span>
              ) : (
                <span>&nbsp;</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memory;
