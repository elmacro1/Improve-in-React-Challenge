import "./App.css";
import { Route } from "react-router-dom";
import BandDetail from "./components/BandDetail/BandDetail";
import Bands from "./components/Bands/Bands";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { getBands, getGenre, getAlbums } from "./actions/index";
import { useDispatch } from "react-redux";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBands());
    dispatch(getGenre());
    dispatch(getAlbums());
  }, []);
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
