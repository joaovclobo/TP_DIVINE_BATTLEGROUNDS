"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { MapPinned, CloudFog, SquareUser } from "lucide-react";
import { FogGenerator } from "../FogGenerator";
import { Map } from "../Map";
import { JSX, useState } from "react";
import { Gods } from "../Gods";

export function HomePage(): JSX.Element {
  const [fogNumbers, setFogNumbers] = useState<number[]>([]);
  const [round, setRound] = useState<number>(1);
  const [playerPosition, setPlayerPosition] = useState<number | null>(null);

  return (
    <Tabs defaultValue="map" className="w-full">
      <TabsList className="flex rounded-sm gap-10 w-full">
        <TabsTrigger
          className="flex flex-row justify-between text-xl items-center px-5 gap-5 py-2 rounded-sm text-stone-900 bg-neutral-200 w-full data-[state=active]:bg-neutral-400"
          value="map"
        >
          Mapa
          <MapPinned color="#1c1917" />
        </TabsTrigger>
        <TabsTrigger
          className="flex flex-row justify-between text-xl items-center px-5 gap-5 py-2 rounded-sm text-stone-900 bg-neutral-200 w-full data-[state=active]:bg-neutral-400"
          value="fogGenerator"
        >
          Gerar névoa divina
          <CloudFog color="#1c1917" />
        </TabsTrigger>
        <TabsTrigger
          className="flex flex-row justify-between text-xl items-center px-5 gap-5 py-2 rounded-sm text-stone-900 bg-neutral-200 w-full data-[state=active]:bg-neutral-400"
          value="gods"
        >
          Deuses
          <SquareUser color="#1c1917" />
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
    </Tabs>
  );
}
