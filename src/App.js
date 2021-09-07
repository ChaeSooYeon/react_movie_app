import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name:"kimchi",
    image:"https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
   // rating:5
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

function Food ({name, image, rating}){
  return(
    <div>
      <h3>I like {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} width="500px" />
    </div>
  );
 }

 Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
