import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-lobster";
import "typeface-open-sans";

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
