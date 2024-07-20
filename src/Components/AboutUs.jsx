import "./AboutUs.css";

export default function AboutUs({ slides, AboutUsCarousel }) {
    return (
        <div className="aboutus-page">
        <div className="title-span-container-aboutus">
            <p className="title2"><span className="span-text"># Meet Our</span></p><p className="title">Team</p>
            <div className="container-body-aboutUs">
                <AboutUsCarousel slides={slides}/>
                <div className="idealogo-text-container">
                    <div className="idea-container">
                        <img className="lightbulb" src="/lightbulb.svg" alt="Lightbulb icon"/>
                    </div>
                    <div className="text-aboutUs-container">
                        <p style={{fontFamily:"Montserrat"}}>With one dream in mind, a group of friends from San Juan (Argentina) decided to team up and work together towards one goal in mind. After experiencing the variety of cuisines within USA, their mission was to bring a unique flavor to the US. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}