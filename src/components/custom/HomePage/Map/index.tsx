"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CloudFog, RefreshCcw } from "lucide-react";
import { JSX, SetStateAction, useState } from "react";

interface IMapProps {
  fogNumbers: number[];
  setFogNumbers: React.Dispatch<SetStateAction<number[]>>;
  playerPosition: number | null;
  setPlayerPosition: React.Dispatch<SetStateAction<number | null>>;
}

function Map({
  fogNumbers,
  setFogNumbers,
  playerPosition,
  setPlayerPosition,
}: IMapProps): JSX.Element {
  const mapNumbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const [selectFogMode, setSelectFogMode] = useState<boolean>(false);
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
      <h1 className="text-center text-stone-100 my-6 text-4xl">Mapa</h1>
      <div className="flex items-center flex-row gap-2">
        <Button
          className={`bg-fuchsia-400 hover:bg-fuchsia-400 text-stone-700 w-full my-4 h-12 ${
            selectFogMode ? "bg-fuchsia-600" : ""
          }`}
          onClick={handleSelectFog}
        >
          {selectFogMode
            ? "Selecione as casas com neblina divina"
            : "Selecionar neblina divina"}
          <CloudFog className="ml-2 size-64" color="#1c1917" />
        </Button>
        <Button
          className="bg-red-500 text-stone-700 my-4 h-12"
          onClick={handleResetFog}
        >
          <RefreshCcw className="size-64" color="white" />
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
          className="bg-fuchsia-400 hover:bg-fuchsia-400 text-stone-700"
          onClick={handleSelectFogNumbers}
        >
          Selecionar
        </Button>
      </div>
      <div className="grid grid-cols-10 gap-2">
        {mapNumbers.map((number) => (
          <Button
            key={number}
            className={`bg-sky-300 hover:bg-sky-400 text-stone-700 ${
              playerPosition === number && fogNumbers.includes(number)
                ? "bg-red-400"
                : playerPosition === number
                ? "bg-green-400"
                : fogNumbers.includes(number)
                ? "bg-fuchsia-300 line-through"
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
        <div className="w-full p-2 text-center flex justify-center items-center bg-sky-300 rounded-sm text-stone-700">
          Casa sem neblina divina
        </div>
        <div className="w-full p-2 text-center flex justify-center items-center bg-fuchsia-300 rounded-sm text-stone-700">
          Casa com neblina divina
        </div>
        <div className="w-full p-2 text-center flex justify-center items-center bg-red-400 rounded-sm text-stone-700">
          Deus na neblina divina
        </div>
        <div className="w-full p-2 text-center flex justify-center items-center bg-green-400 rounded-sm text-stone-700">
          Deus
        </div>
      </div>
    </div>
  );
}

export { Map };
