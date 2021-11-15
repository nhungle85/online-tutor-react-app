import logo from './logo.svg';
import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
