import { AboutMe } from "../components/about";
import { Banner } from "../components/banner";
import { Experience } from "../components/experience";
import { Header } from "../components/header";
import { Skills } from "../components/skills";


export const Home = () => {
  return (
    <div className="flex flex-col px-8 md:px-16 py-6 bg-themeBg">
      <Header />
      <Banner />
      <AboutMe />
      <Experience />
      <Skills />
    </div>
  );
};
