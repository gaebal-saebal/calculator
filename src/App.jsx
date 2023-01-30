import React, { useState } from "react";
import { Button } from "./components";
import {
  MainContainer,
  ButtonContainer,
  ZeroButton,
  InputBar,
} from "./components/Button.style";

const App = () => {
  return (
    <MainContainer>
      <InputBar></InputBar>
      <ButtonContainer>
        <Button>AC</Button>
        <Button>DEL</Button>
        <Button>%</Button>
        <Button>/</Button>
        <Button>7</Button>
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
  );
};

export default App;
