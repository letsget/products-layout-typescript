import React, { FC } from 'react';
import { ProductTypes } from '../../../types';

const ListItem: FC<ProductTypes> = ({ name, price, color, img }) => (
  <div className="card_view">
    <div className="card-product_view">
      <img src={`./images/${img}`} alt={name} />
    </div>
    <div className="card-title__view">
      <h2>{name}</h2>
    </div>
    <div className="card-color">{color}</div>
    <div className="card-product__price">${price}</div>
    <button type="button" className="addto-cart">
      Add to cart
    </button>
  </div>
);

export default ListItem;
