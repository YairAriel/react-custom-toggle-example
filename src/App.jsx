/** @format */

import React from 'react';
import styled from 'styled-components';

import BasicUsage from './components/BasicUsage';
import Sizes from './components/Sizes';
import Texts from './components/Texts';
import Colors from './components/Colors';

const App = () => (
  <AppContainer>
    <Title>React Custom Toggle</Title>
    <BasicUsage />
    <Sizes />
    <Texts />
    <Colors />
  </AppContainer>
);

const AppContainer = styled.div`
  width: 768px;
  padding: 0 50px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
`;

export default App;
