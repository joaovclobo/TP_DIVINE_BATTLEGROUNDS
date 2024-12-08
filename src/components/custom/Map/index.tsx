"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CloudFog } from "lucide-react";
import { JSX, useState } from "react";

function Map(): JSX.Element {
  const mapNumbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const [playerPosition, setPlayerPosition] = useState<number | null>(null);
  const [selectFogMode, setSelectFogMode] = useState<boolean>(false);
  const [fogNumbers, setFogNumbers] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  function handleSelectPlayerPosition(number: number) {
    if (playerPosition === number) {
      setPlayerPosition(null);
    } else {
      setPlayerPosition(number);
    }
  }

  function handleSelectFogPosition(number: number) {
    if (fogNumbers.includes(number)) {
      setFogNumbers((pre) => pre.filter((fogNumber) => fogNumber !== number));
    } else {
      setFogNumbers((pre) => [...pre, number]);
    }
  }

  function handleResetFog() {
    setFogNumbers([]);
    setPlayerPosition(null);
  }

  function handleSelectFogNumbers() {
    const numbers = inputValue
      .split(/,|\s/)
      .map((number) => parseInt(number, 10))
      .filter((number) => !isNaN(number));

    numbers.forEach((number) => {
      setFogNumbers((pre) => [...pre, number]);
    });
  }

  function handleSelectFog() {
    setSelectFogMode((pre) => !pre);
  }

  return (
    <div className="w-full">
      <h1 className="text-center text-stone-600 my-6 text-3xl">Mapa</h1>
      <div className="flex items-center flex-row gap-2">
        <Button
          className={`bg-fuchsia-300 hover:bg-fuchsia-400 text-white w-full my-4 h-12 ${
            selectFogMode ? "bg-fuchsia-600" : ""
          }`}
          onClick={handleSelectFog}
        >
          {selectFogMode ? "Selecione as casas com névoa" : "Selecionar Névoa"}
          <CloudFog className="ml-2 size-64" color="white" />
        </Button>
        <Button
          className="bg-red-500 text-white my-4 h-12"
          onClick={handleResetFog}
        >
          Resetar
          <br /> névoa
        </Button>
      </div>
      <div className="flex flex-row mb-2 gap-2">
        <Input
          placeholder="'1,2,3...' ou '1 2 3 4...'"
          className="focus-visible:ring-fuchsia-100"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Button
          className="bg-fuchsia-300 hover:bg-fuchsia-400 text-white"
          onClick={handleSelectFogNumbers}
        >
          Selecionar
        </Button>
      </div>
      <div className="grid grid-cols-10 gap-4">
        {mapNumbers.map((number) => (
          <Button
            key={number}
            className={`bg-sky-300 hover:bg-sky-400 text-white ${
              playerPosition === number && fogNumbers.includes(number)
                ? "bg-red-700"
                : playerPosition === number
                ? "bg-cyan-800"
                : fogNumbers.includes(number)
                ? "bg-fuchsia-300"
                : ""
            }`}
            onClick={() =>
              selectFogMode
                ? handleSelectFogPosition(number)
                : handleSelectPlayerPosition(number)
            }
          >
            {number}
          </Button>
        ))}
      </div>
      <div className="flex flex-row mt-5 gap-2">
        <div className="w-full p-2 text-center flex justify-center items-center bg-sky-300 rounded-sm text-white">
          Casa sem gás
        </div>
        <div className="w-full p-2 text-center flex justify-center items-center bg-fuchsia-300 rounded-sm text-white">
          Casa com gás
        </div>
        <div className="w-full p-2 text-center flex justify-center items-center bg-red-700 rounded-sm text-white">
          Player no gás
        </div>
        <div className="w-full p-2 text-center flex justify-center items-center bg-cyan-800 rounded-sm text-white">
          Player
        </div>
      </div>
    </div>
  );
}

export { Map };
