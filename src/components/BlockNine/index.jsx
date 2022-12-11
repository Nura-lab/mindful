import React from "react";
import "./Nine.css"
import nine_foto from "../Images/nine_foto.jpg"
import circle from '../Images/circle.png'
import Pci from '../Images/Pci.png'

export const BlockNine = () => {
   return <div className="BlockNine">
      <hr className="large"/>
    <div className="container block_nine" >
       <div className="footer_nav">
           <ul>
            <li className="firstChild">Learn</li>
            <li className="lastChild">Help center</li>
            <li className="lastChild">Join ZEN team</li>
            <li className="lastChild">Privacy Policy</li>
            <li className="lastChild">Cookies</li>
            <li className="lastChild">Terms of use</li>
           </ul>
           <ul>
            <li className="firstChild">Discover</li>
            <li className="lastChild">For developers</li>
            <li className="lastChild">Apple pay</li>
            <li className="lastChild">Google pay</li>
           </ul>
           <ul>
            <li className="firstChild">Offer</li>
            <li className="lastChild">Business</li>
            <li className="lastChild">Personal</li>
           </ul>
           <ul>
            <li className="firstChild">Language</li>
            <li className="lastChild">English</li>
            <li className="lastChild">Polish</li>
           </ul>
           <ul>
            <li className="firstChild">Follow us</li>
            <li ><img className="ninePhoto" src={nine_foto} /></li>
           </ul>
           <ul>
            <li className="firstChild">Contact</li>
            <li className="lastChild">hello@zen.com</li>
           </ul>
       </div>
       <div>
         <img className="footerPhoto" src={circle}/>         
         <div className="firstFooter">
            <p className = "footer_text" >ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries. <br/>Registration number of the company 304749651, VAT ID LT100011714916. License of electronic money institutions number LB000457. Share capital <br/> 2.185.000,00 EUR. Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania. Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.</p>
            <img className="photoFooter" src={Pci}/>  
         </div>
       </div>
       
    </div>
   </div>
}