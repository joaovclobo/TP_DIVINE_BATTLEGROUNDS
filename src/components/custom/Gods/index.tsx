"use client";

import { GODS_DATA } from "../../../data/index";
import { JSX } from "react";

function Gods(): JSX.Element {
  return (
    <div className="w-full">
      <h1 className="text-center text-stone-100 my-6 text-4xl">Deuses</h1>
      <div className="grid lg:!grid-cols-2 sm:!grid-cols-1 gap-8">
        {GODS_DATA.map((god) => (
          <div
            key={god.id}
            className="flex flex-col gap-4 p-6 bg-fuchsia-100 border border-fuchsia-200 shadow-sm rounded-sm"
          >
            <img
              src={`/images/gods/${god.image}`}
              alt={god.name}
              className="size-full rounded-[2%]"
            />

            <h2 className="text-stone-900 text-2xl">
              <b>{god.name}</b>
            </h2>
            <p className="text-stone-800 text-lg">
              <b>Panteão:</b> {god.panteon}
            </p>
            <p className="text-stone-800 text-lg">
              <b>PV:</b> {god.pv}
            </p>
            <p className="text-stone-800 text-lg">
              <b>CA:</b> {god.ca}
            </p>
            <p className="text-stone-800 text-lg">
              <b>CD:</b> {god.cd}
            </p>
            <p className="text-stone-800 text-lg">
              <b>Habilidade:</b> {god.hability}
            </p>
            <p className="text-stone-800 text-lg">
              <b>Descrição:</b> {god.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Gods };
