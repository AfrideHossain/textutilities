import React from 'react'

export default function About(props) {
    const myStyleFbody = {
        backgroundColor: props.mode === "dark" ? "#212529e5" : "#FFF",
        color: props.mode === "dark" ? "#FFF" : "#212529e5"
    };
    const myStyleFbtn = {
        backgroundColor: props.mode === "dark" ? "#343a40" : "#FFF",
        color: props.mode === "dark" ? "#FFF" : "#343a40"
    };
    return (
        <div className="container my-3">
            <div className="accordion" id="accordionExample">
                <div style={myStyleFbody} className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button style={myStyleFbtn} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtilities is an easy to use online tool.</strong> That allows you to count words and characters from given text in real time, along with how many times will needed to read the text.
                        </div>
                    </div>
                </div>
                <div style={myStyleFbody} className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={myStyleFbtn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Manipulate your text
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtilities allows you to play with your text.</strong> Using TextUtilities you can manipulate your text. Like, you can transform your text to uppercase and lowercase. Also you can remove extra spaces form your text.
                        </div>
                    </div>
                </div>
                <div style={myStyleFbody} className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button style={myStyleFbtn} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtilities is free to use.</strong> TextUtilities allows you to analyze and manipulate your text for absolutely free of cost. Also this application is works well in any browser such as Chrome, FireFox, Internet Explorer, Safari, Opera.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
