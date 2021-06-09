import styled from "styled-components";

export const Root = styled.button`
  box-shadow: none;
  cursor: pointer;
  background-color: #00000000;
  color: inherit;
  border: none;
  margin: 0;
  padding: 4px;

  transition: background-color 150ms;
  &:hover {
    background-color: #ffffff28;
  }

  &:active {
    background-color: #ffffff55;
  }
`;
