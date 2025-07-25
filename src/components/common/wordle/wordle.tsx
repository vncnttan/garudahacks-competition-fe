import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import WordleCharacter from "@/components/common/wordle/wordle-character.tsx";

const SOLUTION = "REACT";
const TOTAL_TILES = 30;
const getInitialState = () =>
  Array.from({ length: TOTAL_TILES }, () => ({
    character: "",
    condition: "" as "correct" | "present" | "absent" | "",
  }));
const MAX_GUESSES = 6;

export default function Wordle() {
  const [currentRow, setCurrentRow] = useState(0);
  const [currentTile, setCurrentTile] = useState(0);
  const [wordleMap, setWordleMap] = useState(getInitialState());
  const [isGameOver, setIsGameOver] = useState(false);

  const submitGuess = () => {
    const guessStartIndex = currentRow * 5;
    const guess = wordleMap
      .slice(guessStartIndex, guessStartIndex + 5)
      .map((tile) => tile.character)
      .join("");

    if (guess.length !== 5) {
      alert("Not enough letters!");
      return;
    }

    const solutionChars = SOLUTION.split("");
    const guessChars = guess.split("");
    const result: ("correct" | "present" | "absent")[] =
      Array(5).fill("absent");
    const solutionCharCount: { [key: string]: number } = {};
    solutionChars.forEach((char) => {
      solutionCharCount[char] = (solutionCharCount[char] || 0) + 1;
    });

    guessChars.forEach((char, index) => {
      if (char === solutionChars[index]) {
        result[index] = "correct";
        solutionCharCount[char]--;
      }
    });

    guessChars.forEach((char, index) => {
      if (result[index] !== "correct" && solutionCharCount[char] > 0) {
        result[index] = "present";
        solutionCharCount[char]--;
      }
    });

    const newWordleMap = [...wordleMap];
    for (let i = 0; i < 5; i++) {
      newWordleMap[guessStartIndex + i].condition = result[i];
    }
    setWordleMap(newWordleMap);

    setCurrentRow(currentRow + 1);
    if (guess === SOLUTION || currentRow + 1 >= MAX_GUESSES) {
      setIsGameOver(true);
      const message =
        guess === SOLUTION
          ? "You won! 🎉"
          : `Game Over! The word was ${SOLUTION}.`;
      setTimeout(() => alert(message), 1200);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isGameOver) return;

    const { key } = e;

    if (key === "Enter") {
      submitGuess();
    } else if (key === "Backspace") {
      if (currentTile === currentRow * 5) return;

      const newWordleMap = [...wordleMap];
      const newCurrentTile = currentTile - 1;
      newWordleMap[newCurrentTile].character = "";
      setWordleMap(newWordleMap);
      setCurrentTile(newCurrentTile);
    } else if (/^[a-zA-Z]$/.test(key)) {
      if (currentTile >= currentRow * 5 + 5) return;

      const newWordleMap = [...wordleMap];
      newWordleMap[currentTile].character = key.toUpperCase();
      setWordleMap(newWordleMap);
      setCurrentTile(currentTile + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentTile, currentRow, isGameOver]);

  const handleReset = () => {
    setWordleMap(getInitialState());
    setCurrentRow(0);
    setCurrentTile(0);
    setIsGameOver(false);
  };

  return (
    <div className="flex flex-col gap-3 w-fit p-2">
      <div className={"grid grid-cols-5 gap-2 w-fit"}>
        {wordleMap.map((item, index) => {
          const rowOfTile = Math.floor(index / 5);
          const isRevealed = rowOfTile < currentRow;

          return (
            <WordleCharacter
              key={index}
              character={item.character}
              condition={item.condition}
              index={index}
              isRevealed={isRevealed}
            />
          );
        })}
      </div>
      <div className="flex gap-4">
        <Button onClick={handleReset} variant="outline">
          Reset
        </Button>
      </div>
    </div>
  );
}
