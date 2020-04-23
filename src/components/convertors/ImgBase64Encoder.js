import React, { useState, useRef } from "react";
import Input from "../Input";

const ImgBase64Encoder = () => {
  const [img, changeImg] = useState();
  const encodedImgRef = useRef(null);
  const [urlCopied, setUrlCopied] = useState(false);

  function uploadImage(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => (changeImg(reader.result));

    reader.readAsDataURL(file);
  }

  // Copies the decoded url to user clipboard
  function handleCopy() {
    encodedImgRef.current.select();
    document.execCommand("copy");
    setUrlCopied(true);
  }

  // Copies input to clipboard wrapped in a html tag
  function handleCopyAsImgTag() {
    encodedImgRef.current.select();
    const input = document.createElement("input");
    input.value = `<img src='${encodedImgRef.current.value}'>`;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }

  return (
    <>
      <h1 className="text-3xl text-center mb-10">Image to Base 64</h1>

      <p className="text-center mb-6">Upload an image and preview your Base64 string.</p>

      <div className="flex mx-auto flex-col justify-center items-center">
        <div className="flex mb-4">
          {img && <img src={img} className="w-40 h-auto object-contain" alt="upload-preview" />}
          <div className="flex flex-col items-center justify-center ml-4">
            <Input refProp={encodedImgRef} className="border rounded shadow p-2 w-full mb-3" value={img} readonly />
            <div className="flex items-center justify-between">
              <button onClick={handleCopy} type="button" className="text-center border rounded block mx-auto text-white px-2 py-3 bg-purple-700 hover:bg-purple-800">
                Copy
              </button>
              <button onClick={handleCopyAsImgTag} type="button" className="text-center border rounded block mx-auto text-white px-2 py-3 bg-purple-700 hover:bg-purple-800 ml-2">
                Copy as img tag
              </button>
            </div>
          </div>
        </div>

        <label className="block w-5/6 md:w-1/2 text-center border rounded block mx-auto text-white px-2 py-3 bg-purple-700 hover:bg-purple-800 cursor-pointer" htmlFor="image-upload">
          Upload an image
          <Input className="hidden" type="file" id="image-upload" handleInput={(e) => uploadImage(e)} />
        </label>

      </div>
    </>
  );
};
export default ImgBase64Encoder;
