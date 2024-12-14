import "../CSS/AboutUs.css";
import AboutUsMUICarousel from "../Components/AboutUsMUICarousel";

export default function AboutUs({ slides, AboutUsCarousel }) {
    return (
        <div className="aboutus-page">
            <div className="title-span-container-aboutus">
                <p className="title2"><span className="span-text"># Meet Our</span></p><p className="title">Team</p>
                <div className="container-body-aboutUs">
                    <AboutUsMUICarousel/>
                    <div className="idealogo-text-container">
                        <div className="text-aboutUs-container">
                            <p style={{fontFamily:"Barlow semi condensed", fontSize: "19px"}}>At Lomos the G.O.A.T we focus on quality and customer satisfaction. We firmly believe that food has the power 
                            to unite cultures and bring people together. We are commited to providing our customers with the best possible experience in every single bite.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutus-second-part">
                <div className="rectangle-dividor"></div>
                <div className="rectangle-dividor2"></div>
                <div className="rectangle-dividor3"></div>
                <div>
                    <p className="rectangle-title">Our Story</p>
                    <p className="rectangle-text">It all began with the simple idea of bringing our popular lomito sandwich to a completely new audience.  </p>
                </div>
            </div>
        </div>
    )
}