import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    id,
    className,
    handleClick,
    text,
  } = props;

  return (
    <button
      id={id}
      type="button"
      className={className}
      onClick={(e) => handleClick(e)}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  id: "",
  className: "",
  text: "",
  handleClick: () => false,
};

export default Button;
