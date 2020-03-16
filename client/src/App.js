import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./pages/Blog";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/search/" component={Detail} />
          <Route exact path="/contact/" component={Contact} />
          <Route exact path="/blog/" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
