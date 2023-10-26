import Footer from "@/components/Footer";
import Awareness from "@/pages/Awareness";
import Emotions from "@/pages/Emotions";
import Manifesto from "@/pages/Manifesto";
import Work from "@/pages/Work";

export default function Home() {
  return (
    <main className="flex-grow overflow-y-auto mt-20">
      <Emotions />
      <Manifesto />
      <Awareness />
      <Work />

      <Footer />
    </main>
  );
}
