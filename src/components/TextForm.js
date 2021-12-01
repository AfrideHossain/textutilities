import React, { useState } from 'react'


export default function TextForm(props) {

    const upperCaseHandle = () => {
        // console.log("upperCaseHandle was clicked.");
        let newTxt = text.toUpperCase(); // we declare a let variable because we can't perform this action into setText function
        setText(newTxt);
        props.showAlert("Converted to uppercase", "success");
    }

    const lowerCaseHandle = () => {
        // console.log("upperCaseHandle was clicked.");
        let newTxt = text.toLowerCase(); // we declare a let variable because we can't perform this action into setText function
        setText(newTxt);
        props.showAlert("Converted to lowercase", "success");
    }

    const clearHandle = () => {
        setText("");
        props.showAlert("Text cleared", "success");
    }

    const copyHandle = () => {
        let copiedTxt = document.getElementById("myTxtBox");
        copiedTxt.select();
        // navigator.clipboard.writeText = text;
        navigator.clipboard.writeText(copiedTxt.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const extraSpacesHandle = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const onchangeHandler = (event) => {
        // console.log("onchangeHandler triggered.");
        setText(event.target.value);
    }

    /* const [text, setText] = useState("Enter text here"); */ /* Here text is used as a state variable.
                                                            setText is used as a callback function
                                                            because we can't change a state variable
                                                            directly.
                                                            we use const because we want to read the
                                                            variable from anywhere.
                                                         */
    const [text, setText] = useState("");
    let words = wordCounter();

    function wordCounter() {
        let words = text.split(" ").filter((elm) => {
            return elm.length !== 0;
        });
        return words.length;
    }

    function estTime(word) {
        let time = 0.48 * word;
        if (time > 60) {
            return (time / 60).toFixed(2) + " Minutes";
        } else {
            return time.toFixed(2) + " Seconds";
        }
    }
    // let time = estTime(words);

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "#FFF" : "#212529e5" }}>
                <h1> {props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{
                        backgroundColor: props.mode === "dark" ? "#212529e5" : "#FFF",
                        color: props.mode === "dark" ? "#FFF" : "#212529e5"
                    }} value={text} placeholder="Enter your text here" onChange={onchangeHandler} id="myTxtBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={upperCaseHandle}>CONVERT TO UPPERCASE</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={lowerCaseHandle}>convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={clearHandle}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={copyHandle}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={extraSpacesHandle}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "#FFF" : "#212529e5" }}>
                <h2>Text summery</h2>
                <hr />
                <b>{wordCounter()} Words {text.length} Characters</b>
                <br />
                <b>{estTime(words)} need to read</b>
            </div>
        </>
    )
}
