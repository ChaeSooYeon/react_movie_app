import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state ={
    isLoading :true,
    loadingCount : 1,
    movie: []
  };
  componentDidMount(){
    setTimeout(()=> {
      this.setState({isLoading: false});     
    }, 5000);
    setInterval(() => {
      if(this.state.loadingCount < 6)
        this.setState(current => ({loadingCount : current.loadingCount + 1}));
    }, 1000);
  }
  render(){
    const {isLoading, loadingCount} = this.state;
    return(
      <div>
        <h4>{loadingCount}</h4>
       {isLoading ? "Loading..." : "We are ready"}
      </div>
    ); 
  }
}

export default App;

