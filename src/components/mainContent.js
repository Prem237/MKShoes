import React from 'react';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom';
import { addToCart } from './actions/cartActions';
 class MainContent extends React.Component{
  

    handleClick = (id)=>{
        this.props.addToCart(id); 
    } 
    render()
    {
    let listitems =this.props.items.map((item)=>{
    return(
    <div className="card" key={item.id}>
        
        <div className="card.img">
            <img className="maincontentimg"src={item.thumb}/>
        </div>
        <div className="card_header">
            <h2>{item.product_name}</h2>
            <p>{item.description}</p>
            <p className="price"><span>{item.currency}</span>{item.price}</p>
          <div><button onClick={()=>{this.handleClick(item.id)}} className="btn">Add to cart</button></div> 
          <div><NavLink to="/Mycart" className="btn">Mycart</NavLink></div>
        </div>
    </div>
    )
    })
    return(
        <div>  <img src="/images/Frontpage.jpg" className="front"></img>
        <img src="/images/Front-1.jpg" className="front1"></img>
        <div className="main-content">
            {listitems}
        </div>
        </div>
    )
    }
}
    const mapStateToProps = (state)=>{
        return {
          items: state.items
        }
      }
      const mapDispatchToProps= (dispatch)=>{
    
        return{
            addToCart: (id)=>{dispatch(addToCart(id))}
        }
    
   
}

export default connect(mapStateToProps,mapDispatchToProps)( MainContent)