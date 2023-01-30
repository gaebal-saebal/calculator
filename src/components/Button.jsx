import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  box-shadow: rgb(172, 188, 202) 1px 3px 8px,
    rgb(255, 255, 255) 3px 3px 6px 1px inset;
  background-color: rgba(246, 251, 255, 1);
  font-weight: 600;
  margin: 7px;
  font-size: 1rem;
  cursor: pointer;
`;

const Button = ({ button, handleClick }) => {
  const clickHandler = (event) => {
    console.log(event.currentTarget.value);
    console.log(event);
  };
  return <ButtonContainer onClick={clickHandler}>{button}</ButtonContainer>;
};

export default Button;
