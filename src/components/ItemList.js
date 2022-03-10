import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <ul>
      {props.items.map((product) => {
        return (
          <Item
            key={product.id}
            title={product.title}
            price={product.price}
            pictureUrl={product.pictureUrl}
            stock={product.stock}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;