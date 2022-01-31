import React, { useContext } from 'react';
import FoodContext from '../context/FoodContext';

export default function FoodCards() {
  const { food, setFood } = useContext(FoodContext);
  return <div>comidas</div>;
}
