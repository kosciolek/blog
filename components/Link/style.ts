import styled from "styled-components";

export const A = styled.a`
  color: ${({ theme }) => theme.color.front.main};
  cursor: pointer;
  font-weight: bold;
  padding: 4px 8px;
  user-select: none;

  transition: background-color 250ms, color 250ms;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.color.front.main};
  }
`;
