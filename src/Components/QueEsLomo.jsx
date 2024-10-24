import "./QueEsLomo.css";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function QueEsLomo() {

    const mapSanJuan = useRef();
    const [ mapIsVisible, setMapIsVisible ] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setMapIsVisible(entry.isIntersecting);
      })
      observer.observe(mapSanJuan.current);
    }, []);

    useEffect(() => {
        if (mapIsVisible) {
        anime({
            targets: ".mapa-arg-container",
            keyframes: [
                {translateX: "300px"}
            ],
            duration: 3000,
            easing: "easeOutExpo",

        });
        } else {
            anime({
                targets: ".mapa-arg-container",
                keyframes: [
                    {translateX: "0px"}
                ],
                duration: 3000,
                easing: "easeOutExpo",
            });
        }
    },[mapIsVisible]);

    return (
        <div className="queeslomo-container">
            <img className="lomo-imagen" src="/thegoat1.jpeg"/>
            <div className="explanation">
                <p className="container-lomito-text"><span className="span-lomito-text">LOMITO?</span></p><p className="lomo-title">What is that!?</p>
                <p className="lomo-text"><span className="tricks">-----</span>A lomito is a high quality argentinean steak sandwich. There are different styles of lomitos within Argentina, but we specialize in a unique one that is made in <span className="san-juan">San Juan</span>.</p>
                <p className="lomo-text"><span className="tricks">-----</span>From our home made bread to our high quality steak, we focus not only on a top notch sandwich but also in providing a great experience to our customers. So without further a due, let's welcome the authentic <span className="san-juan">Argentinean lomito </span>to <span className="san-juan">New York City and New Jersey!</span></p>
            </div>
            <div className="mapa-arg-container" ref={mapSanJuan}>
                <img className="mapa-arg" src="/sanjuan.png"/>
                <img className="bandera" src="/bandera-argentina2.png"/>
            </div>
        </div>
    )
}