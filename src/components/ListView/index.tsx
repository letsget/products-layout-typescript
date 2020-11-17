import React, { FC } from 'react';
import { ProductTypes } from '../../types';
import ListItem from '../Layouts/ListItem';

interface Props {
  cards: ProductTypes[];
}

const ListView: FC<Props> = ({ cards }) => {
  return (
    <div className="products-wrapper__view-mode">
      {cards.map(({ id, img, name, color, price }: ProductTypes) => {
        return (
          <ListItem
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
};

export default ListView;
