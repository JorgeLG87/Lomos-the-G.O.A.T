// import "./SocialMedia.scss";
import "./SocialMedia.css";

export default function SocialMedia() {
    return (
        <div className="socialmedia-box">
            <div className="socialmedia-container">
                <a href="https://www.instagram.com/lomostheg.o.a.t/"><img className="instagram" src="/instagram.svg" alt="instagram-new--v1" /></a>
                <a href="https://www.facebook.com/people/Lomos-The-G-o-a-t/61559046853292/"><img className="facebook" src="/facebook.svg" alt="facebook-new"/></a>
                <a href="https://www.tiktok.com/@lomostheg.o.a.t?lang=en"><img className="tiktok" src="tik-tok.svg" alt="tiktok--v1"/></a>
            </div>
            {/* <div className="company-text-container"> */}
                <p className="company-text">Lomos The G.O.A.T - Est. 2024</p>
            {/* </div> */}
        </div>
    )
}