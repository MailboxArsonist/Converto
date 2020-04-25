import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    id,
    className,
    handleClick,
    children,
  } = props;

  return (
    <button
      id={id}
      type="button"
      className={className}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  id: "",
  className: "",
  handleClick: () => false,
};

export default Button;
