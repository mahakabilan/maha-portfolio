import React from 'react';

export default function Skills() {
  const skills = [
    'JavaScript', 'React', 'Vue', 'HTML', 'CSS', 'Tailwind', 'Bootstrap',
    'jQuery', 'Material-UI', 'Storybook', 'PatternLab', 'GrapesJS', 'CraftJS',
    'Jest', 'Cypress', 'Playwright', 'BackstopJS', 'Mocha', 'Chai',
    'Adobe XD', 'InVision', 'Photoshop', 'Figma', 'Sketch',
    'Sitecore', 'WordPress', 'Crownpeak', 'Contentful',
    'Git', 'Docker', 'Jira', 'Jenkins', 'AWS', 'Azure',
    'CI/CD Pipelines', 'Google Analytics', 'Lighthouse', 'SEO Optimization',
    'ChatGPT', 'ClaudeAI', 'Gemini AI', 'Prompt Engineering'
  ];

  return (
    <section id="skills" className="h-screen snap-start flex items-center justify-center">
      <h2 className="text-3xl font-semibold mb-4">Technical Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
