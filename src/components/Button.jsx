import React from 'react';
import styled from 'styled-components';

const ButtonButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${(props) => props.flex};
  outline: 1px solid black;
  border: none;

  :hover {
    background-color: #ccc;
  }
  :active {
    background-color: #bbb;
  }
`;

const Button = ({ children, name, value, onClick, flex }) => {
  return (
    <ButtonButton flex={flex} name={name} value={value} onClick={onClick}>
      {children}
    </ButtonButton>
  );
};

export default Button;
