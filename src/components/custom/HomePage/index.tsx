"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { MapPinned, CloudFog, SquareUser, Swords } from "lucide-react";
import { FogGenerator } from "../FogGenerator";
import { Map } from "./Map";
import { JSX, useState } from "react";
import { Gods } from "../Gods";
import { WeaponsAndArmor } from "../WeaponsAndArmor";

export function HomePage(): JSX.Element {
  const [fogNumbers, setFogNumbers] = useState<number[]>([]);
  const [round, setRound] = useState<number>(1);
  const [playerPosition, setPlayerPosition] = useState<number | null>(null);

  return (
    <Tabs defaultValue="map" className="w-full">
      <TabsList className="grid sm:!grid-cols-2 md:!grid-cols-4 rounded-sm gap-2 w-full">
        <TabsTrigger
          className="grid grid-flow-col place-items-center justify-center items-center text-xl px-5 gap-3 py-2 rounded-sm text-stone-900 bg-fuchsia-200 w-full data-[state=active]:bg-fuchsia-400"
          value="map"
        >
          Mapa
          <MapPinned color="#1c1917" />
        </TabsTrigger>
        <TabsTrigger
          className="grid grid-flow-col place-items-center justify-center items-center text-xl px-5 gap-3 py-2 rounded-sm text-stone-900 bg-fuchsia-200 w-full data-[state=active]:bg-fuchsia-400"
          value="fogGenerator"
        >
          Gerar névoa divina
          <CloudFog color="#1c1917" />
        </TabsTrigger>
        <TabsTrigger
          className="grid grid-flow-col place-items-center justify-center items-center text-xl px-5 gap-3 py-2 rounded-sm text-stone-900 bg-fuchsia-200 w-full data-[state=active]:bg-fuchsia-400"
          value="gods"
        >
          Deuses
          <SquareUser color="#1c1917" />
        </TabsTrigger>
        <TabsTrigger
          className="grid grid-flow-col place-items-center justify-center items-center text-xl px-5 gap-3 py-2 rounded-sm text-stone-900 bg-fuchsia-200 w-full data-[state=active]:bg-fuchsia-400"
          value="weaponsAndArmor"
        >
          Armas e armaduras
          <Swords color="#1c1917" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="map">
        <Map
          fogNumbers={fogNumbers}
          setFogNumbers={setFogNumbers}
          playerPosition={playerPosition}
          setPlayerPosition={setPlayerPosition}
        />
      </TabsContent>
      <TabsContent value="fogGenerator">
        <FogGenerator
          fogNumbers={fogNumbers}
          setFogNumbers={setFogNumbers}
          round={round}
          setRound={setRound}
        />
      </TabsContent>
      <TabsContent value="gods">
        <Gods />
      </TabsContent>
      <TabsContent value="weaponsAndArmor">
        <WeaponsAndArmor />
      </TabsContent>
    </Tabs>
  );
}
