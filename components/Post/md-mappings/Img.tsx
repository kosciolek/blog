import styled from "styled-components";

export const Img = ({ src, alt }: { src: string; alt?: string }) => (
  <Root>
    <StyledImg src={src} alt="" />
    <Alt>{alt}</Alt>
  </Root>
);

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;
export const StyledImg = styled.img`
  width: 100%;
`;
export const Alt = styled.span`
  margin-top: 8px;
  text-transform: uppercase;
  align-self: center;
  font-size: 14px;
  opacity: 0.7;
`;
