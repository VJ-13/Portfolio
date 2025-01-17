'use client';
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import ContactMe from '../../components/ContactMe';
import Certification from '../../components/Certification';

export default function Home() {

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#00B8EA]/80'>


      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}

      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Certification */}
      <section id='certification' className='snap-start'>
        <Certification />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

    </div>
  )
}
