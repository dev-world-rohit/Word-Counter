import React from "react";
import TextBox from "./components/textbox";
import Values from "./components/values";

function App() {
    return (
        <div>
            <h1>Word Counter</h1>
            <div className="container">
                <TextBox />
                <Values />
            </div>
        </div>
    );
}

export default App;
