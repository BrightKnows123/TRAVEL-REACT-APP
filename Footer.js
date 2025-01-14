import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="top">
               <h3>VACATION</h3>
               <div className="social">
         <FaFacebook className='icon'/>
         <FaInstagram className='icon'/>
         <FaTwitter className='icon'/>
         <FaYoutube className='icon'/>
               </div>
            </div>
            <div className="bottom">
               <div className="left">
                <ul>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>News</li>
                    <li>Adverts</li>
                </ul>
               </div>
               <div className="right">
                <ul>
                    <li>Contact</li>
                    <li>Terms</li>
                    <li>Policy</li>
                    <li>Privacy</li>
                    <li>Pricing</li>
                    
                </ul>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer