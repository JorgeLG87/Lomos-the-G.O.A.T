import "../CSS/AboutUs.css";
import { useEffect, useState, useRef } from "react";
import anime from "animejs";
import AboutUsMUICarousel from "../Components/AboutUsMUICarousel";

export default function AboutUs({ slides, AboutUsCarousel }) {
    const [ followUsIsVisible, setFollowUsIsVisible ] = useState(false);
    const textFollowUs = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          setFollowUsIsVisible(entry.isIntersecting);
        });
        observer.observe(textFollowUs.current);
      },[]);
    
    useEffect(() => {
        if (followUsIsVisible) {
            anime({
              targets: ".ourmission-title",
              keyframes: [
                {translateX: "0px"}
              ],
              opacity: 1,
              duration: 1000,
              easing: "easeOutExpo",
              delay: 500,
            });
        } else {
            anime({
              targets: ".ourmission-title",
              keyframes: [
                {translateX: "-100px"}
              ],
              opacity: 0,
              duration: 1000,
              easing: "easeOutExpo",
              // delay: 1000,
            });
        }
    },[followUsIsVisible])

    useEffect(() => {
        if (followUsIsVisible) {
            anime({
              targets: ".ourmission-text",
              keyframes: [
                {translateX: "0px"}
              ],
              opacity: 1,
              duration: 1000,
              easing: "easeOutExpo",
              delay: 1200,
            });
        } else {
            anime({
              targets: ".ourmission-text",
              keyframes: [
                {translateX: "100%"}
              ],
              opacity: 0,
              duration: 1000,
              easing: "easeOutExpo",
              // delay: 1000,
            });
        }
    },[followUsIsVisible])

    // FOR TESTING PURPOSES - DELETE AFTER DONE
    useEffect(() => {
        if (followUsIsVisible) {
            console.log("True")
        } else {
            console.log("False")
        }
    }, [followUsIsVisible])

    return (
        <div className="aboutus-page">
            <div className="title-span-container-aboutus">
                <p className="title2"><span className="span-text">Meet Our</span></p><p className="title">Team</p>
                <div className="container-body-aboutUs">
                    <AboutUsMUICarousel/>
                    <div className="idealogo-text-container">
                        <div className="text-aboutUs-container">
                            <p style={{fontFamily:"Barlow semi condensed", fontSize: "20px"}}>At Lomos the G.O.A.T we focus on quality and customer satisfaction. We firmly believe that food has the power 
                            to unite cultures and bring people together. We are commited to providing our customers with the best possible experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutus-second-part">
                <div className="rectangle-dividor"></div>

                <div className="rectangle-dividor2"></div>

                <div className="rectangle-dividor3"></div>

                <div className="ourstory-rectangle-container">
                    <div className="rectangle-container">
                        <p className="rectangle-title">Our Story</p>
                        <p className="rectangle-text">It all began with the simple idea of bringing our popular lomito sandwich to a completely new audience. From our roots straight to yours we emphasize authentic flavors, high-quality ingredients, and the warmth of Argentinean tradition. Our goal is to create more than just a meal, we aim to deliver an experience that transports you to the heart of Argentina with every bite. </p>
                    </div>

                    <div className="box"></div>
                </div>
            </div>

            <div className="ourmission-part">
                <div className="ourmission-rectangle-container" ref={textFollowUs}>

                    <img className="ourmission-image" src="/papercuteffect.png" alt="our mission"/>

                    <p className="ourmission-title">OUR MISSION</p>

                    <p className="ourmission-text">We all have a busy life, a lot of things going on, we understand. At Lomos the G.O.A.T we envision a world consistently moving at a fast pace, but with high quality meal options. And we are here to deliver on that.</p>

                    {/* <video controls utoplay muted loop>
                        <source src="/ourmission.mp4" type="video/mp4"/>
                    </video> */}

                    {/* <div className="rectangle-container2">
                        <p className="rectangle-title">Our Mission</p>
                        <p className="rectangle-text">We all have a busy life, a lot of things going on, we understand. At Lomos the G.O.A.T we envision a world consistently moving at a fast pace, but with high quality meal options. And we are here to deliver on that.  </p>
                    </div> */}
                </div>

                {/* <div className="rectangle-dividor4"></div>

                <div className="rectangle-dividor5"></div>

                <div className="rectangle-dividor6"></div> */}
            </div>

        </div>
    )
}