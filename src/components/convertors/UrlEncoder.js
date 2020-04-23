import React, { useState, useRef } from "react";

const UrlEncoder = () => {
  // Use state
  const [urlInput, setUrlInput] = useState("");
  const [encodedUrl, setEncodedUrl] = useState("");
  const [urlCopied, setUrlCopied] = useState(false);
  const textAreaRef = useRef(null);

  // Encodes url
  function encodeUrl(string) {
    return encodeURIComponent(string);
  }

  // Handle input change, set url input then encode url for output
  function handleInput(string) {
    setUrlInput(string);
    setEncodedUrl(encodeUrl(string));
  }

  // Copies the encoded url to user clipboard
  function handleCopy() {
    textAreaRef.current.select();
    document.execCommand("copy");
    setUrlCopied(true);
  }

  return (
    <>
      <h1 className="text-3xl text-center mb-10">URL Encoder</h1>

      <p className="text-center mb-4">Enter your url to encode in the box below.</p>

      <textarea value={urlInput} onChange={(e) => handleInput(e.target.value)} className="mx-auto border shadow rounded block w-5/6 md:w-1/2 mb-10 p-3" placeholder="URL goes here..." name="url-input" id="url-input" cols="30" rows="8" />
      <textarea ref={textAreaRef} value={encodedUrl} className="mx-auto border shadow rounded block w-5/6 md:w-1/2 p-3 mb-4" placeholder="Et voila, now it's encoded!" name="url-output" id="url-output" cols="30" rows="8" readOnly />

      <button onClick={handleCopy} type="button" className="w-5/6 md:w-1/2 text-center border rounded block mx-auto text-white px-2 py-3 bg-purple-700 hover:bg-purple-800">
        {/* If url has been copied display success message */}
        {
          urlCopied
            ? (
              <span className="flex items-center justify-center fill-current">
                <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 26" width="20" height="20">
                  <path d="M17.62 10H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8.5c-1.2 0-2.3-.72-2.74-1.79l-3.5-7-.03-.06A3 3 0 0 1 5 9h5V4c0-1.1.9-2 2-2h1.62l4 8zM16 11.24L12.38 4H12v7H5a1 1 0 0 0-.93 1.36l3.5 7.02a1 1 0 0 0 .93.62H16v-8.76zm2 .76v8h2v-8h-2z" />
                </svg>
                URL copied
              </span>
            )
            : "Copy Encoded URL"
        }
      </button>
    </>
  );
};
export default UrlEncoder;
