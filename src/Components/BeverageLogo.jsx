import "./BeverageLogo.css";

export default function BeverageLogo({ selectedBev }) {
 
    return (
        <div className="bev-logo-container">
            {selectedBev === "Coca Cola" ? <img className="bev-logo" src="./coco-cola.avif"/> : null}
            {selectedBev === "Pepsi" ? <img className="bev-logo" src="./pepsi.jpg"/> : null}
            {selectedBev === "Fanta" ? <img className="bev-logo" src="./fanta.png"/> : null}
            {selectedBev === "Sprite" ? <img className="bev-logo" src="./sprite.svg"/> : null}
        </div>
        
    )
}