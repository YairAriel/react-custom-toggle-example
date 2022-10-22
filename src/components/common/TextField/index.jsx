import React from 'react';
import styled from 'styled-components';

const TextField = ({ label, value, changeHandler }) => (
  <Field>
    <input
      type="text"
      placeholder=" "
      value={value}
      onChange={(e) => changeHandler(e.target.value)}
    />
    <label>{label}</label>
  </Field>
);

const Field = styled.div`
  position: relative; 
  label {
    position: absolute;
    font-size: 12px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    color: gray;
    padding: 0 0.3rem;
    margin: 0 0.5rem;
    transition: 0.1s ease-out;
    transform-origin: left top;
    pointer-events: none;
  }
  input {
    font-size: 14px;
    outline: none;
    border: 1px solid gray;
    border-radius: 4px;  
    padding: 10px;
    transition: 0.1s ease-out;
  }
  input:focus {
    border-color: #63b3ed;  
  }
  input:focus + label {
    color: #63b3ed;
    top: 0;
    transform: translateY(-50%) scale(.9);
  }
  input:not(:placeholder-shown) + label {
    top: 0;
    transform: translateY(-50%) scale(.9);
  }
`;

export default TextField;
