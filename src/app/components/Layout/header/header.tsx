import { Fragment } from "react";
import mealsImages from '../../../../assets/meals.jpg'
import classes from "./header.module.scss";
import HeaderCardButton from "../HeaderCardButton/header-card-button";

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return(
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton/>
      </header>
      <div className={classes['main-image']} >
          <img src={mealsImages} alt={'A table full of delicious food!'}/>
      </div>
    </Fragment>);
}

export default Header;
