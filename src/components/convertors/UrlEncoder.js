import React, { useState, useRef } from 'react';

const UrlEncoder = () => {

  // Use state
  const [urlInput, setUrlInput] = useState("");
  const [encodedUrl, setEncodedUrl] = useState("");
  const [urlCopied, setUrlCopied] = useState(false);
  const textAreaRef = useRef(null);

  // Encodes url
  function encodeUrl(string){
    return encodeURIComponent(string);
  }
  
  // Handle input change, set url input then encode url for output
  function handleInput(string){
    setUrlInput(string);
    setEncodedUrl(encodeUrl(string));
  }

  // Copies the encoded url to user clipboard
  function handleCopy(e){
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setUrlCopied(true);
  }

  return (
    <>
      <h1 className="text-3xl text-center mb-10">URL Encoder</h1>

      <p className="text-center mb-4">Enter your url to encode in the box below.</p>

      <textarea value={ urlInput } onChange={ e => handleInput(e.target.value) } className="mx-auto border shadow rounded block w-5/6 md:w-1/2 mb-10 p-3" placeholder="URL goes here" name="url-input" id="url-input" cols="30" rows="8" />
      <textarea ref={textAreaRef} value={ encodedUrl } className="mx-auto border shadow rounded block w-5/6 md:w-1/2 p-3 mb-4" name="url-output" id="url-output" cols="30" rows="8" readOnly />
      
      <button onClick={handleCopy} type="button" className="w-5/6 md:w-1/2 text-center border rounded block mx-auto text-white px-2 py-2 bg-purple-700 hover:bg-purple-800">
        { urlCopied ? "URL copied" : "Copy Encoded URL" }
      </button>
    </>
  );
};
export default UrlEncoder;