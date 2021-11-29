import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import TextForm from './components/TextForm'
import Alert from './components/Alert';

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
      {/* <Navbar title='TextUtils' /> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Text To Manipulate" showAlert={showAlert} mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
