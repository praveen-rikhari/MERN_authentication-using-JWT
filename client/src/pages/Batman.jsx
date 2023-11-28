import React from 'react';
import BruceWayne from "../assets/bruce.jpg";
import './Home.css';

const Batman = () => {
    return (
        <div className="home">
            <div className="home-image">
                <img src={BruceWayne} alt="" />
            </div>
            <div className="home-content">
                <h1>Bruce Wayne is Batman 🦇</h1>
                <p>Yes, this young famous billionare
                    <br />
                    is the Knight of Gotham.
                </p>
            </div>
        </div>
    );
}

export default Batman;
