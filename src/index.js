import React from 'react';
import PropTypes from 'prop-types';
import './AnimatedLink.css'

const AnimatedLink = ({ text, href, className, onClick }) => {
  if (href) {
    return (
      <a href={href} target="_blank" className={`${styles.AnimatedLink} ${className}`}>
        {text}
      </a>
    );
  }
  return (
    <a onClick={onClick} className={`${styles.AnimatedLink} ${className}`}>
      {text}
    </a>
  );
};

AnimatedLink.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
};

AnimatedLink.defaultProps = {
  link: null,
  href: null,
  className: '',
  onClick: () => {},
};

export default AnimatedLink;
