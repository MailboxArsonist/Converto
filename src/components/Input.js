import React from "react";
import PropTypes from "prop-types";


const Input = (props) => {
  const {
    id,
    value,
    type,
    className,
    handleInput,
    placeholder,
    readonly,
  } = props;

  return (
    <input
      id={id}
      value={value}
      type={type}
      className={className}
      onChange={(e) => handleInput(e)}
      placeholder={placeholder}
      readOnly={readonly}
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
    PropTypes.number,
  ]),
  handleInput: PropTypes.func,
  readonly: PropTypes.bool,

};

Input.defaultProps = {
  id: "",
  placeholder: "",
  type: "text",
  className: "",
  value: "",
  handleInput: () => false,
  readonly: false,
};

export default Input;
