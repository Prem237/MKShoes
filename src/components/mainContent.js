import React from 'react'
import product_card from "../data/product_data";

const MainContent=()=>{
    console.log(product_card);
    const listitems =product_card.map((item)=>
    <div className="card" key={item.id}>

        <div className="card.img">
            <img className="maincontentimg"src={item.thumb}/>
        </div>
        <div className="card_header">
            <h2>{item.product_name}</h2>
            <p>{item.description}</p>
            <p className="price"><span>{item.currency}</span>{item.price}</p>
           <div className="btn">Buy</div>
        </div>
    </div>
    );
    return(
        <div><img src="/images/Middle.jpg" className="Middle"></img>
        <div className="main-content">
            {listitems}
        </div>
        </div>
    )
}
export default MainContent;
