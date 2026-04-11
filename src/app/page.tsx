import { searchKnowledge } from "@/lib/search";


export default function Home() {
  // console.log(searchKnowledge("cricket"));
  return (
    <main className="h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-3xl">Portfolio Engine</h1>
    </main>
  );
}