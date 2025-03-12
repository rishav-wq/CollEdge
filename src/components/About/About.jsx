import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing tomorrow Leaders</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elnatur quo ad inventore ratione doloribus distinectetur dolores quasi suscipit sunt aspernatur consequuntur corrupti asperiores unde. Eaque vitae aut nostrum sit saepe dolorum. Dolorem obcaecati accusantium molestias?
        </p>
        <p>eiciendis, voluptates sit ipsum aspernatur quo ad inventore ratsectetur dolores quasi suscipit sunt aspernatur consequuntur corrupti asperiores unde. Eaque vitae aut nostrum sit saepe dolorum. Dolorem obcaecati accusantium molestias?
        </p>
        <p> consectetur dolores quasi suscipit sunt aspernatur consequuntur corrupti asperiores unde. Eaque vitae aut nostrum sit saepe dolorum. Dolorem obcaecati accusantium molestias?
        </p> 
      </div>
    </div>
  )
}

export default About
