import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import LetterAnimation from "../letter-animation";

export const AboutMe = () => {
  return (
    <div className="flex flex-col min-h-screen text-primaryTextColor relative">
      <div className="text-5xl lg:text-8xl font-bold">
       <LetterAnimation text="About Me"/>
      </div>

      <div className="flex flex-row w-full pt-20 mb-10">
        <div className="hidden md:block w-1/3"></div>
        <div className="w-full md:w-2/3 text-lg lg:text-xl">
          <div>
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
          <div className="flex flex-col items-center pt-4">
            <div className="text-lg lg:text-xl pb-10">
              I'm always open to exciting opportunities and love to collaborate
              with like-minded professionals. Whether you have a question, want
              to discuss a potential project, or just want to connect—let's
              chat! You can reach me through any of the following:
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4">
              <div className="text-md rounded-2xl bg-skillsLightAccent px-5 py-1.5 items-center justify-center flex flex-row space-x-2 font-light text-base">
                <FaEnvelope className="text-md" />
                <a
                  href="mailto:ashwini.kabi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ashwini.kabi@gmail.com
                </a>
              </div>

              <div className="text-md rounded-2xl bg-skillsLightAccent px-5 py-1.5 items-center flex flex-row space-x-2 font-light text-base">
                <FaPhone className="text-md" />
                <a
                  href="tel:+919742621140"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 9742621140
                </a>
              </div>
              <div className="text-md rounded-2xl bg-skillsLightAccent px-5 py-1.5 items-center flex flex-row space-x-2 font-light text-base">
                <FaLinkedin className="text-md" />
                <a
                  href="https://www.linkedin.com/in/mahalakshmi-kabilan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mahalakshmi-kabilan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
