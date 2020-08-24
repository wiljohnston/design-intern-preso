import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Button = ({ className, color, onClick, text, transparent, style }) => {
  return (
    <motion.div
      style={style}
      className={`${className}`}
      whileHover={{
        scale: 1.025
      }}
      whileTap={{ scale: 0.975 }}
    >
      <button
        type="button"
        className={`button button--${color} ${
          transparent ? `button--transparent` : ``
        } ${className} relative b1`}
        onClick={onClick}
      >
        {text}
      </button>
    </motion.div>
  );
};

Button.defaultProps = {
  color: ``,
  className: ``,
  onClick: () => {},
  text: `Button`,
  transparent: false,
  style: {}
};

Button.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  transparent: PropTypes.bool,
  style: PropTypes.shape({})
};

export default Button;
