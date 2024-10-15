import React,{useState} from 'react'

export default function TextForm(props) {

  const handleupClick =()=>{
    console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase");
  }

  const handleOnchng=(event)=>{
    console.log("on changes");
    setText(event.target.value);
  }
  //...........
  const handlelowClick=()=>{
    console.log(text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase");
  }
  //......
  
  const handleclearClick =()=>{
   
    let newText = "";
    setText(newText);
  }
  //....
  const handleCopy =()=>{
    console.log("copy")
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied!!");
  }
  //..........
  const handleExtraSpaces =()=>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed");
  }

const[text,setText] = useState(" ");


  return (
    <>
   <div className='container my-3' >
      <h1 className='my-4 mx-3'  style={{
  backgroundColor: props.mode === "dark" ? "#001F3F" : "white",
  color: props.mode === "dark" ? "white" : "black" // Ensure text is readable
}}>Enter Text To Analyze Below</h1>
      
  <textarea className="form-control" value={text} id="mybox" onChange={handleOnchng} rows="8" 
 style={{
  backgroundColor: props.mode === "dark" ? "grey" : "white",
  color: props.mode === "dark" ? "white" : "black" // Ensure text is readable
}}
  ></textarea>
  <div className='hell my-3'>
  <button type="button" className="btn btn-primary mx-1" onClick={handleupClick}>Change to UppperCase</button>
  <button type="button" className="btn btn-primary mx-1"  onClick={handlelowClick}>Change to LowerCase</button>
  <button type="button" className="btn btn-primary mx-1"  onClick={handleclearClick}><ion-icon name="trash-outline"></ion-icon> Clear</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


  </div>
    </div>
    <div className='container my-2'  style={{
  backgroundColor: props.mode === "dark" ? "#001F3F" : "white",
  color: props.mode === "dark" ? "white" : "black" // Ensure text is readable
}}>
      <h2>Your Text Summary</h2>
      <p><b>{text.split(" ").length} Words and {text.length} Characters</b></p>
      <p>{0.008 * text.split(" ").length} Minutes to Read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something here to preview it.. "}</p>
    
    </div>
    </>
  )
}


