import React, { useState } from 'react';

const ColorConvertor = () => {
  const [selectedHex, setSelectedHex] = useState("#da4d69");
  const [selectedRgb, setSelectedRGB] = useState("#da4d69");

  function HexToRGB(hex) {
    const slicedHex = hex.replace('#','');
    const r = parseInt(slicedHex.substring(0,2), 16);
    const g = parseInt(slicedHex.substring(2,4), 16);
    const b = parseInt(slicedHex.substring(4,6), 16);
    const result = 'rgb(' + r + ',' + g + ',' + b + ')';
    return result;
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function RGBToHex(rgb) {
    console.log(rgb);
    let cut = rgb.split("(")[1].split(")")[0];
    cut = cut.split(",");
    let r = cut[0].toString(16);
    let g = cut[1].toString(16);
    let b = cut[2].toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

  function setColorsFromHex(hex) {
    const rgb = HexToRGB(hex);
    setSelectedRGB(rgb);
    setSelectedHex(hex);
  }
  function setColorsFromRGB(rgb) {
    const hex = RGBToHex(rgb);
    setSelectedHex(hex);
    setSelectedRGB(rgb);
  }

  
  return (
    <>
      <h1 className="text-3xl text-center mb-10">Color Convertor</h1>

      <p className="text-center mb-6">Use the color picker below or enter a color into the inputs.</p>

      <div className="flex mx-auto flex-col justify-center items-center">

        <label htmlFor="colorPicker" className="w-48 h-48 bg-teal-900 block rounded-lg border-4 border-black cursor-pointer mb-6" style={{ backgroundColor: selectedHex }}>
          <input className="hidden" name="colorPicker" id="colorPicker" type="color" value={selectedHex} onChange={ e => setColorsFromHex(e.target.value) }/>
        </label>

        <label htmlFor="hex" className="font-semibold mb-4">
          Hex:
          <input id="hex" className="border rounded shadow p-2 ml-3" type="text" value={selectedHex} onChange={ e => setColorsFromHex(e.target.value) } />
        </label>

        <label htmlFor="rgb" className="font-semibold mb-6">
          Rgb:
          <input id="rgb" className="border rounded shadow p-2 ml-3" type="text" value={selectedRgb} onChange={ e => setColorsFromRGB(e.target.value) } />
        </label>
      </div>

    </>
  );
};
export default ColorConvertor;