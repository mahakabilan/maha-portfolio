import React, { useEffect } from "react";
import SkillSearch from "../components/SkillSearch";

export default function Skills() {
  const [skills, setSkills] = React.useState([]);
  useEffect(() => {
    fetch("/data/mySkills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);

  return (
    <section
      id="skills"
      className="h-screen snap-start flex items-center justify-center margin-top-20 flex-col"
    >
      <article className="relative max-w-5xl mx-auto skills-list overflow-hidden mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          Skills
        </h2>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-gray-900 via-white/50 dark:via-gray-900/50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-gray-900 via-white/50 dark:via-gray-900/50 to-transparent z-10" />

          <ul className="flex animate-scroll-fancy space-x-6 hover:[animation-play-state:paused] p-3">
            {[...Object.entries(skills), ...Object.entries(skills)].map(
              ([name], index) => (
                <li
                  key={index}
                  className="min-w-max px-5 py-2 bg-white/20 dark:bg-gray-800/30 backdrop-blur-md border border-white/30 dark:border-gray-700/30 text-sm font-medium text-gray-800 dark:text-gray-100 rounded-full shadow-md transition-transform transform hover:scale-110 hover:shadow-xl"
                >
                  {name}
                </li>
              )
            )}
          </ul>
        </div>
      </article>

      <article className="max-w-2xl">
        <h2 className="text-3xl font-semibold mb-4">
          {" "}
          Tired of scrolling a long list? Use Skill Search
        </h2>
        <SkillSearch />
      </article>
    </section>
  );
}
