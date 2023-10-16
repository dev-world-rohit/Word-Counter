import React, { useState, createContext } from "react";

const ContentContext = createContext();

function Provider({ children }) {
    // This use state is used for the setting the value in text area
    const [content, setContent] = useState("");

    const setNewContent = (newContent) => {
        setContent(newContent);
        changeNumberOfWords();
        changeNumberOfCharacters();
        changeNumberOfSentences();
        changeNumberOfParagraphs();
    };

    // Now we are setting the number of Words in the text
    const [numberOfWords, setNumberOfWords] = useState(0);

    const changeNumberOfWords = () => {
        let newCount = content.split(" ").length;
        setNumberOfWords(newCount);
    };

    // Now we are setting the number of Characters in the text
    const [numberOfCharacters, setNumberOfCharacters] = useState(0);

    const changeNumberOfCharacters = () => {
        let newCount = content.length;
        setNumberOfCharacters(newCount);
    };

    // Now we are setting the number of Sentences in the text
    const [numberOfSentences, setNumberOfSentences] = useState(0);

    const changeNumberOfSentences = () => {
        let newCount = content.split(".").length;
        setNumberOfSentences(newCount);
    };

    // Now we are setting the number of Paragraphs in the text
    const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);

    const changeNumberOfParagraphs = () => {
        let newCount = 0;
        const newContent = content.split('\n');
        console.log(newContent);
        for (let i = 0; i < newContent.length; i++) {
                if (newContent[i].length > 0) {
                    newCount += 1;
                }
                console.log(newCount)
        };
        setNumberOfParagraphs(newCount);
    };

    const valueToShare = {
        content,
        setNewContent,
        numberOfWords,
        numberOfCharacters,
        numberOfSentences,
        numberOfParagraphs,
    };

    return (
        <ContentContext.Provider value={valueToShare}>
            {children}
        </ContentContext.Provider>
    );
}

export { Provider };
export default ContentContext;
