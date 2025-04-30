import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa'; 

function SkillSearch() {
  const [skills, setSkills] = useState({});
  const [mySkills, setMySkills] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [expertiseLevel, setExpertiseLevel] = useState(0); // Expertise level for the selected skill

  useEffect(() => {
    // Fetch all skills (frontend and soft skills)
    fetch('/data/allFESkills.json')
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch JSON");
        return res.json();
      })
      .then(data => {
        const allSkills = Object.values(data).flat(); 
        setSkills(allSkills.map(skill => skill.name)); 
      })
      .catch(error => console.error("Fetch error:", error));

    fetch('/data/mySkills.json')
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch JSON");
        return res.json();
      })
      .then(data => {
        setMySkills(data); 
      })
      .catch(error => console.error("Fetch error:", error));

  }, []); // Only run on mount

  function handleChange(e) {
    const value = e.target.value;
    setInputValue(value);

    // Filter skills based on input
    const filtered = skills.filter(skill =>
      skill.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSkills(filtered);
  }

  function handleSkillSelect(skill) {
    // When a skill is selected, update the input value
    setInputValue(skill);

    // Check if the selected skill matches the user's skills
    doesItMatchMySkill(skill);

    // Clear the filtered skills after selection
    setFilteredSkills([]);
  }

  function doesItMatchMySkill(skill) {
    // Find the matching skill in mySkills
    const matchedSkill = mySkills[skill];

    if (matchedSkill) {
      console.log(`"${skill}" matches a skill you have!`);
      setSelectedSkill(skill);
      setExpertiseLevel(matchedSkill.expertise); // Set the expertise level
    } else {
      console.log(`"${skill}" doesn't match any of your skills.`);
      setSelectedSkill(skill);
      setExpertiseLevel(0); // Reset expertise level if no match
    }
  }

  return (
    <div className="container mx-auto p-4 skillSearchInput">
      <div className="flex flex-col">
        <input
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search skills..."
          value={inputValue}
          onChange={handleChange}
        />

        {inputValue && filteredSkills.length > 0 && (
          <ul className="border border-t-0 border-gray-300 rounded-b-md bg-white mt-1 shadow-md max-h-60 overflow-y-auto">
            {filteredSkills.map((skill, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSkillSelect(skill)}
              >
                {skill}
              </li>
            ))}
          </ul>
        )}

        {/* After skill selection */}
        {selectedSkill && (
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              {/* Tick Icon */}
              {expertiseLevel > 0 && <FaCheck className="text-green-500" />}
              <span className="font-medium">{selectedSkill}</span>
            </div>

            {/* Progress Bar */}
            {expertiseLevel > 0 && (
              <div className="mt-2">
                <span className="text-gray-500">Expertise Level:</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${expertiseLevel}%`,
                      background: expertiseLevel === 100
                        ? 'linear-gradient(to right, #4caf50, #81c784)'
                        : 'linear-gradient(to right, #ffeb3b, #ff9800)', // Color depending on expertise
                    }}
                  ></div>
                </div>
              </div>
           
            )}
            {/* <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${expertiseLevel}%`,
                  background: expertiseLevel === 100
                    ? 'linear-gradient(to right, #4caf50, #81c784)'
                    : 'linear-gradient(to right, #ffeb3b, #ff9800)', // Color depending on expertise
                }}
              ></div>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillSearch;
