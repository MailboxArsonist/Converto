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
  className: "text-center border rounded block mx-auto text-white px-2 py-3 bg-purple-700 hover:bg-purple-800 ml-2",
  handleClick: () => false,
};

export default Button;
