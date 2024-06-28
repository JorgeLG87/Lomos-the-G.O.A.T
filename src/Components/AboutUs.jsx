import "./AboutUs.css";

export default function AboutUs() {
    return (
        <>
        <div className="title-span-container-aboutus">
            <p className="title2"><span className="span-text"># Meet Our</span></p><p className="title">Team</p>
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
        </div>
        </>
    )
}