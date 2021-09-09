import React from "react";
import axios from "axios";

class App extends React.Component{
  state ={
    isLoading :true,
    movie: []
  };
  // async, await - 비동기함수작성시 사용
  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  }

  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading} = this.state;
    return(
      <div>
       {isLoading ? "Loading..." : "We are ready"}
      </div>
    ); 
  }
}

export default App;