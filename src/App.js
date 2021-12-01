import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529e5";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtilities - Home | Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFF";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtilities - Home";
    }
  }
  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar title='TextUtils' /> */}
        <div className="container my-3">
          <Routes>
            {/* <Route exact path="/">
              <TextForm heading="Enter Text To Manipulate" showAlert={showAlert} mode={mode} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route> */}
            <Route exact path="/" element={<TextForm heading="Enter Text To Manipulate" showAlert={showAlert} mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
