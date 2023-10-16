import React, { useContext } from "react";
import ContentContext from "../context/words";

function TextBox() {
    const { content, setNewContent } = useContext(ContentContext);

    function changeText(e) {
        const newText = e.target.value;
        setNewContent(newText);
    }

    return (
        <textarea
            value={content}
            placeholder="Enter your text here..."
            onChange={changeText}
        ></textarea>
    );
}

export default TextBox;
