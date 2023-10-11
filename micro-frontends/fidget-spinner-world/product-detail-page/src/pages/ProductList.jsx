import React, { useEffect, useState } from "react";
import { getProducts, currency } from "HomeKey/Products";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const nav = useNavigate();
  const [products, setProducts] = useState([]);
  //
  useEffect(() => {
    getProducts().then((r) => setProducts(r));
  }, []);

  return (
    <div className="grid max-w-6xl grid-cols-4 gap-5 mx-auto my-5 ">
      {products.map((p, index) => {
        return (
          <div
            key={p.id}
            className="flex flex-col"
          >
            <img
              src={p.image}
              alt={p.name}
            />
            <span className="text-center">{p.name}</span>
            <span className="text-center">{currency.format(p.price)}</span>
            <div style={{ height: "80px" }}>
              <p className="p-5 text-sm">{p.description}</p>
            </div>
            <button onClick={() => nav(`/product/${p.id}`)}>Details...</button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
