import "./QueEsLomo.css";

export default function QueEsLomo() {
    return (
        <div className="queeslomo-container">
            <img className="lomo-imagen" src="src/assets/lomito-argentino.jpeg"/>
            <div className="explanation">
            <p className="lomo-title">What is a lomito?</p>
            <p className="lomo-text"><span className="tricks">-----</span>A lomito is a high quality argentinean steak sandwich. There are different styles of lomitos within Argentina, but we speacialize in a unique one that is made in <span className="san-juan">San Juan</span>.</p>
            <p className="lomo-text"><span className="tricks">-----</span>From our home made bread to our high quality steak, we  </p>
            </div>
            <div className="mapa-arg-container">
            <img className="mapa-arg" src="src/assets/sanjuan.png"/>
            <img className="bandera" src="src/assets/bandera-argentina2.png"/>
            <p>Up to Date</p>
            </div>
        </div>
    )
}