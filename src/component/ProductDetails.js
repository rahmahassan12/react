 import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const rahma = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProducts = () => {
    fetch(rahma)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const fetchCategories = () => {
    fetch(`${rahma}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const fetchProductsInCategory = (categoryName) => {
    console.log(categoryName);
    fetch(`${rahma}/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3"> Rahma's Products </h2>
      <div className="container">
        <button
          onClick={() => {
            fetchProducts();
          }}
          className="btn btn-info"
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => {
                fetchProductsInCategory(category);
              }}
              className="btn btn-info"
            >
              {category}
            </button>
          );
        })}

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
