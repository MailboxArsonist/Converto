import {useState} from "react";

export const Test = (colors, initialColor) => {
  
  const colorsLength = colors.length;
  const [color, setColor] = useState(initialColor);
  const changeColor = (param) => {
    console.log(param)
    const index = Math.floor(Math.random() * colorsLength);
    const currentColor = colors[index];
    setColor(currentColor);
  }
  return [color, changeColor];
}