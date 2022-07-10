import Home from "./pages/Home";
import Header from "./components/Header";
import Products from "./components/Products";


export default function ShopLayout  ()  {
    const shopPieces = require('./shopPieces')();
    return (
    <div>
    <Header />
    <Products productsImage= {shopPieces}/>
    </div>
    )
     
    
}