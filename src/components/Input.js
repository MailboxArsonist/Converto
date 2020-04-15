import React from 'react';
import PropTypes from 'prop-types';

//E.G. <Input id="text" className="border rounded shadow p-2 ml-3" type="text" value={color} readonly={true} handleInput={ e => changeColor(e.target.value) } />
const Input = (props) => {
  return (
    <input 
      id={props.id}
      value={props.value}
      type={props.type}
      className={props.className}
      onChange={ e => props.handleInput(e) }
      placeholder={props.placeholder}
      readOnly={props.readonly}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  handleInput: PropTypes.func,
  readonly: PropTypes.bool

};

Input.defaultProps = {
  id: "",
  placeholder: "",
  type: "text",
  className: "",
  value: "",
  handleInput: () => false,
  readonly: false
};

export default Input;