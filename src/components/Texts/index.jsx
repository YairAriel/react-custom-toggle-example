/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from 'react-custom-toggle';

import { Box, TextField } from '../common';

const Texts = () => {
  const [isSunShining, setIsSunShining] = useState(false);
  const [textForOff, setTextForOff] = useState('OFF');
  const [textForOn, setTextForOn] = useState('ON');

  return (
    <TextsContainer>
      <h3>Texts</h3>
      <Box>
        <ToggleBox>
          <Toggle
            checked={isSunShining}
            onChange={setIsSunShining}
            offText={textForOff}
            onText={textForOn}
          />
        </ToggleBox>
        <InputWrapper>
          <TextField label="textOff" value={textForOff} changeHandler={setTextForOff} />
          <TextField label="textOn" value={textForOn} changeHandler={setTextForOn} />
        </InputWrapper>
        <pre>
          <code>{`const [isSunShining, setIsSunShining] = useState(${isSunShining});`}</code>
        </pre>
        <pre>
          <code>
            {`<Toggle checked={isSunShining} onChange={setIsSunShining} 
  offText="${textForOff}" onText="${textForOn}" />`}
          </code>
        </pre>
      </Box>
    </TextsContainer>
  );
};

const TextsContainer = styled.div`
  margin: 3em 0;
`;

const ToggleBox = styled.div`
  margin: 2em 0;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Texts;
