import React from 'react';

const LoginOptionButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="login-option-button">
      {label}
    </button>
  );
};

export default LoginOptionButton;