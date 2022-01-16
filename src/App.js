import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/GlobalStyles.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Items from "./Items";
import Cart from "./components/Cart";
import {useState} from "react";

function App() {
    // Basket
    const [basket, setBasket] = useState([]);

    // Add to basket
    const addItem = (producto) => {
        // Check if the item exist or not
        const exist = basket.find((item) => item.id === producto.id);
        if (exist) {
            setBasket(basket.map(item => item.id === producto.id ? {...exist, qty: exist.qty + 1} : item));
        } else {
            setBasket([...basket, {...producto, qty: 1}]);
        }
    };

    // Remove from basket
    const removeItem = (producto) => {
        // Check if the item exist or not
        const exist = basket.find((item) => item.id === producto.id);
        if (exist.qty === 1) {
            setBasket(basket.filter((item) => item.id !== producto.id));
        } else {
            setBasket(basket.map(item => item.id === producto.id ? {...exist, qty: exist.qty - 1} : item));
        }
    };

    return (
        <div className="App">
            <div>
                <Header name="Pan Comido" basket={basket.length}/>
                <Menu name="Panes" desc="" menu={Items} addItem={addItem}/>
                <Cart items={basket} remove={removeItem}/>
            </div>
        </div>
    );
}

export default App;
