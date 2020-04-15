import React, { useState } from 'react';

const ColorPicker = () => {

  const [img, setImg] = useState();

  function uploadImage(e){
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImg(reader.result);
    }

    reader.readAsDataURL(file)
  }
  
  return (
    <>
      <h1 className="text-3xl text-center mb-10">Color Picker</h1>

      <p className="text-center mb-6">Upload an image and then hover on the image to preview a color. Click to select the color.</p>

      <div className="flex mx-auto flex-col justify-center items-center">

        <img src={img} className="max-w-md w-full mb-10" />

        <label className="block w-5/6 md:w-1/2 text-center border rounded block mx-auto text-white px-2 py-3 bg-purple-700 hover:bg-purple-800 cursor-pointer" htmlFor="image-upload">
          Upload an image <input className="hidden" type="file" id="image-upload" onChange={ e => uploadImage(e) } />
        </label>

      </div>

    </>
  );
};
export default ColorPicker;