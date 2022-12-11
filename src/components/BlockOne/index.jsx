import React from "react";
import "./one.css"
import one from "../Images/nav_one.jpg";
import two from "../Images/nav_two.jpg";
import block_one from "../Images/block_one.jpg";
import app_store from "../Images/app_store.jpg";
import google_play from "../Images/google_play.png";
import play_pause from "../Images/play_pause.jpg"

export const BlockOne = () => {
   return <div>
    <div className="container BlockOne">
            <div className="nav">
                <ul className="nav_one">
                    <li className="imgs">
                        <img className="two_img" src={one} />
                        <img className="one_img" src={two} />
                    </li>
                    <li className="personal">Personal</li>
                    <li className="personal">Business</li>
                </ul>
                <ul className="nav_two">
                    <li className="personal">Zenefits</li>
                    <li className="personal">Features</li>
                    <li className="personal">Pricing</li>
                    <li className="personal"><button className="nav_button" >Get app</button></li>
                </ul>
            </div>
        <div className="block_one">
            <div className="one_text">
                <div style={{display: "flex",alignItems: "center"}} >
                    <img style={{width: 27, height: 27,marginRight: 5}} src={play_pause} />
                    <p>In every beginning, there is chaos.</p>
                </div>
                 <h1>Peaceful shopping.<br/>Mindful money.</h1>
                 <p>See how we can help with making your shopping<br/> experience and money management more ZEN.</p>
                 <img className="app_store" src={app_store} /><br/>
                 <img className="app_store" src={google_play} />
            </div>
            <div className="one_foto">
                <img className="phone" src={block_one} />
            </div>
        </div>
    </div>
   </div>
};