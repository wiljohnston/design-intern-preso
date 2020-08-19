import React from "react";
import PropTypes from "prop-types";
import spaceshipFrame from "~assets/images/spaceship-frame.png";
import staticGIF from "~assets/images/static.gif";

const Spaceship = ({ className }) => {
  return (
    <div className={className}>
      <figure className="w-full relative">
        <img
          src={staticGIF}
          alt="static"
          className="w-1/2 absolute -z-10 transform-center"
        />

        <img
          alt="spaceship"
          className="w-full relative block"
          src={spaceshipFrame}
        />
      </figure>
    </div>
  );
};

Spaceship.defaultProps = {
  className: ``
};

Spaceship.propTypes = {
  className: PropTypes.string
};

export default Spaceship;
