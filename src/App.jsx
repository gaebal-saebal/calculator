import React, { useState } from "react";
import { Button, Header } from "./components";
import styled from "styled-components";
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 310px;
  height: 580px;
  background-color: rgba(246, 251, 255, 1);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 93%;

  .first-line {
    display: flex;
  }
  .second-line {
    display: flex;
    width: 90%;
  }
  .dial-number {
    flex-grow: 3;
  }

  .last-line {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

const App = () => {
  const [count, setCount] = useState(0);
  // const handleClick = (prev) => {
  //   setCount(prev + 1);
  //   console.log("prev" + prev);
  //   console.log("count" + count);
  // };
  const handleClick = (event) => {
    console.log(event.target.value);
  };

  const dial = [7, 8, 9, 4, 5, 6, 1, 2, 3, "%", 0, ","];
  const firstButton = ["AC", "/", "X", "Del"];
  const secondButton = ["ㅡ", "+", "="];

  return (
    <Background>
      <Container className="App">
        <Header className="header">계산기</Header>
        <ButtonContainer>
          <div className="first-line">
            {firstButton.map((firstbutton, idx) => {
              return (
                <Button key={idx} button={firstbutton} onClick={handleClick} />
              );
            })}
          </div>
          <div className="second-line">
            <div className="dial-number">
              {dial.map((button, idx) => {
                return (
                  <Button key={idx} button={button} onClick={handleClick} />
                );
              })}
            </div>
            <div className="last-line">
              {secondButton.map((secondButton, idx) => {
                return (
                  <Button
                    key={idx}
                    button={secondButton}
                    onClick={handleClick}
                  />
                );
              })}
            </div>
          </div>
        </ButtonContainer>
      </Container>
    </Background>
  );
};

export default App;
