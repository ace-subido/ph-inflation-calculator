import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string,
  socialNetwork: PropTypes.string
}

const ShareButton = ({
  link,
  icon,
  socialNetwork
}) => {
  return(
    <a className={`${icon} btn share-btn`} href={link}>
      Share on {socialNetwork}
    </a>
  )
}

ShareButton.propTypes = propTypes

export default ShareButton
