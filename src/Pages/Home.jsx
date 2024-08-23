import QueEsLomo from "../Components/QueEsLomo.jsx";
import "../CSS/Home.css";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

import HomeSlidingImg from "../Components/HomeSlidingImg.jsx";


export default function Home({ slides }) {

    const IntersectionObserverComponent = () => {
      // const [ isVisible, setIsVisible ] = useState(false);
      const elementRef = useRef(null);

      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // observer.unobserve(entry.target);
            // setIsVisible(true);
          } else {
            entry.target.classList.remove("is-visible");
          }
        }, { threshold: 0.1 });

        if (elementRef.current) {
          observer.observe(elementRef.current);
        }

        return () => {
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        };
      }, []);

      return elementRef;

    };
  

    return (
        <div className="entire-home-container">
        <div className="marco-video-container">
          <img className="marco-video" src="/Background-image.png"/>
          <div className="video-container">
            <video className="video" autoPlay={true} loop={true} playsInline>
              <source src="/publicidad-lomo.MP4" type="video/mp4"/>
            </video>
          </div>
        </div>
        <div className="icon-container">
          <img className="face" src="/facebook.png"/>
          <img className="location" src="/location.png"/>
        </div>
        <QueEsLomo/>
          <Link className="link" to="/order-now" style={{textDecoration:"none", marginTop:"80px", display:"contents"}}>
            <button className="order-now-home">Order Now!</button>
          </Link>
        <div className="aboutus-section-container" ref={IntersectionObserverComponent()}>
          <div className="entire-body">    
            <div className="title-container">
              <p className="aboutus-title">"A little taste of Argentina..."</p>
            </div>
          
            <div className="aboutus-images-arg">
              <HomeSlidingImg slides={slides}/>
            </div>
            <div className="aboutus-container2">
              <p className="aboutus-text">
              "We're just a team of entrepreneurs from San Juan (Argentina) excited in bringing one of the most popular sandwiches of Argentina to the USA." 
              </p>
            </div>       
          </div>
        </div>
        <div className="socialmedia-text-container" ref={IntersectionObserverComponent()}>
          <p className="socialmedia-text"><span className="span-text"># FOLLOW US</span></p><p className="socialmedia-text2">ON SOCIAL MEDIA</p>
        </div>
        <div className="map-comments-container">
          <img className="argentina-map" src="/mapa.png"/>
          <div className="comments">Google Reviews</div>
        </div>
        <div className="our-location">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6034.410203527583!2d-74.1095739239315!3d40.86737292808924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f93948c9765b%3A0x6be954f76eaa0b56!2s96%20Palisade%20Ave%2C%20Garfield%2C%20NJ%2007026!5e0!3m2!1sen!2sus!4v1718864999544!5m2!1sen!2sus" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    )
}