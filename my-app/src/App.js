import "./App.css";
import { Route } from "react-router-dom";
import BandDetail from "./components/BandDetail/BandDetail";
import Bands from "./components/Bands/Bands";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <NavBar />
        <Bands />
      </Route>
      <Route path="/band/:id">
        <BandDetail />
      </Route>
    </div>
  );
}

export default App;
