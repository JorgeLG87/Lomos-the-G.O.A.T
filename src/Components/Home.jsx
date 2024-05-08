import QueEsLomo from "./QueEsLomo.jsx";
import "./Home.css";


export default function Home() {
    return (
        <>
        <QueEsLomo/>
        <div className="entire-body">
          <div className="test">
            <p className="aboutus-title">"A little taste of Argentina..."</p>
            <p className="aboutus-text">
            {/* Lomos the G.O.A.T started with two argentinians in New York, crazy for the argentinian lomito, with the idea of sharing this authentic flavor with the rest of the world. Bringing together the flavors with the ingredients available in the local market was a challenge, so we had to decide to elaborate our own bread */}
            We're just a team of entrepreneurs from San Juan (Argentina) excited in bringing one of the most popular sandwiches of Argentina to the USA. It wasn't an easy journey, we came across some challenges 
            
            </p>
            
          </div>
          <br/><br/>        
          <div className="resena">Google Reviews</div>
        </div>
        </>
    )
}