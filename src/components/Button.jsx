import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${(props) => props.flex};
  border: 1px solid black;
`;

const Button = ({ children, flex }) => {
  return <ButtonDiv flex={flex}>{children}</ButtonDiv>;
};

export default Button;
