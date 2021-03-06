import React, { useState } from "react";
import Input from "../Input";

const ColorPicker = () => {
  const [color, changeColor] = useState("#fefefe");
  const [img, setImg] = useState();
  const canvasRef = React.createRef();

  function uploadImage(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setImg(reader.result);
    };

    reader.readAsDataURL(file);
  }

  /**
   * Converts component to hex
   */
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  /**
   * Converts RGB to hex
   */
  function rgbToHex(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }

  /**
   * Draws image to canvas
   */
  function handleCanvas(element, image) {
    return new Promise((resolve, reject) => {
      try {
        const el = element;
        el.width = image.width;
        el.height = image.height;
        // draw image in canvas tag
        el.getContext("2d").drawImage(image, 0, 0, image.width, image.height);
        resolve(el);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Inits eye dropper
   */
  function handleEyeDropper(syntheticEvent) {
    // Persist synthtic event so values are not nullified
    syntheticEvent.persist();
    const e = syntheticEvent.nativeEvent;
    const x = e.offsetX;
    const y = e.offsetY;

    // Draw canvas for image
    handleCanvas(canvasRef.current, e.target).then((el) => {
      // get image data
      const p = el.getContext("2d").getImageData(x, y, 1, 1).data;
      const hex = rgbToHex(p[0], p[1], p[2]);

      // Set color value
      changeColor(hex);
    });
  }

  return (
    <>
      <h1 className="text-3xl text-center mb-10">Image Eyedropper</h1>

      <p className="text-center mb-6">Upload an image and then click on an area to preview a color.</p>

      <div className="flex mx-auto flex-col justify-center items-center">

        {/* Canvas for image draw (is hidden)  */}
        <canvas ref={canvasRef} className="hidden" />

        <img src={img} className="max-w-md w-full mb-10 cursor-crosshair" onClick={e => handleEyeDropper(e)} />

        <div className="flex items-center mb-6">
          <div style={{ backgroundColor: color }} className="w-16 h-16 block rounded-lg border-4 border-black" />
          <Input className="border rounded shadow p-2 ml-3" value={color} readonly />
        </div>

        <label className="block w-5/6 md:w-1/2 text-center border rounded block mx-auto text-white px-2 py-3 bg-purple-700 hover:bg-purple-800 cursor-pointer" htmlFor="image-upload">
          Upload an image
          <Input className="hidden" type="file" id="image-upload" handleInput={(e) => uploadImage(e)} />
        </label>

      </div>
    </>
  );
};
export default ColorPicker;
