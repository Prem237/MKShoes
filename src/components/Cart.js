import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
class Cart extends Component{

    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                <li className="card" key={item.id}>
        <div className="card.img">
            <img className="maincontentimg"src={item.thumb}/>
        </div>
        <div className="card_header">
            <h2>{item.product_name}</h2>
            <p>{item.description}</p>
            <p className="price"><span>{item.currency}</span>{item.price}</p></div>
            <NavLink to="/Buycart" className="btn">Buy</NavLink>
              </li>                      
                    )
                })
            ):

             (<div className="nothing">
                <h1 >Nothing.</h1>
                </div>
             )
       return(
        <div className="main-content1">
            <div className="main-content">
        {addedItems}
        </div>
        </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)