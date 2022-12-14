import React from 'react'
import SectionContent from '../components/SectionContent'
import AboutUsImg from '../components/AboutUsImg';

function AboutUsSection(props) {
  return (
    <section className={props.class}>
      <div className="relative">
        <img src={img1} alt="blueline" className="absolute -z-10 w-full top-60 bottom-0"></img>
        <img src={img2} alt="orangeline" className="absolute -z-10 w-full top-60 bottom-0"></img>
      </div>
        <SectionContent {...props}/>
        <AboutUsImg img={props.img} />
    </section>
  )
}

export default AboutUsSection