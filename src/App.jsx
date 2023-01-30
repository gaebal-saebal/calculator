import React, { useState } from 'react';
import { Button, Layout, Display } from './components';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';

const HalfDisplayDiv = styled.div`
  width: 100%;
  flex: ${(props) => props.flex};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  overflow: auto;
`;

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
  const [displayNum1, setDisplayNum1] = useState('0');
  const [displaySymbol, setDisplaySymbol] = useState('');
  const [displayNum2, setDisplayNum2] = useState('');
  const [result, setResult] = useState('');
  const [isNum1Dot, setIsNum1Dot] = useState(false);
  const [isNum2Dot, setIsNum2Dot] = useState(false);

  const handleGetResult = (num1, num2, symbol) => {
    switch (symbol) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        if (num2 === 0) {
          alert('0으로 나눌 수 없습니다.');
        } else {
          setResult(num1 / num2);
        }
        break;
      case '':
        setResult(num1);
        break;
    }
  };

  const handleClick = (e) => {
    switch (e.target.name) {
      case 'reset':
        setResult('');
        setDisplayNum1('0');
        setDisplaySymbol('');
        setDisplayNum2('');
        setIsNum1Dot(false);
        setIsNum2Dot(false);
        break;
      case 'number':
        if (displaySymbol === '') {
          displayNum1 !== '0' ? setDisplayNum1((prev) => prev + e.target.value) : setDisplayNum1(e.target.value);
        } else {
          setDisplayNum2((prev) => prev + e.target.value);
        }
        break;
      case 'symbol':
        if (displaySymbol === '') {
          if (displayNum1 === '0') {
            setDisplaySymbol('');
          } else {
            setDisplaySymbol(e.target.value);
          }
        }
        break;
      case 'dot':
        if (displaySymbol === '') {
          if (isNum1Dot === false) {
            setDisplayNum1((prev) => prev + e.target.value);
            setIsNum1Dot(true);
          }
        } else if (isNum2Dot === false) {
          setDisplayNum2((prev) => prev + e.target.value);
          setIsNum2Dot(true);
        }
        break;
      case 'calculate': {
        let num1 = Number(displayNum1);
        let num2 = Number(displayNum2);
        handleGetResult(num1, num2, displaySymbol);
        setDisplayNum1(result);
        setDisplaySymbol('');
        setDisplayNum2('');
        setIsNum1Dot(false);
        setIsNum2Dot(false);
        break;
      }
      default:
        break;
    }
  };
  //TODO: 디스플레이 되는 숫자 정상화

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Display>
          <HalfDisplayDiv fontSize='30px' flex='1'>
            {displayNum1}
            {displaySymbol}
            {displayNum2}
          </HalfDisplayDiv>
          <HalfDisplayDiv fontSize='40px' flex='1' fontWeight='bold' textAlign='right'>
            {result}
          </HalfDisplayDiv>
        </Display>
        <KeypadDiv>
          <LeftKeysDiv>
            <LeftColumnsDiv>
              <Button flex='1' name='reset' onClick={handleClick}>
                C
              </Button>
              <Button flex='1' name='symbol' value='/' onClick={handleClick}>
                /
              </Button>
              <Button flex='1' name='symbol' value='*' onClick={handleClick}>
                *
              </Button>
            </LeftColumnsDiv>
            <LeftColumnsDiv>
              <Button flex='1' name='number' value='7' onClick={handleClick}>
                7
              </Button>
              <Button flex='1' name='number' value='8' onClick={handleClick}>
                8
              </Button>
              <Button flex='1' name='number' value='9' onClick={handleClick}>
                9
              </Button>
            </LeftColumnsDiv>
            <LeftColumnsDiv>
              <Button flex='1' name='number' value='4' onClick={handleClick}>
                4
              </Button>
              <Button flex='1' name='number' value='5' onClick={handleClick}>
                5
              </Button>
              <Button flex='1' name='number' value='6' onClick={handleClick}>
                6
              </Button>
            </LeftColumnsDiv>
            <LeftColumnsDiv>
              <Button flex='1' name='number' value='1' onClick={handleClick}>
                1
              </Button>
              <Button flex='1' name='number' value='2' onClick={handleClick}>
                2
              </Button>
              <Button flex='1' name='number' value='3' onClick={handleClick}>
                3
              </Button>
            </LeftColumnsDiv>
            <LeftColumnsDiv>
              <Button flex='2' name='number' value='0' onClick={handleClick}>
                0
              </Button>
              <Button flex='1' name='dot' value='.' onClick={handleClick}>
                .
              </Button>
            </LeftColumnsDiv>
          </LeftKeysDiv>
          <RightKeysDiv>
            <RightColumnsDiv flex='1'>
              <Button flex='1' name='symbol' value='-' onClick={handleClick}>
                -
              </Button>
            </RightColumnsDiv>
            <RightColumnsDiv flex='2'>
              <Button flex='1' name='symbol' value='+' onClick={handleClick}>
                +
              </Button>
            </RightColumnsDiv>
            <RightColumnsDiv flex='2'>
              <Button flex='1' name='calculate' onClick={handleClick}>
                =
              </Button>
            </RightColumnsDiv>
          </RightKeysDiv>
        </KeypadDiv>
      </Layout>
    </>
  );
};

export default App;
