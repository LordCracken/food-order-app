import { useState, useEffect } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import { IMealItem } from '../../interfaces';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState<IMealItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [httpError, setHttpError] = useState<string>();

  useEffect(() => {
    const url = 'https://reactmeals-6aaed-default-rtdb.firebaseio.com/meals.json';
    (async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    })().catch(error => {
      setIsLoading(false);
      setHttpError((error as Error).message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes['meals-loading']}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes['meals-error']}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map(meal => (
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
