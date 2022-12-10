import React from 'react'
import SectionContent from '../components/SectionContent'
import AboutUsImg from '../components/AboutUsImg'
function AboutUsSection(props) {
  return (
    <section className={props.class}>
        <SectionContent {...props}/>
        <AboutUsImg img={props.img} />
    </section>
  )
}

export default AboutUsSection