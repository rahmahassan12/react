import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
   
    const rahma="https://fakestoreapi.com/products"
     const [products, setProducts] = useState([]);
     useEffect(() => {
        fetch(rahma).then((res) => res.json()).then((data) => setProducts(data))},[]);
          return(<>
      <h2 className="text-center p-2"> Rahma's Products </h2>
      <div className="container"> 
      <div className="raw>">
        {products.map((product) => {
            return (
              <div className="col-5" key={product.id}>
                <Product product={product}   />
              </div>
            );
          })}
        <div className="col-3"> 
        <Product/>
      </div>
      <div className="col-3"> 
        <Product/>
      </div>
       <div className="col-3"> 
        <Product/>
      </div>
    
      </div>
      </div>
      </>);
    }
    export default ProductsList;