import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: grid;
  width: 40%;
  max-width: 450px;
  height: 50%;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const ButtonStyle = styled.button`
  background-color: orange;
  border: none;
  color: green;
  font-size: 1.5rem;
  border-radius: 15%;
  cursor: pointer;
  box-shadow: 5px 5px 5px lightgray;

  &:active {
    margin-left: 3px;
    margin-right: 3px;
    box-shadow: none;
  }
`;

const ZeroButton = styled(ButtonStyle)`
  grid-column: 1/3;
`;

const InputBar = styled.input`
  width: 40%;
  max-width: 450px;
  height: 65px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 30px;
  border: 2px solid blue;
  padding-right: 15px;
  &:focus {
    outline: none;
  }
`;

export { MainContainer, ButtonContainer, ButtonStyle, ZeroButton, InputBar };
