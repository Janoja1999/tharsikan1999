import React from 'react';
import './About.css';
function About() {
  return (
    <div className="about">
     <div className='about1'><h2>About Us</h2>
      <p>MY HALL VISSION is more than just a company; we're a group of creative minds, tech enthusiasts, and event management experts. Our team is comprised of individuals with backgrounds in event planning,furniture arrangement and design, and project management. Together, we have a shared vision of redefining event experiences.</p></div>
          <div className='flexx'>
            <div className='flex1'><h3>2D view</h3>
            <img src='./aboutimages/2D.jpg' className='applogo' alt="logo" />

            <p1>Add, edit and see furniture, décor and manufacturer specific tents within the 2D view for arrange furniture in floor plan</p1>
            </div>
            <div className='flex2'><h3>3D view</h3>
            <img src='./aboutimages/images.jpg' className='applogo' alt="logo" />
            
            <p2>Walk through the floor plan from eye level or see an aerial view for EVERY floor plan regardless of your account type.</p2>
            </div>
            <div className='flex3'><h3>all devices</h3>
            <img src='./aboutimages/responsive.png' className='applogo' alt="logo" />
            <p3>Experience EVERY floor plan on ANY device with internet connection - computers </p3>
            </div>
          </div>
          <div className='align'>
            <h4>Eliminating Stress With Passion & Determination</h4>
            <p2> We work together to accomplish all goals and get past every challenge. Throughout the planning process, you'll feel confident and at comfortable.We partner with you to overcome every obstacle and achieve every objective. You will experience calm and confidence throughout the planning process.</p2>
            <img src='./aboutimages/eliminateimage.jpg' className='passion' alt="image"/> </div>
          
          
          <div className='align1'><h4>Promoting Transparency & Honesty</h4>
          <p2>We deliver unrivaled transparency in event costs. Enjoy full visibility into all pricing, enabling you to reach decisions that make the most of your budget.</p2>
          
                    <h4>Custom Solutions</h4><p2> We understand that every event is unique. That's why we tailor our 3D simulations to suit your specific needs, whether it's a corporate conference, product launch, trade show, or virtual training.
          </p2>
          <img src='./aboutimages/images (1).jpg' className='customer' alt="logo" />
          <div>
          <p>you're choosing a partner dedicated to transforming your event into a remarkable experience. We believe in the power of innovation, and we're committed to helping you stand out in a competitive market.
          Join us on this exciting journey to explore the endless possibilities of 3D simulation in event management. Contact us today to discuss how we can make your next event truly unforgettable!</p>
          </div></div></div>
          
   
  //  {/* <h4> With Passion & Determination</h4> */}   
      
 );
}
export default About;

 
