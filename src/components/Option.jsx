import React from 'react'
import dummyImg from '../assets/ex-waffle.svg'

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
                {option.selectOpt.map((opt) => option.isRadio ? <p> radio{opt.name}</p> : <p>not radio {opt.name}</p> )}

            </div>

        </div>
    </div>
  )
}

export default Option