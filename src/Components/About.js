import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function About(props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Styles based on the current mode
  const mystyle = {
    color: isDarkMode ? "White" : "Black",
    backgroundColor: isDarkMode ? "Black" : "White",
    borderRadius: `10px`,
    border: `2px solid white`,
  };

  const btnText = isDarkMode ? "Enable Light Mode" : "Enable Dark Mode";

  const toggleStyle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='container' style={mystyle}>
      <h1 className='my-4 mx-4' style={{ backgroundColor: props.mode === "dark" ? "#001F3F" : "white", color: props.mode === "dark" ? "white" : "black" }}>
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="accordion-item" key={index} style={{ backgroundColor: props.mode === "dark" ? "#001F3F" : "white", color: props.mode === "dark" ? "white" : "black" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                style={{ backgroundColor: props.mode === "dark" ? "#001F3F" : "white", color: props.mode === "dark" ? "white" : "black" }}
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index + 1}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${index + 1}`}
              >
                Accordion Item #{index + 1}
              </button>
            </h2>
            <div id={`collapse${index + 1}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <strong>This is the {index + 1} item's accordion body.</strong> It is {index === 0 ? "shown by default" : "hidden by default"} until the collapse plugin adds the appropriate classes that we use to style each element. 
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='container'>
        <button type="button" onClick={toggleStyle} className="my-3 mx-3">{btnText}</button>
      </div>
    </div>
  );
}
