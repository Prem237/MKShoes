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
            Last Name <input type="text" required className="buycart-input"></input><br></br><br></br>
            Phone Number <input type="number" required className="buycart-input"></input>&nbsp;
            Email <input type="email" required className="buycart-input"></input><br></br><br></br>
           Street Address <input type="text" required className="buycart-input"></input>&nbsp;
           Street Address Line 2 <input type="text" required className="buycart-input"></input><br></br><br></br>
           City <input type="text" required className="buycart-input"></input>&nbsp;
           Postal/Zip Code <input type="text" required className="buycart-input"></input><br></br><br></br>
           <h1 className="Buycard-head1">Credit Card</h1><br></br>
            Name on Card <input type="text" required className="buycart-input"></input>&nbsp;
            Credit Card Number <input type="text" required className="buycart-input"></input><br></br><br></br>
            Security Code <input type="text" required className="buycart-input"></input>&nbsp;
            Expiration Date <input type="text" required className="buycart-input"></input><br></br><br></br>
            Postal Code<input type="number" required className="buycart-input"></input><br></br>
            <input type="submit"  className="submit"></input>
            </table>
            </form>
    </div>
}
export default cart;