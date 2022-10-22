/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from 'react-custom-toggle';

import { Box } from '../common';

const sizeOptions = ['extraSmall', 'small', 'default', 'large', 'extraLarge'];

const Sizes = () => {
  const [isSunShining, setIsSunShining] = useState(false);
  const [selectedSize, setSelectedSize] = useState('default');

  return (
    <SizesContainer>
      <h3>Sizes</h3>
      <Box>
        <ToggleBox>
          <Toggle
            checked={isSunShining}
            onChange={setIsSunShining}
            extraSmall={selectedSize === 'extraSmall'}
            small={selectedSize === 'small'}
            large={selectedSize === 'large'}
            extraLarge={selectedSize === 'extraLarge'}
          />
        </ToggleBox>
        <RadioGroup onChange={(e) => setSelectedSize(e.target.value)}>
          {sizeOptions.map((size, index) => (
            <Radio htmlFor={size} className="radio" key={`size-${index}`}>
              <input
                readOnly
                type="radio"
                name="sizes"
                value={size}
                id={size}
                checked={selectedSize === size}
              />
              <span className="label"></span>
              {size}
            </Radio>
          ))}
        </RadioGroup>
        <pre>
          <code>{`const [isSunShining, setIsSunShining] = useState(${isSunShining});`}</code>
        </pre>
        <pre>
          <code>
            {`<Toggle checked={isSunShining} onChange={setIsSunShining} ${
              selectedSize === 'default' ? '' : selectedSize + ' '
            }/>`}
          </code>
        </pre>
      </Box>
    </SizesContainer>
  );
};

const SizesContainer = styled.div`
  margin: 3em 0;
`;

const ToggleBox = styled.div`
  margin: 2em 0;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Radio = styled.label`
  position: relative;
  cursor: pointer;
  line-height: 20px;
  font-size: 14px;
  margin: 15px;
  display: flex;
  input {
    display: none;
    &:checked + .label {
      border-color: #63b3ed;
      &:after {
        transform: scale(1);
        transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
        opacity: 1;
      }
    }
  }
  span {
    position: relative;
    display: block;
    float: left;
    margin-right: 10px;
    width: 16px;
    height: 16px;
    border: 2px solid #ccc;
    border-radius: 100%;
    -webkit-tap-highlight-color: transparent;
    &:after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background: #63b3ed;
      transform: scale(0);
      transition: all 0.2s ease;
      opacity: 0.2;
      pointer-events: none;
    }
    &:hover {
      &:after {
        transform: scale(3.6);
      }
    }
  }
`;

export default Sizes;
