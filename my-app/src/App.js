import "./App.css";
import { Route } from "react-router-dom";
import BandDetail from "./components/BandDetail/BandDetail";
import Bands from "./components/Bands/Bands";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login.jsx";
import { useEffect } from "react";
import { getBands, getGenre, getAlbums } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let dispatch = useDispatch();
  let session = useSelector((state) => state.session);
  useEffect(() => {
    dispatch(getBands());
    dispatch(getGenre());
    dispatch(getAlbums());
  }, []);
  return (
    <div className="App">
      {!session && (
        <Route patch="/">
          <Login />
        </Route>
      )}

      {session && (
        <Route path="/home">
          <NavBar />
          <Bands />
        </Route>
      )}
      {session && (
        <Route path="/band/:id">
          <BandDetail />
        </Route>
      )}
    </div>
  );
}

export default App;
