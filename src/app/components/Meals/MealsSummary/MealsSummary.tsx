/* eslint-disable-next-line */
export interface MealsSummary {}

export function MealsList(props: MealsSummary) {
  return(
      <section className="max-w-[45rem] w-[90%] mt-[-10rem]
      mx-auto text-center rounded-xl shadow-md relative bg-[#383838]
       px-4 py-4 text-white">
        <h2 className="text-[2rem] font-bold">Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time and
          of course by experienced chefs!
        </p>
      </section>
    );
}

export default MealsList;
