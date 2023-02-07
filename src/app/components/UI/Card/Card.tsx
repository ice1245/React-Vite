/* eslint-disable-next-line */
export interface Card {
  children:any
}
export function Card(props: Card) {
  return(
      <div className="px-4 py-4 shadow-lg rounded-md bg-white">
        {props.children}
      </div>
  );
}

export default Card;
