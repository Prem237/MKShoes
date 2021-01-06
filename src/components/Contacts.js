import React from 'react'
import './Contact.css';
const Contact=()=>
{
     return <div className="contact" >
          <table>
               <tr>Name:</tr><tr><td><input type="text" className="name" ></input></td></tr>
          <br></br>
          <tr>Email id:</tr><tr><td><input type="email" className="email" ></input></td></tr>
          <br></br>
          <tr>Feedback:</tr><tr><td><textarea className="feed" rows="5" cols="50" placeholder="Enter your Comments!!"></textarea></td></tr>
          <button >Submit</button>
          <h3>Contact us</h3>
          <tr><td>Mkshoes@gmail.com</td></tr>
          <tr><td>7708743663</td></tr>
          <br></br>
          </table>
          
          
     </div>
    
}
export default Contact;