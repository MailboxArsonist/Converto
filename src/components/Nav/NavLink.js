import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { href, text } = props;
  return (
    <Link to={href} className="block mt-8 lg:inline-block lg:mt-0 lg:py-0 text-purple-800 font-semibold hover:text-purple-900 text-base mr-4">{text}</Link>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default NavLink;
