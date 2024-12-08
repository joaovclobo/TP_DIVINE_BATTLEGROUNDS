"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { JSX, SetStateAction, useState } from "react";

interface IFogGeneratorProps {
  fogNumbers: number[];
  setFogNumbers: React.Dispatch<SetStateAction<number[]>>;
  round: number;
  setRound: React.Dispatch<SetStateAction<number>>;
}

function FogGenerator({
  fogNumbers,
  setFogNumbers,
  round,
  setRound,
}: IFogGeneratorProps): JSX.Element {
  function handleGenerateFog() {
    const numbersToSelect = [20, 12, 8, 6, 4, 2];
    const numberIndex =
      round > numbersToSelect.length ? numbersToSelect.length - 1 : round - 1;

    const numbers = getRandomNumbersFromMatrix(numbersToSelect[numberIndex]);
    setFogNumbers((pre) => [...pre, ...numbers]);
    setRound((pre) => pre + 1);
  }

  function getRandomNumbersFromMatrix(n: number): number[] {
    const size = 10;
    const borderLevels = [];

    const buildBorder = (level: number) => {
      const border = [];
      const start = level;
      const end = size - level - 1;

      for (let col = start; col <= end; col++) {
        border.push(level * size + col + 1);
      }
      for (let row = start + 1; row < end; row++) {
        border.push(row * size + end + 1);
      }
      for (let col = end; col >= start; col--) {
        border.push(end * size + col + 1);
      }
      for (let row = end - 1; row > start; row--) {
        border.push(row * size + start + 1);
      }
      return border;
    };

    for (let level = 0; level < Math.ceil(size / 2); level++) {
      borderLevels.push(buildBorder(level));
    }

    const selectedNumbers = [];
    const usedNumbers = new Set(fogNumbers); // Para controle rápido

    while (selectedNumbers.length < n) {
      for (const border of borderLevels) {
        const availableNumbers = border.filter((num) => !usedNumbers.has(num));

        while (availableNumbers.length > 0 && selectedNumbers.length < n) {
          const randomIndex = Math.floor(
            Math.random() * availableNumbers.length
          );
          const chosenNumber = availableNumbers.splice(randomIndex, 1)[0];
          selectedNumbers.push(chosenNumber);
          usedNumbers.add(chosenNumber);
        }

        if (selectedNumbers.length === n) break;
      }
    }

    return selectedNumbers;
  }

  function handleClearFog() {
    setFogNumbers([]);
    setRound(1);
  }

  return (
    <div className="w-full">
      <h1 className="text-center text-stone-600 my-6 text-3xl">
        Gerar névoa divina
      </h1>
      <div>
        <label htmlFor="round">Rodada: </label>
        <div className="flex flex-row mb-2 gap-2">
          <Input
            className="focus-visible:ring-fuchsia-100"
            value={round}
            id="round"
            placeholder="Número da rodada"
            onChange={(e) => {
              setRound(parseInt(e.target.value));
            }}
          />
          <Button
            className="bg-fuchsia-300 hover:bg-fuchsia-400 text-white"
            onClick={handleGenerateFog}
          >
            Avançar névoa
          </Button>
        </div>
      </div>
      {fogNumbers.length > 0 && (
        <div className="flex flex-row items-center text-justify  gap-3 my-2 border border-stone-200 p-3 rounded-sm">
          {fogNumbers.join(", ")}
          <Button
            onClick={() => {
              navigator.clipboard.writeText(fogNumbers.join(", "));
            }}
            className="bg-transparent hover:bg-transparent hover:text-stone-800 text-stone-500 size-8"
          >
            <Copy />
          </Button>
        </div>
      )}
      <div className="grid grid-cols-10 gap-2">
        {fogNumbers.map((fogNumber) => (
          <div
            key={fogNumber}
            className="flex items-center justify-center bg-fuchsia-300 text-white p-2 rounded-sm"
          >
            {fogNumber}
          </div>
        ))}
      </div>
      <Button
        className="bg-red-300 hover:bg-red-400 text-white w-full mt-4"
        onClick={handleClearFog}
      >
        Limpar névoa
      </Button>
    </div>
  );
}

export { FogGenerator };