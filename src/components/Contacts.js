import React from 'react'
import './Contact.css';
const Contact=()=>
{
     return <div className="contact" >
          <table>
               <tr>Name:</tr><tr><td><input type="text" className="name"  placeholder="   your name "></input></td></tr>
          <br></br>
          <tr>Email id:</tr><tr><td><input type="email" className="email"  placeholder="   your email"></input></td></tr>
          <br></br>
          <tr>Feedback:</tr><tr><td><textarea className="feed" rows="5" cols="50" placeholder=" Enter your Comments!!"></textarea></td></tr>
          <button className="but1">Submit</button>
          <h3 className="Contact-list">Contact us</h3>
          <tr><td>Mkshoes@gmail.com</td></tr>
          <tr><td>7708743663</td></tr>
          <br></br>
          </table>
          
          
     </div>
    
}
export default Contact;