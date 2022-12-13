import React from 'react'

function BasketProdCard(props) {


  return (
    <>
    <div className="mb-2">
      <p className="font-header text-blue tracking-wider text-lg capitalize"> <span className="text-darkyellow font-body" >{props.prod.qty}x</span> {props.prod.prod} </p>
      <div>
        {props.prod.preferences && props.prod.preferences.map((pref, index) =>  Array.isArray(pref.selection) ? <p className="capitalize leading-5" key={index}>  <span className="text-darkyellow"> {pref.option}:  </span>{pref.selection.map((sel, index)=> index < pref.selection.length -1 ? <span key={index}>{sel}, </span> : <span key={index}>{sel}. </span>)}</p> : <p className="capitalize leading-5" key={index}> <span className="text-darkyellow">{pref.option}:  </span>  {pref.selection} </p> )}
      </div>
        <div className="flex justify-between">
        <button className="text-red-500" onClick={props.action}>Remove</button>
          <p className="font-semibold text-left">{props.prod.totalProdAmount} kr. </p>
        </div>
    </div>
    {props.checkout &&  <img src={props.prod.imgSrc} alt="" /> }   
    </>
  )
}

export default BasketProdCard