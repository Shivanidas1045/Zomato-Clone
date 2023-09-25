import React from 'react';
import "./Footer.css";
import {AiFillLinkedin} from "react-icons/ai";
import {FaInstagramSquare} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
        <>
<div className='footer1'>
    <div><img src="https://i.postimg.cc/Jh4G9KpS/logo1.png" alt="logo" /></div>
    <div>
        {/* first select option */}
        <select name="" id=""><option value="india">India</option>
        <option value="india">India</option>
        <option value="australia">Australia</option>
        <option value="japan">Japan</option></select>
        {/* second select option */}
        <select name="" id="">
            <option value="eng">English</option>
            <option value="hindi">Hindi</option>
            <option value="sanskrit">Sanskrit</option>
        </select>
    </div>
</div>
{/* main footer */}
<div className='footer2'>
    <div>
    <h3>ABOUT ZOMATO</h3><br />
<p>Who We Are</p>
<p>Blog</p>
<p>Work With Us</p>
<p>Investor Relations</p>
<p>Report Fraud</p>
<p>Contact Us</p>
    </div>
    <div>
    <h3>ZOMAVERSE</h3><br />
<p>Zomato</p>
<p>Blinkit</p>
<p>Feeding India</p>
<p>Hyperpure</p>
<p>Zomaland</p>
    </div>
    <div>
    <h3>FOR RESTAURANTS</h3><br />
<p>Partner With Us</p>
<p>Apps For You</p><br />
<h3>FOR ENTERPRISES</h3><br />
<p>Zomato For Enterprise</p>
    </div>
    <div>
   <h3>LEARN MORE</h3><br />
<p>Privacy</p>
<p>Security</p>
<p>Terms</p>
<p>Sitemap</p>
    </div>
    <div>
        <h3>SOCIAL LINKS</h3><br />
        <img marginLeft="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aCsJgAx8tXaEWQA5iPMyOGeeRfh1MyrUgA&usqp=CAU" alt="" /><br />
    
        <a href="https://www.linkedin.com/company/zomato/?originalSubdomain=in"><AiFillLinkedin   size={20} color='black'/></a>
        <a href="https://www.instagram.com/zomato/"><FaInstagramSquare  size={20} color='black'/></a>
        <a href="https://twitter.com/zomato"><AiFillTwitterCircle size={20} color='black'/></a>
        <a href="https://www.youtube.com/zomato"><AiFillYoutube size={20} color='black'/></a>
        <a href="https://www.facebook.com/zomato"><BsFacebook size={20}  color='black'/></a>
        
    </div>
</div>
{/* footer3 */}
<div className='footer3'>
    <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>
</div>

        </>
    </div>
  )
}

export default Footer