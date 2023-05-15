/** @jsxImportSource @emotion/react */
import React from 'react';

const Input = ({ children, disabled, checked, onChange }) => {
    return (
    <label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </label>
    );
};

export default Input;