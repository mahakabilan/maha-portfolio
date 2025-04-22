import React from 'react';

function Home() {
  return (
    <section id="home" className="h-screen snap-start flex items-center justify-center">
       <article className='max-w-2xl flex flex-col gap-4'>
      <h2 className="text-4xl font-bold">Mahalakshmi Kabilan</h2>
      <h3 className="text-2xl">Lead Developer | Bengaluru, India</h3>
      <p className="text-lg max-w-2xl">
        Dedicated and results-driven Lead Developer with 14+ years of experience in developing and implementing high-performing web solutions,
        managing project lifecycles, and leading cross-functional teams.
      </p>
      <div className="space-x-4">
        <a className="text-blue-500 underline" href="mailto:ashwini.kabi@gmail.com">ashwini.kabi@gmail.com</a>
        <a className="text-blue-500 underline" href="https://www.linkedin.com/in/mahalakshmi-kabilan/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      </article>
    </section>
  );
}

export default Home;
