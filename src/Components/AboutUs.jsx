import "./AboutUs.css";

export default function AboutUs() {
    return (
        <>
        <div className="title-span-container-aboutus">
            <p className="title2"><span className="span-text"># Meet Our</span></p><p className="title">Team</p>
            <div className="container-body-aboutUs">
                <div className="photos-container">
                    <div className="photo1">
                        <img className="first-photo" src="/cataratas-Iguazu.jpg"/>
                    </div>
                    <div className="photo2">
                        <img className="second-photo" src="/cataratas-Iguazu.jpg"/>
                    </div>
                    <div className="photo3">
                        <img className="third-photo" src="/cataratas-Iguazu.jpg"/>
                    </div>
                </div>
                <div className="text-aboutUs-container">
                    <p style={{fontFamily:"Montserrat"}}>With one dream in mind, a group of friends from San Juan (Argentina) decided to team up and work together towards one goal in mind. After experiencing the variety of cuisines within USA, their mission was to bring a unique flavor to North America. By the hand</p>
                </div>
            </div>
        </div>
        </>
    )
}