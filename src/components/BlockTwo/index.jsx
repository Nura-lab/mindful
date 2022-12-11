import React from "react";
import "./Two.css"
import two_phone from "../Images/two_phone.jpg"

export const BlockTwo = () => {
   return <div>
        <div className="container block_two">
            <div className="two_foto">
                <img style={{width: 585, height: 657,}} src={two_phone}/>
            </div>
            <div className="two_text">
                <h1>1-year warranty boost</h1>
                <p>
                    ZEN cards have a very neat feature that will help you<br/>
                    whenever your electronic devices start failing after the <br/>
                    standard warranty ends, which is pretty common.
                </p>
                <p>
                    When you buy any electronics with your ZEN shopping<br/>
                    Mastercard®, their warranty gets extended by one <br/>
                    year. How does it work? It simply does. Automatically.
                </p>
            </div>
        </div>
    </div>
}