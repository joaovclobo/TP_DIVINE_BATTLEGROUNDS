import { HomePage } from "../components/custom/HomePage";

export default function Home() {
  return (
    <div className="items-start justify-items-start min-h-screen min-w-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] lg:!bg-[url('/images/backgrounds/Background-1920x1080.png')] md:!bg-[url('/images/backgrounds/Background-1024x768.png')] sm:!bg-[url('/images/backgrounds/Background-800x600.png')] bg-[url('/images/backgrounds/Background-800x600.png')] bg-cover bg-center">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full justify-start">
        <HomePage />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full"></footer>
    </div>
  );
}
