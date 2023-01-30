import React from 'react';
import styled from 'styled-components';

const OutputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  padding: 30px;
  outline: 1px solid black;
`;

const Display = ({ children }) => {
  return <OutputDiv>{children}</OutputDiv>;
};

export default Display;
