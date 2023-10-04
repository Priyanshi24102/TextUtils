import React ,{useState} from "react";
import copy from "copy-to-clipboard";

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick=()=>{
      let newText="";
      setText(newText);
      props.showAlert("Text cleared","success");
    }
    const handleExtractClick=()=>{
        let newText=text.replace(/\s+/g,"");
        setText(newText);
        props.showAlert("Text Extracted!","success");
    }
    const handleCopyClick=()=>{
        copy(text);
        props.showAlert("You have copied "+text ,"success")
    }
    const [text,setText]=useState('Enter text here');
 
 
    return (
        <>
    <div className="container"   style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
        value={text}
          className="form-control"
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'#13466e':'white' , color: props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}  >Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}  >Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}  >Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtractClick}  >Extract Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}  >Copy to Clipboard</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>Number of sentences: {text.split(".").length -1 }</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
