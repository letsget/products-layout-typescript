import React, { FC } from 'react';
import { ProductTypes } from '../../types';
import CardLayout from '../Layouts/CardItem/CardItem';

interface Props {
  cards: ProductTypes[];
}

const CardView: FC<Props> = ({ cards }) => (
  <div className="products-wrapper">
    {cards.map(({ id, name, price, color, img }: ProductTypes) => {
      return (
        <CardLayout
          key={id}
          name={name}
          price={price}
          color={color}
          img={img}
        />
      );
    })}
  </div>
);

export default CardView;
