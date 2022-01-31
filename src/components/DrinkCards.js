import React, { useContext } from 'react';
import DrinkContext from '../context/DrinkContext';

export default function DrinkCards() {
  const { drink, setDrink } = useContext(DrinkContext);
  return <div>Bebidas</div>;
}
