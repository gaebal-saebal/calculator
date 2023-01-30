import React from 'react';
import styled from 'styled-components';

const OutputDiv = styled.div`
  width: 100%;
  height: 30%;
  background: #eee;
  padding: 30px;
`;

const Display = ({ children }) => {
  return <OutputDiv>{children}</OutputDiv>;
};

export default Display;
