import React from "react";

function Food ({name, image}){
 return(
   <div>
     <h3>I like {name}</h3>
     <img src={image} width="500px" />
   </div>
 );
}

const foodILike = [
  {
    name:"kimchi",
    image:"https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    name:"samgyetang",
    image:"https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    name:"bulgogi",
    image:"https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    name:"kimbap",
    image:"https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
]

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {foodILike.map(dish => (
        <Food name={dish.name} image={dish.image} />
      ))}
    </div>
  );
}

export default App;
