import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './TextForm';
import Alert from './Alert';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Default mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // Automatically dismiss alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#001F3F';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark mode';
    } else if (mode === 'dark') {
      setMode('pink');
      document.body.style.backgroundColor = '#FFC1CC';
      showAlert('Pink mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light mode';
    }
  };

  // Set initial background color based on the current mode
  useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#001F3F';
    } else if (mode === 'pink') {
      document.body.style.backgroundColor = '#FFC1CC';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [mode]);

  return (
 <>
    <Navbar title="TextUtils" mode={mode} toggkeMode={toggleMode} />
    <TextForm showAlert={showAlert} mode={mode} />
    <Alert alert={alert} />
  


    </>
  //   <Router>
  //     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  //     <Alert alert={alert} />
  //     <div className='container my-3'>
  //       <Routes>
  //       <Route  exact path="/about"  element={<About />} />

  //         <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />
  //       </Routes>
  //     </div>
  //   </Router>
  );
}

export default App;
