import React from "react";
import PropTypes from "prop-types";

// #3.2 Component Lifie Cycle 
// component가 update될 때, 호출되는 다른 function들이 있다.
// 1. mounting : 태어나는것
//    - constructor() : constructor() 호출 후 render() 호출
//    - render()
//    - componentDidMount() : component가 처음 render 되면 호출
// 2. updating : 일반적인 업데이트
//    - render()
//    - componentDidUpdate() : component가 update 되면 호출
// 3. Unmounting : component가 죽는것 = page가 바뀔때
//                ex) state를 사용해 component를 교체 
//    - componentWillUnmount() 


class App extends React.Component{
  state = {
    count: 0
  };
// current :  state를 set할때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법
add = () => {
  this.setState(current => ({count: current.count + 1}));
  //this.setState({count: this.state.count + 1}); -> Bad Case
};
minus = () => {
  this.setState(nameOfFunction => ({count: nameOfFunction.count - 1}));
};
// *** 뇌에 새길것! ***
// 매순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출한다
componentDidMount(){
  console.log("component rendered");
} 
componentDidUpdate(){
  console.log("component updated");
}
componentWillUnmount(){
  console.log("Goodbye, Component");
}
  render(){
    console.log("render is rendering");
    return( 
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    ); 
  }

}

export default App;

