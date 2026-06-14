import { useState } from "react"


function TextForm() {
    
    const toUppcase = () => {
        let txUppercase = text.toUpperCase()
        setText(txUppercase)
    }

    const tolowercase = () => {
        let txLowercase = text.toLowerCase()
        setText(txLowercase)
    }

    const coppyText = () => {
        let textvalue = document.querySelector("#textbox")
        textvalue.select();
        navigator.clipboard.writeText(textvalue.value)
    }

    const handelValue = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

   

    return (
        <div>
        <div className="container mt-5">
            <h3>Enter Your Text</h3>
            <div className="form-floating">
                <textarea id="textbox" className="form-control" style={{"height" : "180px"}} placeholder="Enter Your text" value={text}  onChange={(handelValue)} />
                
            </div>
            <button type="button" className="btn btn-primary mt-2" onClick={toUppcase}>To Uppercase</button>
            <button type="button" className="btn btn-primary mt-2 mx-2" onClick={tolowercase}>To Lowercase</button>

            <button type="button" className="btn btn-primary mt-2 mx-2" onClick={coppyText}>Copy Text</button>
        </div>
        <div className="container mt-3">
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} Words {text.length} characters</p>
        </div>
        </div>
    )

}

export default TextForm