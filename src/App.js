import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

 function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  };
  const [button, setButton] = useState("primary");

  const toggleSwitch = () => {
    if (button === "primary") {
      setButton("success");
      document.body.style.backgroundColor = "green";
      showAlert("Green Mode enabled..", "success");
    } else {
      document.body.style.backgroundColor = "white";
      setButton("primary");
      showAlert("Green mode disabled", "success");
    }
  };

  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#1c2070";
      showAlert("Darkmode has been enabled !!! ", "success");

      document.title = "TextUtil - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enabled !!! ", "success");

      document.title = "TextUtil - Light Mode";
    }
  };
  return (
    <>
      {/* {<Navbar />} */}
      {/* passing props  */}
      {/* <Router> */}
      <Navbar
        toggleSwitch={toggleSwitch}
        about="About TextUtils"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert Alert={alert}></Alert>
      {/* we use *exact* because react do a partial matching and partial matching is not a good practice */}
          <div className="container">
            {/* <Routes> */}
              {/* <Route exact path="/about" element={ <About />}></Route> */}

              {/* <Route exact path="/" element={ */}
              <TextForm 
                  toggleSwitch={toggleSwitch}
                  button={button}
                  showAlert={showAlert}
                  heading="Perform your Operations."
                  mode={mode}></TextForm>
                {/* />} */}
              {/* </Route></> */}
            {/* </Routes> */}
          </div>
      
      {/* </Router> */}
    </>
  ); 
}

export default App;
