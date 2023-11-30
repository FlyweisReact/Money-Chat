/** @format */

import React from "react";

const CopyText = ({ text }) => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard:", text);
    } catch (err) {
      console.error("Unable to copy text to clipboard", err);
    }
  };
  return <button onClick={handleCopyToClipboard} className='copy_text_btn' >
  <i class="fa-solid fa-copy"></i>
  Copy to Clipboard</button>;
};

export default CopyText;