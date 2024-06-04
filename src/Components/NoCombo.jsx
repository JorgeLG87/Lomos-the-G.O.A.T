import "./NoCombo.css";

export default function NoCombo() {
    return (
        <>  
            <label className="lomoquantity-container">
                <input className="lomo-quantity" type="number" placeholder="Quantity"/>
            </label>
            <label className="lomo-container">
                <select className="selection">
                    <option value="choose lomo">Choose Lomo</option>
                    <option value="house-lomo">Lomo the G.O.A.T</option>
                    <option value="plain">Plain</option>
                </select>
            </label>
            <br/><br/>

            <label className="bevquantity-container">
                <input className="bev-quantity" type="number" placeholder="Quantity"/>
            </label>
            <div className="size-bevcontainer">
            <select className="selectionsize">
                <option value="select size">Select Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            </div>
            <label className="beverage-container">
                <select className="selection">
                    <option value="choose beverage">Choose Beverage</option>
                    <option value="pepsi">Pepsi</option>
                    <option value="coke">Coke</option>
                    <option value="orange juice">Orange Juice</option>
                </select>
            </label>

            <label className="frenchfriesquantity-container">
                <input className="frenchfries-quantity" type="number" placeholder="Quantity"/>
            </label>
            <div className="size-frenchfriescontainer">
            <select className="selectionsize">
                <option value="select size">Select Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            </div>
            <label className="french-fries-nocombo">
                <select className="selection">
                    <option value="none">French Fries</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </label>
            <button className="add-nocombo" type="button"></button>
        </>
    )
}