import React, { useRef } from 'react'
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Robert Brown</h3>
                            <span>Apple, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ad nisi, id nulla veniam illo accusantium accusamus inventore dicta nihil, dolore, voluptatum unde similique at molestiae corrupti. Ut, fuga quisquam.
                    Similique, in, cum quas, optio numquam nostrum eos officia veniam quasi distinctio quos ad ea vitae? Velit blanditiis adipisci, sed quibusdam sapiente dolores obcaecati praesentium, voluptatum, repellendus magnam at saepe!
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Maitilee Druce</h3>
                            <span>Google, UK</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ad nisi, id nulla veniam illo accusantium accusamus inventore dicta nihil, dolore, voluptatum unde similique at molestiae corrupti. Ut, fuga quisquam.
                    Similique, in, cum quas, optio numquam nostrum eos officia veniam quasi distinctio quos ad ea vitae? Velit blanditiis adipisci, sed quibusdam sapiente dolores obcaecati praesentium, voluptatum, repellendus magnam at saepe!
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Rishav Raj</h3>
                            <span>Google, Bengaluru</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ad nisi, id nulla veniam illo accusantium accusamus inventore dicta nihil, dolore, voluptatum unde similique at molestiae corrupti. Ut, fuga quisquam.
                    Similique, in, cum quas, optio numquam nostrum eos officia veniam quasi distinctio quos ad ea vitae? Velit blanditiis adipisci, sed quibusdam sapiente dolores obcaecati praesentium, voluptatum, repellendus magnam at saepe!
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Kamini kaushal</h3>
                            <span>Amazon, Hyderabad</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ad nisi, id nulla veniam illo accusantium accusamus inventore dicta nihil, dolore, voluptatum unde similique at molestiae corrupti. Ut, fuga quisquam.
                    Similique, in, cum quas, optio numquam nostrum eos officia veniam quasi distinctio quos ad ea vitae? Velit blanditiis adipisci, sed quibusdam sapiente dolores obcaecati praesentium, voluptatum, repellendus magnam at saepe!
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
