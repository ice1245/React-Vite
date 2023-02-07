import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals/AvailableMeals";
import MealsSummary from "./MealsSummary/MealsSummary";
/* eslint-disable-next-line */
export interface Meals {}

export function Meals(props: Meals) {
  return(
    <Fragment>
      <MealsSummary/>
      <AvailableMeals/>
    </Fragment>);
}

export default Meals;
