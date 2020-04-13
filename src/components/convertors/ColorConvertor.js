import React, { useState } from 'react';

const ColorConvertor = () => {
  const [selectedColor, setSelectedColor] = useState("#fff");

  function setColorsFromHex(hex) {
    setSelectedColor(hex);
  }
  
  return (
    <>
      <h1 className="text-3xl text-center mb-10">Color Convertor</h1>

      <p className="text-center mb-6">Use the color picker below or enter a color into the inputs.</p>

      <div className="flex mx-auto flex-col justify-center items-center">

        <label htmlFor="colorPicker" className="w-48 h-48 bg-teal-900 block rounded-lg border-4 border-black cursor-pointer mb-6" style={{ backgroundColor: selectedColor }}>
          <input className="hidden" name="colorPicker" id="colorPicker" type="color" value={selectedColor} onChange={ e => setColorsFromHex(e.target.value) }/>
        </label>

        <label htmlFor="hex" className="font-semibold">
          Hex:
          <input id="hew" className="border rounded shadow p-2 ml-3" type="text" value={selectedColor} onChange={ e => setColorsFromHex(e.target.value) } />
        </label>
      </div>

    </>
  );
};
export default ColorConvertor;