import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import { ProductTypes } from '../../types';
import IconSwitch from '../../components/ViewToggleIcon';
import CardView from '../../components/CardView';
import ListView from '../../components/ListView';

const products = [
  {
    name: 'Nike Metcon 2',
    price: '130',
    color: 'red',
    img: '1.jpg',
  },
  {
    name: 'Nike Metcon 2',
    price: '130',
    color: 'green',
    img: '2.jpg',
  },
  {
    name: 'Nike Metcon 2',
    price: '130',
    color: 'blue',
    img: '3.jpg',
  },
  {
    name: 'Nike Metcon 2',
    price: '130',
    color: 'black',
    img: '4.jpg',
  },
  {
    name: 'Nike free run',
    price: '170',
    color: 'black',
    img: '5.jpg',
  },
  {
    name: 'Nike Metcon 3',
    price: '150',
    color: 'green',
    img: '7.jpg',
  },
];

const productsToRender = products.map((product: ProductTypes) => ({
  id: nanoid(),
  ...product,
}));

const Store: FC = () => {
  const [icon, setIcon] = useState<string>('view_module');

  const onSwitch = (): void => {
    setIcon(icon === 'view_module' ? 'view_list' : 'view_module');
  };
  return (
    <div className="container">
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {icon === 'view_module' ? (
        <CardView cards={productsToRender} />
      ) : (
        <ListView cards={productsToRender} />
      )}
    </div>
  );
};

export default Store;
