import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="container">
      <div className="mt-10">
        <Navbar />
      </div>
      <div className="my-10">
        <HeroSection />
      </div>
    </main>
  );
}

