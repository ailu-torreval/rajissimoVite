import React from 'react'

function ProdPage(props) {

    function closePage() {
        props.setShowProd(false);
    }


  return (
    <div onClick={closePage}>
        <div>
            <h1>this is a pop up for product nr. {props.prodId} </h1>
        </div>
    </div>
  )
}

export default ProdPage