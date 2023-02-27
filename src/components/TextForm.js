import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")  
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")
  };
  const handleClrText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success")
  };
  const handleOnChange = (event) => {
    console.log("On change.");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here...");
  return (
    <>
      <div  >
        <div className="container mb-3"  >

          <h1 style={{color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h1>
          <label htmlFor="mybox" className="form-label"></label>
          <div  style={{color: props.mode === 'dark'?'white':'black'}}>

          <textarea
            id="mybox"
            className="form-control"
            onChange={handleOnChange}
            value={text}
            rows="3"
            
            style={{backgroundColor : props.mode === 'dark'?'#1c2070':'white'}}
              
            
            ></textarea>
            </div>
        </div >
        <button  className={`btn btn-${props.button} mx-2`} onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className={`btn btn-${props.button} mx-2`}  onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className={`btn btn-${props.button} mx-2`}  onClick={handleClrText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 style={{color: props.mode === 'dark'?'white':'black'}}>Your text summary...</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
      </div>
      <h2 style={{color: props.mode === 'dark'?'white':'black'}}>Preview</h2>
      <p style={{color: props.mode === 'dark'?'white':'black'}}>{text.length>0?text:"Enter something to preview it here !!"}</p>

    </>
  );
}
