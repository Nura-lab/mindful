import React from "react";
import "./Five.css"
import five_foto from "../Images/five_foto.jpg"

export const BlockFive = () => {
   return <div className="container BlockFive">
     <div className="block_five">
                <div className="five_title">
                    <h1>ZEN shopping Mastercard</h1>
                    <p className="five_text">You shouldn’t be bound to use one card at a time, especially when it has so many benefits! With ZEN, you can manage your shopping and finances with both physical and virtual cards. It’s convenient, streamlined, and works like a charm. You can have a shopping card, a subscription card, and whatever other cards that make sense to you.</p>
                </div>
                <div className="five_foto">
                    <img className="phone" src={five_foto} />
                </div>
            </div>
   </div>
}