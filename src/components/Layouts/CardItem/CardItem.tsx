import React, { FC } from 'react';
import { ProductTypes } from '../../../types';

const CardItem: FC<ProductTypes> = ({ name, price, color, img }) => (
  <div className="card">
    <div className="card-title">
      <h2>{name}</h2>
    </div>
    <div className="card-color">{color}</div>
    <div className="card-product__image">
      <img src={`./images/${img}`} alt={name} />
    </div>
    <div className="cta">
      <div className="card-product__price">${price}</div>
      <button type="button" className="addto-cart">
        Add to cart
      </button>
    </div>
  </div>
);

export default CardItem;
