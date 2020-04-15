import React from 'react';

const ColorPicker = () => {
  
  return (
    <>
      <h1 className="text-3xl text-center mb-10">Color Picker</h1>

      <p className="text-center mb-6">Upload an image and then hover on the image to preview a color. Click to select the color.</p>

      <div className="flex mx-auto flex-col justify-center items-center">

          <input type="image" />
      </div>

    </>
  );
};
export default ColorPicker;