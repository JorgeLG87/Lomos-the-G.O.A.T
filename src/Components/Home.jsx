import QueEsLomo from "./QueEsLomo.jsx";
import "./Home.css";

import HomeSlidingImg from "./HomeSlidingImg.jsx";


export default function Home({ slides }) {
    return (
        <>
        <video className="video" autoPlay="true" loop="true"> 
          <source src="public/publicidad-lomo.MP4" type="video/mp4"/>
        </video>
        <QueEsLomo/>
        <div className="aboutus-section-container">
        <div className="entire-body">    
          <div className="title-container">
            <p className="aboutus-title">"A little taste of Argentina..."</p>
          </div>
          
          <div className="aboutus-images-arg">
            <HomeSlidingImg slides={slides}/>
          </div>
          <div className="aboutus-container2">
            <p className="aboutus-text">
            "We're just a team of entrepreneurs from San Juan (Argentina) excited in bringing one of the most popular sandwiches of Argentina to the USA. It wasn't an easy journey, we came across some challenges..." 
            </p>
          </div>       
        </div>
        </div>
        <div className="socialmedia-text-container">
          <p className="socialmedia-text"><span className="span-text"># FOLLOW US</span></p><p className="socialmedia-text2">ON SOCIAL MEDIA</p>
        </div>
        <div className="map-comments-container">
          <img className="argentina-map" src="/argentina-outline.png"/>
          <div className="comments">Google Reviews</div>
        </div>
        </>
    )
}