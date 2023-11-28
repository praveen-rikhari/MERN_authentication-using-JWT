import React from 'react';
import BatmanImage from "../assets/batman.jpg";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-image">
        <img src={BatmanImage} alt="batman" />
      </div>
      <div className="home-content">
        <h1>Who is Batman 🦇??</h1>
        <p>I know the secret of batman.
          <br />
          If you also wanna know who is the mask vigilante of Gotham.
          <br />
          Register & login to unmask the Mr. Knight.
          </p>
      </div>
    </div>
  );
}

export default Home;
