import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const initialText = "M";
  const dataText = "M Hamza";

  useEffect(() => {
    const delay = 50; // Adjust the delay between characters (in milliseconds)

    // Function to simulate typing
    const typeText = (text, index) => {
      if (index < text.length) {
        setText(text.substring(0, index + 1));
        setTimeout(() => {
          typeText(text, index + 1);
        }, delay);
      }
    };

    // Type the data-text attribute text after a delay
    setTimeout(() => {
      typeText(dataText, 0);
    }, 2000); // Delay before typing data-text (in milliseconds)
  }, []);

  return (
    <div>
      <p>{text || initialText}</p>
      <p data-text={dataText}></p>
    </div>
  );
};

export default TypingEffect;
