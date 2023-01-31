import React, { useState } from "react";
import { Button } from "./components";
import {
  MainContainer,
  ButtonContainer,
  ZeroButton,
  InputBar,
} from "./components/Button.style";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  const [calc, setCalc] = useState("");
  const [operCheck, setOperCheck] = useState(true);
  const [pointCheck, setPointCheck] = useState(true);

  // 계산결과
  const getNum = (e) => {
    setCalc((prev) => prev + e.target.value);
  };

  const getOper = (e) => {
    setCalc((prev) => prev + e.target.value);
  };

  // 숫자, 연산결과
  const getPoint = (e) => {
    if (calc.length === 0) {
      return 삐--;
    }
    setCalc((prev) => prev + e.target.value);
  };
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <InputBar></InputBar>
        <ButtonContainer>
          <Button>AC</Button>
          <Button>DEL</Button>
          <Button onClick={getOper}>%</Button>
          <Button onClick={getOper}>/</Button>
          <Button onClick={getNum}>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>x</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
          <ZeroButton>0</ZeroButton>
          <Button>.</Button>
          <Button>=</Button>
        </ButtonContainer>
      </MainContainer>
    </>
  );
};

export default App;
