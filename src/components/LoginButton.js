import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = ({ onClick, children }) => (
  <button type="submit" onClick={onClick} className="login-button">
    {children}
  </button>
);

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoginButton;