import React from "react";
import react from "react";

class Detail extends React.Component {
    // props 는 Router에 있기때문에 있는것임. just Component는 없음.
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if(location.state){
        return <span>{location.state.title}</span>;
    }else{
        return null;
    }
  }
}

export default Detail;
