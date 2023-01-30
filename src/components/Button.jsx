import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${(props) => props.flex};
  outline: 1px solid black;

  :hover {
    background-color: #ccc;
  }
  :active {
    background-color: #bbb;
  }
`;

const Button = ({ children, flex }) => {
  return <ButtonDiv flex={flex}>{children}</ButtonDiv>;
};

export default Button;
