import CardIcon from "../CardIcon/CardIcon";
import classes from "./header-card-button.module.scss";

/* eslint-disable-next-line */
export interface HeaderCardButtonProps {}

export function HeaderCardButton(props: HeaderCardButtonProps) {
  return (
      <button className="btn bg-[#4d1601] rounded-full py-2 px-8 flex justify-around hover:bg-[#2c0d00] active:bg-[#2c0d00]">
          <span className={classes.icon}>
              <CardIcon/>
          </span>
          <span className="font-bold">Your Cart</span>
          <span className="bg-[#b94517] px-4 ml-4 rounded-full font-bold hover:bg-[#92320c] active:bg-[#92320c]">3</span>
      </button>
  );
}

export default HeaderCardButton;
