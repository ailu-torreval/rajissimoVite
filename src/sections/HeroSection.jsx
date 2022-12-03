import React from 'react'
import HeroContent from '../components/HeroContent'
import HeroImg from '../components/HeroImg'

function HeroSection() {
  return (
    <section className="flex flex-col gap-4 justify-center h-[90vh] md:flex-row mx-2 mt-2">
        <HeroImg />
        <HeroContent />
    </section>
  )
}

export default HeroSection