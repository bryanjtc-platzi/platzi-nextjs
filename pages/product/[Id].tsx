import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { Id },
  } = useRouter();
  return <div>Esta es la pagina del producto: {Id}</div>;
};

export default ProductItem;
