/** @format */

import React from 'react';
import styled from 'styled-components';

const BasicUsage = () => (
  <WrapperContainer>
    <h3>Installation</h3>
    <pre>
      <code>{`npm install react-custom-toggle`}</code>
    </pre>
    <pre>
      <code>{`yarn add react-custom-toggle`}</code>
    </pre>
    <h3>Usage</h3>
    <pre>
      <code>
        {`
import React, { useState } from 'react';
import Toggle from 'react-custom-toggle';
     
const Example = () => {
  const [isSunShining, setIsSunShining] = useState(false);

  return (
    <Toggle checked={isSunShining} onChange={setIsSunShining} />
  );
};`}
      </code>
    </pre>
  </WrapperContainer>
);

const WrapperContainer = styled.div`
  margin: 3em 0;
`;

export default BasicUsage;
