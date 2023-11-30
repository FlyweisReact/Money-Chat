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
  return <div>CopyText</div>;
};

export default CopyText;
