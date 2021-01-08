import React from 'react'
import './Contact.css';
const Contact=()=>
{
     const hand=()=>
     {
          alert('Your feedback is submitted');
     }
     return <div className="contact" >
          <form onSubmit={hand}>
          <table>
               <tr>Name:</tr><tr><td><input type="text" className="name"  required placeholder="   Your name "></input></td></tr>
          <br></br>
          <tr>Email id:</tr><tr><td><input type="email" className="email" required placeholder="   Your email"></input></td></tr>
          <br></br>
          <tr>Feedback:</tr><tr><td><textarea className="feed" rows="5" cols="50" required placeholder=" Enter your Comments!!"></textarea></td></tr>
          <input type="submit" className="but1"></input>
          <h3 className="Contact-list">Contact us</h3>
          <tr><td>Mkshoes@gmail.com</td></tr>
          <tr><td>7708743663</td></tr>
          <br></br>
          </table>
          </form>
          
     </div>
    
}
export default Contact;