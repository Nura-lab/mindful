import React from "react";
import "./Six.css"
import six_foto from "../Images/six_foto.jpg"

export const BlockSix = () => {
   return <div className="BlockSix">
    <div className="container block_six">
                <div className="six_foto">
                    <img className="phone" src={six_foto} />
                </div>
                <div className="six_title">
                    <h1>Shopping with no fees</h1>
                    <p className="six_text_one">Online shopping is flawed with all kind of fees. Currency exchange fees, processing fees and even fees for having multiple fees. Getting rid of them became our hobby. Same goes for ATM withdrawal fees.</p>
                    <p className="six_text_two" >Enjoy your money globally. Every uncut part of it. Keep reading. ZEN goes beyond shopping with a fully functional account.</p>
                </div>
            </div>
   </div>
}