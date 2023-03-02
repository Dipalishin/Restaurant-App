import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'MISAL',
    description: 'Spicy',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'IDLI',
    description: 'Best Food',
    price: 18.99,
  },
  {
    id: 'm3',
    name: 'VADA-PAV',
    description: 'deepfried',
    price: 16.5,
  },
  {
    id: 'm4',
    name: 'DOSA',
    description: 'Indians Fav',
    price: 12.99,
  },
  

];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
