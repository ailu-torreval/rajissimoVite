import React from 'react'
import dummyImg from '../assets/ex-waffle.svg'
import OptionInput from './OptionInput'

function Option(option) {
  return (
    <div>
        <h4>{option.optName}</h4>
        { option.optDesc && <p>{option.optDesc}</p>}
        { option.optSubDesc && <p>{option.optSubDesc}</p>}
        <div className="flex">
            {/* { option.optImg && <img src={option.optImg} alt="product illustation" />} */}
            <img src={dummyImg} alt="product illustation" />
            <div>
                {option.selectOpt.map((opt) => option.isRadio ? <OptionInput radio="true" name={option.optName} opt={opt} /> : <OptionInput radio="false" opt={opt} /> )}

            </div>

        </div>
    </div>
  )
}

export default Option