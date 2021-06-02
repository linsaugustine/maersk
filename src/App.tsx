import { useState } from "react"
import './App.scss';
import ShuffleSort from "./ShuffleSort"
import ShuffleSortMob from "./ShuffleSortMob"

function App() {
  const width = window.innerWidth

  const arr = [ 
    {value: 9, color: "dark"} , 
    {value: 8, color: "dark-light"},
    {value: 7, color: "grey"},
    {value: 6, color: "grey"},
    {value: 5, color: "dark"},
    {value: 4, color: "light"},
    {value: 3, color: "dark"},
    {value: 2, color: "light"},
    {value: 1, color: "dark-light"}
]

  return (
    <div className="App">
      {width < 600 ? <ShuffleSortMob arr={arr}/> : <ShuffleSort arr={arr}/>}
    </div>
  );
}

export default App;
