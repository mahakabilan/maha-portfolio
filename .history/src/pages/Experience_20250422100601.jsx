import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="h-screen snap-start flex items-center justify-center">
       <article className='max-w-2xl flex flex-col gap-4'>
      <h2 className="text-3xl font-semibold">Professional Experience</h2>
      <div>
        <h3 className="text-xl font-bold">Lead Developer – Epsilon</h3>
        <p className="italic">Mar 2020 – Present, Bengaluru, India</p>
        <ul className="list-disc ml-6">
          <li>Led 15+ digital campaigns with AI-driven solutions, improving performance and engagement.</li>
          <li>Guided 20+ developers, boosting productivity through mentoring and technical training.</li>
          <li>Redesigned 45+ websites and optimized Git workflows, reducing code errors by 30%.</li>
          <li>Implemented atomic design systems and low-code tool enhancements with AI integration.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold">Senior Developer – Education First</h3>
        <p className="italic">Dec 2014 – Mar 2020, Bengaluru, India</p>
        <ul className="list-disc ml-6">
          <li>Redesigned EF.com architecture to boost speed and UX; trained junior developers.</li>
          <li>Created platform-agnostic JS payment library and performance-optimized routing.</li>
          <li>Established an atomic CSS system and collaborated with teams using Storybook.</li>
        </ul>
      </div>
      </article>
    </section>
  );
}
