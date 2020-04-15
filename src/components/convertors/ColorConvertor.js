import React, { useState } from 'react';

const ColorConvertor = () => {
  const [selectedHex, setSelectedHex] = useState("#9db2e8");
  const [selectedRgb, setSelectedRGB] = useState("rgb(157,178,232)");

  function isValidColor(color) {
    const el = document.createElement('div');
    el.style.backgroundColor = color;
    return el.style.backgroundColor ? true : false;
  }

  function validateHex(hex) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
  }

  function HexToRGB(hex) {
    let r = 0, g = 0, b = 0;

    // 3 digits
    if (hex.length == 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];

    // 6 digits
    } else if (hex.length == 7) {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
    }
  
    return "rgb("+ +r + "," + +g + "," + +b + ")";
  }

  function componentToHex(c) {
    let hex;
    if(typeof c === 'string') {
      hex = parseInt(c)
    }
    hex = hex.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function RGBToHex(rgb) {
    let cut = rgb.split("(")[1].split(")")[0];
    cut = cut.split(",");
    let r = componentToHex(cut[0]);
    let g = componentToHex(cut[1]);
    let b = componentToHex(cut[2]);
    return "#" + r + g + b;
  }

  function setColorsFromHex(hex) {
    setSelectedHex(hex);

    // Don't set rgb values if hex isn't valid
    if(!validateHex(hex)) return;

    const rgb = HexToRGB(hex);
    setSelectedRGB(rgb);
  }

  function setColorsFromRGB(rgb) {
    setSelectedRGB(rgb);

    // Don't set hex values if rgb isn't valid
    if(!isValidColor(rgb)) return;

    const hex = RGBToHex(rgb);
    setSelectedHex(hex);
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