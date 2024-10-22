import "../CSS/AboutUs.css";

export default function AboutUs({ slides, AboutUsCarousel }) {
    return (
        <div className="aboutus-page">
        <div className="title-span-container-aboutus">
            <p className="title2"><span className="span-text"># Meet Our</span></p><p className="title">Team</p>
            <div className="container-body-aboutUs">
                <AboutUsCarousel slides={slides}/>
                <div className="idealogo-text-container">
                    {/* <div className="idea-container">
                        <img className="lightbulb" src="/lightbulb.svg" alt="Lightbulb icon"/>
                    </div> */}
                    <div className="text-aboutUs-container">
                        <p style={{fontFamily:"Barlow semi condensed", fontSize: "20px"}}>It all began in</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}