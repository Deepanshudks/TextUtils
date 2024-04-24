import React, { useState } from 'react'


export default function Textform(props) {
  // const clear =()=>{
  //   setText("");
  // }
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted into UpperCase", "success")
  }
  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted into LowerCase", "success")

  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const deletetxt = () => {
    setText("")
    props.showAlert("Text has been cleared", "danger")
  }
  const copyCb = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied to Clipboard", "success")
  }
  const [text, setText] = useState("");
  // text = "new text";  // worng way to change text
  // setText = "new text"  // correct way to change texts
  return (
    <>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

      <h1>{props.heading}</h1>
      <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}  >
        <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#80808017' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to UpperCase</button>
      <button className="btn btn-primary mx-3 my-2" onClick={handleLwClick} >Convert to LowerCase</button>
      <button className="btn btn-success mx-2 my-2" onClick={copyCb} >Copy to Clipboard</button>
      <button className="btn btn-danger mx-2 my-2" onClick={deletetxt} >Clear</button>
      <div className="container my-2">
        <h3>Your text summary</h3>
        <p>{text.split(" ").filter((elem)=>{return elem.length !==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <h6>{text}</h6>
      </div>
    </div>
    </>
  )
}


