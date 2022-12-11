import React from 'react'

function BasketProdCard(prod) {
  return (
    <div>
      <h4> <span className="text-darkyellow font-body" >{prod.qty}x</span> {prod.prod} </h4>
      <div>
        {prod.preferences.map((pref, index) =>  pref.selection.length > 1 ? <div>it has more than one <p>{pref.option}: {pref.selection}</p> </div> : <p>{pref.option}: {pref.selection}</p> )}
      </div>
    </div>
  )
}

export default BasketProdCard