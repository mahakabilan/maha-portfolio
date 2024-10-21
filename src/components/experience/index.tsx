interface WorkExperience {
  duration: string;
  position: string;
  company: string;
  description: string;
}
import LetterAnimation from "../letter-animation";
import experiencesData from "./data.json";

export const Experience = () => {
  const experiences: WorkExperience[] = experiencesData.workExperience;
  return (
    <div className="flex flex-col text-primaryTextColor relative">
      <div className="text-5xl lg:text-8xl font-bold text-right">
     <LetterAnimation text="Experience"/>
      </div>

      <div className="flex flex-row w-full pt-20">
        <div className="w-full md:w-2/3">
          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-col mb-8">
              <span className="text-4xl md:text-5xl">{experience.company}</span>
              <div className="flex flex-col md:flex-row pt-4 uppercase justify-between w-full font-semibold text-base ">
                <div className="text-left">{experience.position}</div>
                <div className="text-left md:text-right">
                  ({experience.duration})
                </div>
              </div>
              <div className="flex flex-row pt-4 justify-between w-full pb-8 border-b-2">
                <div className="text-left w-full md:w-2/3">
                  {experience.description}
                </div>
                <div className="hidden md:block text-right w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block w-1/3"></div>
      </div>
    </div>
  );
};
