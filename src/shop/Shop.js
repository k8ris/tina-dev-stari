import Header from "./components/Header";
import Products from "./components/Products";

export default function Shop ()  {
    const items = require('./items')();
    return (
        <div>
            <Header />
            <Products products= {items}/>
        </div>
    )    
}