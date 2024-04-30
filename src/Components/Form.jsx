import "./Form.css"

export default function Form() {
    return (
        <div className="form-container">
            <div className="menu-container">
                <img className="menu" src="src/assets/menu.png"/>
            </div>
            <form className="order-form">
                <label className="firstname-container">
                    First Name:
                    <input className="name-input" type="text" required></input>
                </label>
                <label className="lastname-container">
                    Last Name:
                    <input className="lastname-input" type="text" required></input>
                </label>
                <label className="delivery-container">
                    Delivery Address:
                    <input className="delivery-input" required></input>
                </label>
                <label className="city-container">
                    City:
                    <input className="city-input" required></input>
                </label>
                <label className="state-container">
                    State:
                    <input className="state-input" required></input>
                </label>
                <label className="contact-container">
                    Contact Number:
                    <input className="contact-number" type="number" required></input>
                </label>
                {/* <div className="ordermenu-container"> */}
                <label className="lomo-container">
                    Choose your type:
                    <select className="selection">
                        <option value="house-lomo">Lomo the G.O.A.T</option>
                        <option value="plain">Plain</option>
                    </select>
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
                <label className="french-fries">
                    French Fries:
                    <select className="selection">
                        <option value="none">------None------</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                {/* </div> */}
                <button className="submit-btn" type="submit">Place Order</button>
            </form>
        </div>
    )
}