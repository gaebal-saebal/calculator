import React, { useState } from 'react';
import { Button, Layout, Display } from './components';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';

const KeypadDiv = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
`;

const LeftKeysDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const LeftColumnsDiv = styled.div`
  display: flex;
  flex: 1;
`;

const RightKeysDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const RightColumnsDiv = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
`;

const App = () => {
  const [displayNum1, setDisplayNum1] = useState(1);
  const [displaySymbol, setDisplaySymbol] = useState(' + ');
  const [displayNum2, setDisplayNum2] = useState(2);

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Display>
          {displayNum1}
          {displaySymbol}
          {displayNum2}
        </Display>
        <KeypadDiv>
          <LeftKeysDiv>
            <LeftColumnsDiv>
              <Button flex='1'>C</Button>
              <Button flex='1'>/</Button>
              <Button flex='1'>*</Button>
            </LeftColumnsDiv>
            <LeftColumnsDiv>
              <Button flex='1'>7</Button>
              <Button flex='1'>8</Button>
              <Button flex='1'>9</Button>
            </LeftColumnsDiv>
            <LeftColumnsDiv>
              <Button flex='1'>4</Button>
              <Button flex='1'>5</Button>
              <Button flex='1'>6</Button>
            </LeftColumnsDiv>
            <LeftColumnsDiv>
              <Button flex='1'>1</Button>
              <Button flex='1'>2</Button>
              <Button flex='1'>3</Button>
            </LeftColumnsDiv>
            <LeftColumnsDiv>
              <Button flex='2'>0</Button>
              <Button flex='1'>.</Button>
            </LeftColumnsDiv>
          </LeftKeysDiv>
          <RightKeysDiv>
            <RightColumnsDiv flex='1'>
              <Button flex='1'>-</Button>
            </RightColumnsDiv>
            <RightColumnsDiv flex='2'>
              <Button flex='1'>+</Button>
            </RightColumnsDiv>
            <RightColumnsDiv flex='2'>
              <Button flex='1'>enter</Button>
            </RightColumnsDiv>
          </RightKeysDiv>
        </KeypadDiv>
      </Layout>
    </>
  );
};

export default App;
