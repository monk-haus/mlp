import { Navigation } from "./components/Navigation";
import { Intro } from "./components/Intro";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Panes } from "./components/Panes";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Intro />
        <Hero />
        <About />
        <Expertise />
        <Panes />
        <Footer />
      </main>
    </>
  );
}
