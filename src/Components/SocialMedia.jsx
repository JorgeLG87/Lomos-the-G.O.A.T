// import "./SocialMedia.scss";
import "./SocialMedia.css";

export default function SocialMedia() {
    return (
        <div className="socialmedia-box">
            <div className="socialmedia-container">
                <a href="https://www.instagram.com/lomostheg.o.a.t/"><img className="instagram" src="https://img.icons8.com/color/144/instagram-new--v1.png" alt="instagram-new--v1" /></a>
                <a href="https://www.facebook.com/people/Lomos-The-G-o-a-t/61559046853292/"><img className="facebook" src="https://img.icons8.com/color/144/facebook-new.png" alt="facebook-new"/></a>
                <a href="https://www.tiktok.com/@lomostheg.o.a.t?lang=en"><img className="tiktok" src="https://img.icons8.com/color/144/tiktok--v1.png" alt="tiktok--v1"/></a>
            </div>
            {/* <div className="company-text-container"> */}
                <p className="company-text">Lomos The G.O.A.T - Est. 2024</p>
            {/* </div> */}
        </div>
    )
}