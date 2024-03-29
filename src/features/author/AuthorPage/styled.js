import styled, { css } from "styled-components";

export const ImageWrapper = styled.p`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  ${({ avatar }) =>
    avatar &&
    css`
      border-radius: 50%;
      max-width: 300px;
    `}
`;

export const Paragraph = styled.p`
  max-width: 675px;
  line-height: 1.5;
`;
