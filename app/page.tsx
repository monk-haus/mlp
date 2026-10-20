import { Navigation } from "./components/Navigation";
import { Intro } from "./components/Intro";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Panes } from "./components/Panes";
import { Footer } from "./components/Footer";
import { getHomePage, getSiteSettings } from "./sanity/queries";

export default async function Home() {
  const [page, settings] = await Promise.all([getHomePage(), getSiteSettings()]);

  return (
    <>
      <Navigation email={settings.email} phone={settings.phone} />
      <main>
        <Intro />
        <Hero content={page.hero} />
        <About content={page.about} />
        <Expertise content={page.expertise} />
        <Panes principles={page.principles ?? []} />
        <Footer content={page.contact} settings={settings} />
      </main>
    </>
  );
}
