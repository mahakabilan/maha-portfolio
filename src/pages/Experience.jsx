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
      <div>
        <h3 className="text-xl font-bold">Chief Editor and Lead Developer – Digisparks Infotech</h3>
        <p className="italic">Aug 2012 – Dec 2014, Bengaluru, India</p>
        <ul className="list-disc ml-6">
          <li>Developed the Wordpress website theme and interactive demos.</li>
          <li>Designed & developed demo.techglimpse.com & apps.techglimpse.com & petshack.ae.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold">Applications Developer – iNautix Technologies</h3>
        <p className="italic">June 2010 – July 2012, Chennai, India</p>
        <ul className="list-disc ml-6">
          <li>Developed and supported a legacy enterprise billing system for solutions, ensuring seamless operation and compliance with industry standards.</li>
          <li>Played a key role in implementing secure coding platforms for BNY Mellon, contributing to enhanced data protection and cybersecurity measures.</li>
        </ul>
      </div>
      </article>
    </section>
  );
}
