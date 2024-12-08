import { HomePage } from "../components/custom/HomePage";

export default function Home() {
  return (
    <div className="items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full justify-start">
        <HomePage />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full"></footer>
    </div>
  );
}
