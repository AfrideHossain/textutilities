import React, { useState } from 'react'


export default function TextForm(props) {

    const upperCaseHandle = () => {
        // console.log("upperCaseHandle was clicked.");
        let newTxt = text.toUpperCase(); // we declare a let variable because we can't perform this action into setText function
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
    const [text, setText] = useState();
    return (
        <div>
            <h1> {props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder="Enter your text here" onChange={onchangeHandler} id="myTxtBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={upperCaseHandle}>Convert to Uppercase</button>
        </div>
    )
}
