import styled from "styled-components";

export const Title = styled.h1`
  font-size: 44px;
  color: ${({ theme }) => theme.color.front.main};
  margin-bottom: 12px;
`;

export const Subtitle = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.color.front.dim};
`;

export const Highlighted = styled.span`
  color: ${({ theme }) => theme.color.front.highlight};
`;

export const Date = styled.time`
  color: ${({ theme }) => theme.color.front.highlight};
`;

export const Article = styled.article`
  line-height: 1.65;
  font-size: 22px;
  color: ${({ theme }) => theme.color.front.text};
`;
