import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  calcState,
  firstNumState,
  resultDisplay,
  secondNumState,
} from "../Atom";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93%;
`;
const HeaderContainer = styled.div`
  width: 93%;
  height: 100px;
  background-color: rgba(246, 251, 255, 1);
  box-shadow: rgb(204, 219, 232) 5px 5px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset,
    rgb(255, 255, 255) -5px -5px 6px 3px inset;

  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 30px;
  font-size: 20px;
`;

const Display = ({ children }) => {
  const [firstNum] = useRecoilValue(firstNumState);
  const [secondNum, setSecondNum] = useRecoilState(secondNumState);
  // const [resultNum, setResultNum] = useRecoilState(resultDisplay);
  const calc = useRecoilValue(calcState);
  console.log("display calc : " + calc);
  console.log("num :" + typeof Number(calc) + Number(calc));

  // const onClickHandler = () => {
  //   setFirstNum(firstNum);
  // };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div className="first-count"> {calc}</div>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Display;
