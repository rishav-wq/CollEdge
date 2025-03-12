import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo atque tempora asperiores, culpa dicta deserunt natus, unde at dolore porro corrupti labore sed. Fuga modi totam nulla quas labore?
        Similique pariatur placeat exercitationem temporibus animi sunt tenetur distinctio reiciendis atque, nesciunt minus? Repudiandae earum aut quidem, exercitationem obcaecati necessitatibus maiores molestias quas nostrum voluptatem autem iure odio. Eos, ratione!
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
