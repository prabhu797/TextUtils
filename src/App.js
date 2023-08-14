import React, {useState} from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(20 63 107)";
      showAlert("Dark mode has been enabled.","success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode has been enabled.","success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
          {/* <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>}/>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
