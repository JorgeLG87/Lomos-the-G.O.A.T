// import "./Form.css";
import "./NoCombo.css";

export default function NoCombo() {
    return (
        <>
            <label className="lomo-container">
                Choose your type:
                <select className="selection">
                    <option value="house-lomo">Lomo the G.O.A.T</option>
                    <option value="plain">Plain</option>
                </select>
            </label>
            <label className="lomoquantity-container">
                Quantity:
                <input className="lomo-quantity" type="number"/>
            </label>
                <br/><br/>
                <label className="beverage-container">
                    Beverage:
                    <select className="selection">
                        <option value="pepsi">Pepsi</option>
                        <option value="coke">Coke</option>
                        <option value="orange juice">Orange Juice</option>
                    </select>
                </label>
                <label className="bevquantity-container">
                    Quantity:
                    <input className="bev-quantity" type="number"/>
                </label>
                <label className="french-fries-nocombo">
                    French Fries:
                    <select className="selection">
                        <option value="none">------None------</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <button className="add-nocombo" type="button"></button>
        </>
    )
}