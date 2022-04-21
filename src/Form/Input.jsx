import React from 'react';

const Input = ({ label, id, onChange, requeried, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={onChange}
        required={requeried}
        {...props}
      />
    </>
  );
};

export default Input;
