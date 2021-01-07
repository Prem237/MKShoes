import React from 'react';
import product_card from "../data/product_data";
import history from './history';
 const MainContent=()=>{
  
    const listitems =product_card.map((item)=>
    <div className="card" key={item.id}>
        
        <div className="card.img">
            <img className="maincontentimg"src={item.thumb}/>
        </div>
        <div className="card_header">
            <h2>{item.product_name}</h2>
            <p>{item.description}</p>
            <p className="price"><span>{item.currency}</span>{item.price}</p>
           <div className="btn"><button  className="Redirectpage" onClick={()=>history.push("/Buycart")}> buy</button> </div>
        </div>
    </div>
    );
    return(
        <div>  <img src="/images/Frontpage.jpg" className="front"></img>
        <img src="/images/Front-1.jpg" className="front1"></img>
        <div className="main-content">
            {listitems}
        </div>
        </div>
    )
}

export default MainContent;