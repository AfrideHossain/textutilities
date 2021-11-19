import React, { useState } from 'react'


export default function TextForm(props) {

    const upperCaseHandle = () => {
        // console.log("upperCaseHandle was clicked.");
        let newTxt = text.toUpperCase(); // we declare a let variable because we can't perform this action into setText function
        setText(newTxt);
    }

    const lowerCaseHandle = () => {
        // console.log("upperCaseHandle was clicked.");
        let newTxt = text.toLowerCase(); // we declare a let variable because we can't perform this action into setText function
        setText(newTxt);
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
    let words = text.split(" ").length;
    function estTime(word) {
        let time = 0.48 * (word - 1);
        if (time > 60) {
            return (time / 60).toFixed(2) + " Minutes";
        } else {
            return time.toFixed(2) + " Seconds";
        }
    }
    // let time = estTime(words);

    return (
        <>
            <div className="container">
                <h1> {props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} placeholder="Enter your text here" onChange={onchangeHandler} id="myTxtBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-1 mx-1" onClick={upperCaseHandle}>CONVERT TO UPPERCASE</button>
                <button className="btn btn-primary my-1 mx-1" onClick={lowerCaseHandle}>convert to lowercase</button>
            </div>
            <div className="container my-3">
                <h2>Text summery</h2>
                <hr />
                <b>{words - 1} Words {text.length} Characters</b>
                <br />
                <b>{estTime(words)} need to read</b>
            </div>
        </>
    )
}
