import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="h-screen snap-start flex items-center justify-center">
       <article className='max-w-2xl flex flex-col gap-4'>
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p>If you’d like to get in touch, feel free to email me or connect on LinkedIn:</p>
      <ul>
        <li><strong>Email:</strong> <a className="text-blue-500" href="mailto:ashwini.kabi@gmail.com">ashwini.kabi@gmail.com</a></li>
        <li><strong>LinkedIn:</strong> <a className="text-blue-500" href="https://www.linkedin.com/in/mahalakshmi-kabilan/" target="_blank" rel="noreferrer">linkedin.com/in/mahalakshmi-kabilan</a></li>
      </ul>
      </article>
    </section>
  );
}
