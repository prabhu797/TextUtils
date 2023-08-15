import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase Was clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase.","success");
    }

    const handleLowClick = () => {
        // console.log("Uppercase Was clicked." + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase.","success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text to clipboard.", "success");
    }

    const handleClear = () => {
        setText('');
    }

    const wordCount = () => {
        if(text) {
            if(text.charAt(text.length - 1) === ' ') {
                return text.split(" ").length - 1;
            }
            return text.split(" ").length;
        }
        return 0;
    }

    const styleObj = (mode, bgColor) => {
        if(bgColor) {
            return {
                backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                color: props.mode === 'light' ? 'black' : 'white'
            };
        } else {
            return {color: props.mode === 'light' ? 'black' : 'white'};
        }
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={styleObj(props.mode,false)}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={styleObj(props.mode,true)} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-warning mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button type="button" className="btn btn-success mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to clipboard</button>
        <button type="button" className="btn btn-secondary mx-2 my-2" onClick={handleClear}>Clear text</button>
    </div>
    <div className="container my-3" style={styleObj(props.mode,false)}>
        <h2>Your text summary</h2>
        <p>{wordCount()} words and {text.length} characters</p>
        <p>This can be read in {0.008 * text.split(" ").length} minutes.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
