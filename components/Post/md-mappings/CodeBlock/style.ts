import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(40, 42, 54);
  font-size: 14px;
  line-height: 120%;
`;

export const Header = styled.div`
  padding: 8px 16px;
  display: flex;
`;

export const Divider = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.back.medium};
`;

export const Filename = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.front.main};
  font-weight: bold;
`;

export const Pre = styled.pre`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 6px;
`;

export const LineNumber = styled.span`
  margin-right: 16px;
  opacity: 0.4;
  text-align: right;
`;
