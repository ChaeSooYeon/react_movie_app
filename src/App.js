import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail"
import Navigation from "./componetns/Navigation";

function App() {
  return (
    <>
      <HashRouter>
        {/* // Link는 라우터 안에서 쓰여야하기 때문에 <Navigation/> 은 라우터 밖에서 선언할 수 없음 */}
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
        {/* <Route path="/movie-detail" component={Detail} /> */}
      </HashRouter>
    </>
  );
}

export default App;
