import "./App.css";
import RegisterLogin from "./RegisterLogin";
import Hidden from "./Hidden";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registerlogin" component={RegisterLogin}/>
          <Route path="/hidden" component={Hidden} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
