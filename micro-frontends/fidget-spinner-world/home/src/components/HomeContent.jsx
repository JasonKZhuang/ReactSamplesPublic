import React, { useEffect, useState } from "react";
import { getProducts, currency } from "./products";
function HomeContent() {
  const [products, setProducts] = useState([]);
  //
  useEffect(() => {
    getProducts().then((r) => setProducts(r));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 my-5">
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
            <p className="p-5 text-sm">{p.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HomeContent;
