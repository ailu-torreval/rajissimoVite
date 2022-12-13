import React from 'react'

function BasketProdCard(props) {


  return (
    <>
    <div>
      <p className="font-header capitalize"> <span className="text-darkyellow font-body" >{props.prod.qty}x</span> {props.prod.prod} </p>
      <div>
        {props.prod.preferences && props.prod.preferences.map((pref, index) =>  Array.isArray(pref.selection) ? <p key={index}>  <span className="text-darkyellow"> {pref.option}:  </span>{pref.selection.map((sel, index)=> index < pref.selection.length -1 ? <span key={index}>{sel}, </span> : <span key={index}>{sel}. </span>)}</p> : <p key={index}> <span className="text-darkyellow">{pref.option}:  </span>  {pref.selection} </p> )}
      </div>
        <button onClick={props.action}>Remove</button>
          <p>{props.prod.totalProdAmount} kr. </p>
    </div>
    {props.checkout &&  <img src={props.prod.imgSrc} alt="" /> }   
    </>
  )
}

export default BasketProdCard