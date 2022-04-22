import React from 'react';

const Radio = ({ pergunta, options, id, onChange, value, active }) => {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((item) => (
        <label key={item} style={{ marginBottom: '1rem', fontFamily: 'mono' }}>
          <input
            id={id}
            type="radio"
            checked={value === item}
            value={item}
            onChange={onChange}
          />
          {item}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
