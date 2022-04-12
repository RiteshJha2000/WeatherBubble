
import React,{useState} from "react";
import About from "./About";
import Myweather from "./Myweather";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


function App() {

  const [progress, setProgress] = useState(0)

  document.title="WeatherAPI";

  return (
    <div>
      <Router>
      <LoadingBar
      height={3}
      color='#f11946'
      progress={progress}
    />
        <Routes>
          <Route exact path="/" element={<Myweather setProgress={setProgress}/>}></Route>
          <Route exact path="/About" element={<About setProgress={setProgress} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
