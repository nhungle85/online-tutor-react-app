import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import "typeface-lobster";
import "typeface-open-sans";

import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
