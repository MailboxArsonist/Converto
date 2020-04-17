import React, { useState } from "react";
import Input from "../Input"

const ColorPicker = () => {

  const [color, changeColor] = useState("#fefefe");
  const [img, setImg] = useState();
  const [eyeDropperOpen, setEyeDropperOpen] = useState(true);
  const canvasRef = React.createRef();

  function uploadImage(e){
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImg(reader.result);
    }

    reader.readAsDataURL(file)
  }

  /**
   * Inits eye dropper
   */
  async function handleMouseMove(e) {
    console.log(e);
    console.log(canvasRef.current);
    const x = e.offsetX;
    const y = e.offsetY;

    // Draw canvas for image
    handleCanvas(canvasRef.current, e.target).then((el) => {
      //get image data
      console.log(el.getContext('2d'))
      const p = el.getContext('2d').getImageData(x, y, 1, 1).data;
      const hex = rgbToHex(p[0],p[1],p[2]);
          
      // Set color value
      changeColor(hex)
  
      if(e.type === "click") {
        // Set eye dropper open to false, will remove mouseover function
        setEyeDropperOpen(false)
      }
    })
  }

  /**
   * Draws image to canvas
   */
  function handleCanvas(el, image) {
    return new Promise((resolve, reject) => {
      try {
        el.width = image.width;
        el.height = image.height;
        // draw image in canvas tag
        el.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
        resolve(el);
      } catch (error) {
        reject(error);
      }
    })
  }

  /**
   * Converts component to hex
   */
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  /**
   * Converts RGB to hex
   */
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
  return (
    <>
      <h1 className="text-3xl text-center mb-10">Image Eyedropper</h1>

      <p className="text-center mb-6">Upload an image and then hover on the image to preview a color. Click to select the color.</p>

      <div className="flex mx-auto flex-col justify-center items-center">

      <canvas ref={canvasRef} className="hidden" />

        <img src={img} className="max-w-md w-full mb-10 cursor-crosshair" onMouseMove={e => handleMouseMove(e)} onClick={e => handleMouseMove(e)} />

        <div className="flex items-center mb-6">
          <div style={{ backgroundColor: color }} className="w-16 h-16 block rounded-lg border-4 border-black"></div>
          <Input className="border rounded shadow p-2 ml-3" value={color} readonly={true} />
        </div>


        <label className="block w-5/6 md:w-1/2 text-center border rounded block mx-auto text-white px-2 py-3 bg-purple-700 hover:bg-purple-800 cursor-pointer" htmlFor="image-upload">
          Upload an image <Input className="hidden" type="file" id="image-upload" handleInput={ e => uploadImage(e) } />
        </label>

      </div>
    </>
  );
};
export default ColorPicker;