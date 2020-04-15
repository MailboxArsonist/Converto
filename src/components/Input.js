import React from 'react';
import PropTypes from 'prop-types';

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