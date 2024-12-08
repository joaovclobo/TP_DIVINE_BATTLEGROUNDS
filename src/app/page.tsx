import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Map } from "@/components/custom/Map";
import { Map as IconMap } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="flex rounded-sm gap-10 w-full">
            <TabsTrigger
              className="flex flex-row justify-between px-5 py-2 rounded-sm text-stone-900 bg-neutral-200 w-full data-[state=active]:bg-neutral-400"
              value="account"
            >
              Mapa
              <IconMap color="#1c1917" />
            </TabsTrigger>
            <TabsTrigger
              className="flex flex-row justify-between px-5 py-2 rounded-sm text-stone-900 bg-neutral-200 w-full data-[state=active]:bg-neutral-400"
              value="password"
            >
              Password
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Map />
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
