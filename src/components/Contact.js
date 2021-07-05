import React, { useState} from 'react';
import {Link, Switch} from 'react-router-dom';
import './Contact.css';


export const Home = () => {
    const [toggleState, setToggleState] = useState(4)

    const toggle = (index) =>
    {
        setToggleState(index);
    }
        return (
            <>
            <div className="sidebar">
                <ul>
                    <li><Link onClick={() => toggle(1)}  className={toggleState === 1 ? "active" : ""} to="/">Dashboard</Link></li>
                    <li><Link onClick={() => toggle(2)}  className={toggleState === 2 ? "active" : ""} to="/about">About</Link></li>
                    <li><Link onClick={() => toggle(3)}  className={toggleState === 3 ? "active" : ""} to="/services">Services</Link></li>
                    <li><Link onClick={() => toggle(4)}  className={toggleState === 4 ? "active" : ""} to="/contact">Contact</Link></li> 
                </ul>
       
            </div>
            <section>
                <form>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" value="" placeholder="enter email" />
                    <label for="msg">Message</label>
                    <textarea rows="10" id="msg" cols="8"  placeholder="your Message"></textarea> 
                    <input type="submit" value="submit" />
                </form>  
            </section>
            </>
        )
}

export default Home;    
