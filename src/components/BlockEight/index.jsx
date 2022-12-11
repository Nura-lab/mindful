import React from "react";
import "./Eight.css";
import eight_foto from "../Images/eight_foto.jpg";
import app_store from "../Images/app_store.jpg";
import google_play from "../Images/google_play.png";

export const BlockEight = () => {
   return <div className="BlockEight">
     <div className="container block_eight">
                <div>
                    <img className="eight_foto" src={eight_foto} />
                </div>
                <div className="eight_title">
                    <h1>Quick and easy <br/>account creation</h1>
                    <p className="eight_text_one">Now, you might be thinking that it’s just like any other account creation… Long, tiresome and full of endless blanks to fill in. Well, it’s not.</p>
                    <p className="eight_text_two" >We have designed the whole process to make it the simplest and the shortest one ever conceived for a personal account. Download the app and see for yourself!</p>
                    <img className="app_store" src={app_store} />
                    <img className="app_store" src={google_play} />
                </div>
            </div>
   </div>
}