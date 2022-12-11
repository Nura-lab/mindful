import React from "react";
import "./Three.css"
import three_phone from "../Images/three_phone.jpg";

export const BlockThree = () => {
   return <div>
    <div className="BlockThree">
        <div className="block_three">
                <div className="three_text">
                    <h1>ZEN Care</h1>
                    <p>Shopping online is usually a delightful experience. Until it's not.</p>
                    <p>Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.</p>
                    <p>But, here comes ZEN Care: a free, built-in shopping protection. You can rest assured we’ll handle all of the transaction-related problems faster and with higher success rates. Where lone consumers can be ignored or dumped by dishonest merchants, ZEN doesn't get discouraged. ZEN persists.</p>
                </div>
                <div className="three_foto">
                    <img className="phone" src={three_phone} />
                </div>
            </div>
        </div>
   </div>
}