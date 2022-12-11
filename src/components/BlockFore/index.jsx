import React from "react";
import frame_png from "../Images/frame.png"

// import four_one from "../Images/four_one.jpg"
// import four_two from "../Images/four_two.jpg"
// import four_three from "../Images/four_three.jpg"
// import four_four from "../Images/four_four.jpg"
// import four_five from "../Images/four_five.jpg"
// import four_six from "../Images/four_six.jpg"
// import four_seven from "../Images/four_seven.jpg"
// import four_eight from "../Images/four_eight.jpg"

import "./Fore.css";

export const BlockFore = () => {
   return <div>
    <div className="container BlockFore">
       <div className="fore_text" >
         <h1>and cashback!</h1>
         <p style = {{width: 584}} >It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it. We gave it a thought and made cashback way more friendly. Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase. It's like you haggled some cash, despite you didn't have to. Just don't forget to use in-app cashback link.</p>
         {/* <button className="fore_button">Show more partners</button> */}
       </div>
       <div className="four_fotos">
         <img src={frame_png} />
         {/* <div className="four_fotos_first">
            <img id="four_one" alt="" src={four_one} />
            <img className="four_two" alt="" src={four_two} />
            <img className="four_three" alt="" src={four_three} />
            <img className="four_four" alt="" src={four_four} />
         </div>
         <div className="four_fotos_second">
            <img className="four_five" alt="" src={four_five} />
            <img className="four_six" alt="" src={four_six} />
            <img className="four_seven" alt="" src={four_seven} />
            <img className="four_eight" alt="" src={four_eight} />
         </div> */}
       </div>
    </div>
   </div>
}