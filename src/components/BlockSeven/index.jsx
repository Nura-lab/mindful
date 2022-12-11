import React from "react";
import "./Seven.css";
import seven_foto from "../Images/seven_foto.jpg";

export const BlockSeven = () => {
   return <div className="BlockSeven">
     <div className="container block_seven">
                <div className="seven_title">
                    <h1>One app, one account,<br/> many currencies</h1>
                    <p className="seven_text_one">ZEN Mastercard® was made for spending money. ZEN account is here to store and manage it peacefully, from the inside of your pocket.</p>
                    <p className="seven_text_two" >You can use it just like a regular account, as it has its own IBAN and works just the way any bank account would — but better. Store up to 30 currencies and transfer them easily in many ways.</p>
                </div>
                <div>
                    <img className="seven_foto" src={seven_foto} />
                </div>
            </div>
   </div>
}