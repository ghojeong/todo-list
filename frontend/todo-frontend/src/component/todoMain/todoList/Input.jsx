import React from 'react';

const TextInput = ({ inputValue, setInput }) => {
  return <input type='text' value={inputValue} onChange={(e) => setInput(e.target.value)} />;
};

export default TextInput;
