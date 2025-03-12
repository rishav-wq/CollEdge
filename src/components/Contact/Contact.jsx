import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptates accusantium hic error cupiditate fugit provident quae ex nesciunt! Eos voluptatum veritatis sapiente ut, quis vel dolorum corporis fugit ipsa!
        Voluptates repudiandae, magnam non alias molestias laudantium ipsum veritatis id ipsa quibusdam quasi odio, veniam provident inventore, itaque necessitatibus molestiae possimus fugiat nesciunt commodi nostrum? Quisquam eveniet suscipit fugit delectus.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
            <li><img src={phone_icon} alt="" />+1 234-567-9807</li>
            <li><img src={location_icon} alt="" />77 Howrah Ave, Londen <br />MA Contour Boston States</li>
        </ul>
      </div>
      <div className="contact-col">
        
      </div>
    </div>
  )
}

export default Contact
