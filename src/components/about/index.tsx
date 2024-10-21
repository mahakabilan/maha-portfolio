import LetterAnimation from "../letterAnimation";

export const AboutMe = () => {
  return (
    <div className="flex flex-col h-screen text-primaryTextColor relative">
      <div className="text-5xl lg:text-8xl font-bold">
       <LetterAnimation text="About Me"/>
      </div>

      <div className="flex flex-row w-full pt-20">
        <div className="hidden md:block w-1/3"></div>
        <div className="w-full md:w-2/3 text-lg lg:text-xl">
          A highly skilled frontend expert with 14+ years of experience in
          creating scalable web solutions and leading large development teams.
          Known for optimizing workflows, architecting design systems, and
          integrating cutting-edge technologies like GenAI to drive innovation
          and automation. Adept at aligning technical solutions with business
          goals, delivering high-performance applications, and ensuring the
          security, accessibility, and responsiveness of web interfaces.
          Recognized for successfully managing cross-functional teams and
          spearheading critical projects to deliver results on time and within
          scope.
        </div>
      </div>
    </div>
  );
};
