"use client";

import { GODS_DATA, WEAPONS_DATA } from "../../../data/index";
import { JSX } from "react";

function WeaponsAndArmor(): JSX.Element {
  return (
    <div className="w-full p-2">
      <h1 className="text-center text-stone-100 my-6 text-4xl">Armas</h1>
      <div className="grid lg:!grid-cols-2 sm:!grid-cols-1 gap-8">
        {WEAPONS_DATA.map((weapon) => (
          <div
            key={weapon.id}
            className="flex flex-col gap-4 p-6 bg-fuchsia-100 border border-fuchsia-200 shadow-sm rounded-sm"
          >
            <img
              src={`/images/itens/armas/${weapon.image}`}
              alt={weapon.name}
              className="size-full rounded-[2%]"
            />

            <h2 className="text-stone-900 text-2xl">
              <b>{weapon.name}</b>
            </h2>
            <p className="text-stone-800 text-lg">
              <b>CD:</b> {weapon.CD}
            </p>
            <p className="text-stone-800 text-lg">
              <b>Descrição:</b> {weapon.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { WeaponsAndArmor };
