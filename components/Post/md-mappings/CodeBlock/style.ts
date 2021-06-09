import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ fullscreen: boolean }>`
  background-color: rgb(40, 42, 54);
  font-size: 14px;
  line-height: 120%;

  overflow-y: auto;

  ${({ fullscreen }) =>
    fullscreen &&
    css`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 5;
    `}
`;

export const Header = styled.div`
  padding: 4px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.color.front.main};
`;

export const IconContainer = styled.div`
  display: flex;
  margin-right: -6px;
  align-items: center;
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
  margin-bottom: 0;
  margin-top: 12px; 
`;

export const LineNumber = styled.span`
  margin-right: 16px;
  opacity: 0.4;
  text-align: right;
  user-select: none;
`;
