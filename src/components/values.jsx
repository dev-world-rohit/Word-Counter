import React, { useContext } from "react";
import ContentContext from "../context/words";

function Values() {
    const {
        numberOfWords,
        numberOfCharacters,
        numberOfSentences,
        numberOfParagraphs,
    } = useContext(ContentContext);

    return (
        <div className="output-container">
            <div className="output">
                <p className="words">Words</p>
                <span data-word-count>{numberOfWords}</span>
            </div>
            <div className="output">
                <p className="characters">Characters</p>
                <span data-character-count>{numberOfCharacters}</span>
            </div>
            <div className="output">
                <p className="sentences">Sentences</p>
                <span data-sentence-count>{ numberOfSentences }</span>
            </div>
            <div className="output">
                <p className="paragraphs">Paragraphs</p>
                <span data-paragraph-count>{ numberOfParagraphs }</span>
            </div>
        </div>
    );
}

export default Values;
