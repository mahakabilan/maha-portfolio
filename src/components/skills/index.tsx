import { useState } from "react";
import skillsData from "./data.json";
import LetterAnimation from "../letterAnimation";

interface Skills {
  category: string;
  skills: string[];
}

export const Skills = () => {
  const skills: Skills[] = skillsData.technicalSkills;

  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCategory = (category: string) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div className="flex flex-col text-primaryTextColor relative">
      <div className="text-5xl lg:text-8xl font-bold pt-10">
       <LetterAnimation text="Skills" />
      </div>

      <div className="flex flex-row w-full pt-20">
        <div className="hidden md:block w-1/3"></div>
        <div className="w-full md:w-2/3">
          {skills.map((skillCategory, index) => (
            <div
              className="bg-skillsDarkAccent mb-4 rounded-md py-2 md:py-4 px-6 md:px-6 shadow-md text-secondaryTextColor"
              key={index}
            >
              <div className="flex justify-between items-center">
                <span className="text-base md:text-xl">
                  {skillCategory.category}
                </span>

                <button
                  onClick={() => toggleCategory(skillCategory.category)}
                  className="text-3xl font-thin focus:outline-none transition-transform duration-300"
                >
                  {expandedCategories[skillCategory.category] ? "×" : "+"}
                </button>
              </div>

              {expandedCategories[skillCategory.category] && (
                <div className="flex flex-wrap gap-4 py-4">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-md rounded-md bg-skillsLightAccent px-5 py-1.5 text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
