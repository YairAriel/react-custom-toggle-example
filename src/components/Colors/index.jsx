/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from 'react-custom-toggle';

import { Box, TextField } from '../common';

const Colors = () => {
  const [isSunShining, setIsSunShining] = useState(false);
  const [isThatRight, setIsThatRight] = useState(false);
  const [colorOff, setColorOff] = useState('#ed8936');
  const [colorOn, setColorOn] = useState('#63b3ed');
  const [textColorOff, setTextColorOff] = useState('violet');
  const [textColorOn, setTextColorOn] = useState('royalblue');

  return (
    <ColorsContainer>
      <h3>Colors</h3>
      <Disclaimer>
        Valid values: hex colors (e.g #ff2bbc) or&nbsp;
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color"
          target="_blank"
          rel="noopener noreferrer"
        >
          named colors
        </a>
        .
      </Disclaimer>
      <Box>
        <h4>Background colors</h4>
        <ToggleBox>
          <Toggle
            checked={isSunShining}
            onChange={setIsSunShining}
            colorOff={colorOff}
            colorOn={colorOn}
          />
        </ToggleBox>
        <InputWrapper>
          <TextField label="colorOff" value={colorOff} changeHandler={setColorOff} />
          <TextField label="colorOn" value={colorOn} changeHandler={setColorOn} />
        </InputWrapper>
        <pre>
          <code>{`const [isSunShining, setIsSunShining] = useState(${isSunShining});`}</code>
        </pre>
        <pre>
          <code>
            {`<Toggle checked={isSunShining} onChange={setIsSunShining} 
  colorOff="${colorOff}" colorOn="${colorOn}" />`}
          </code>
        </pre>
        <Hr width="320" />
        <h4>Texts colors</h4>
        <ToggleBox>
          <Toggle
            checked={isThatRight}
            onChange={setIsThatRight}
            offText="OFF"
            onText="ON"
            textColorOff={textColorOff}
            textColorOn={textColorOn}
          />
        </ToggleBox>
        <InputWrapper>
          <TextField label="textColorOff" value={textColorOff} changeHandler={setTextColorOff} />
          <TextField label="textColorOn" value={textColorOn} changeHandler={setTextColorOn} />
        </InputWrapper>

        <pre>
          <code>{`const [isThatRight, setIsThatRight] = useState(${isThatRight});`}</code>
        </pre>
        <pre>
          <code>
            {`<Toggle checked={isThatRight} onChange={setIsThatRight} offText="OFF"
  onText="ON" textColorOff="${textColorOff}" textColorOn="${textColorOn}" />`}
          </code>
        </pre>
      </Box>
    </ColorsContainer>
  );
};

const ColorsContainer = styled.div`
  margin: 3em 0;
`;

const ToggleBox = styled.div`
  margin: 2em 0;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Disclaimer = styled.p`
  color: #637280;
  margin-bottom: 1em;
`;

const Hr = styled.hr`
  margin: 4em auto;
  border: 1px solid #ccc;
`;

export default Colors;
