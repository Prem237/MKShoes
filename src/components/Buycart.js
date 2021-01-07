import React from 'react'

const cart=()=>
{
    const handle=()=>
    {
        alert('your Details are submitted');
    }
    return <div className="edit-Buycart">
        <div><h1 className="Buycard-head">Place your Order here</h1></div>
        <br></br>
        <form onSubmit={handle}>
        <table className="Delevery"> 
            First Name <input type="text" required className="buycart-input"></input>&nbsp;
            Last Name <input type="text" className="buycart-input"></input><br></br><br></br>
            Phone Number <input type="number" className="buycart-input"></input>&nbsp;
            Email <input type="email" className="buycart-input"></input><br></br><br></br>
           Street Address <input type="text" className="buycart-input"></input>&nbsp;
           Street Address Line 2 <input type="text" className="buycart-input"></input><br></br><br></br>
           City <input type="text" className="buycart-input"></input>&nbsp;
           Postal/Zip Code <input type="text" className="buycart-input"></input><br></br>
            <input type="submit" className="submit"></input>
            </table>
            </form>
    </div>
}
export default cart;