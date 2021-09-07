import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name:"kimchi",
    image:"https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating:5
  },
  {
    id:2,
    name:"samgyetang",
    image:"https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating:4
  },
  {
    id:3,
    name:"bulgogi",
    image:"https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating:4.5
  },
  {
    id:4,
    name:"kimbap",
    image:"https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating:3.5
  },
]

function Food ({name, image}){
  return(
    <div>
      <h3>I like {name}</h3>
      <img src={image} alt={name} width="500px" />
    </div>
  );
 }

function renderFood(dish){
  console.log(dish); //-> keyerror
  return <Food key={dish.id} name={dish.name} image={dish.image} />
}

function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
