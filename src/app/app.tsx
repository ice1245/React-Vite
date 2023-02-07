// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Header from './components/Layout/header/header';
import {Fragment} from "react";
import Meals from "./components/Meals/Meals";

export function App() {
  return (
    <Fragment>
      <Header/>
      <Meals/>
    </Fragment>
  );
}

export default App;
