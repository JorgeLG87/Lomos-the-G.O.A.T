import "./Form.css"

export default function Form() {
    return (
        <div className="form-container">
            <div className="menu-container">
                <img className="menu" src="src/assets/menu.png"/>
            </div>
            <form className="order-form">
                <label>
                    Choose your type:
                    <select className="selection">
                        <option value="house-lomo">Lomo the G.O.A.T</option>
                        <option value="plain">Plain</option>
                    </select>
                </label>
                <br/><br/>
                <label>
                    Beverage:
                    <select className="selection">
                        <option value="pepsi">Pepsi</option>
                        <option value="coke">Coke</option>
                        <option value="orange juice">Orange Juice</option>
                    </select>
                </label>
            </form>
        </div>
    )
}