import React, { useState, useEffect } from "react";
import { getProductById, currency } from "HomeKey/Products";
import { useNavigate, useParams } from "react-router-dom";

function ProductContent() {
  //
  const { pId } = useParams();
  const [product, setProduct] = useState(null);
  //
  const nav = useNavigate();

  useEffect(async () => {
    console.log(pId);
    if (pId) {
      getProductById(pId)?.then(setProduct);
    } else {
      setProduct(null);
    }

    return () => {};
  }, [pId]);

  if (!product) return null;

  return (
    <div className="grid max-w-6xl grid-cols-2 gap-5 mx-auto my-5">
      <div>
        <img
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col justify-around">
        <div className="flex flex-row items-center justify-between p-5 text-3xl">
          <span>{product.name}</span>
          <span>{currency.format(product.price)}</span>
        </div>
        <p className="p-5 text-xl">{product.description}</p>
        <p className="p-5 text-xl">{product.longDescription}</p>
        <div>
          <button onClick={() => nav("/products")}>Product List</button>
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
