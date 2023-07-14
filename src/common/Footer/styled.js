import styled from "styled-components";
import { ReactComponent as HeartIcon } from "./heart.svg";

export const StyledFooter = styled.footer`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
`;

export const Heart = styled(HeartIcon)`
  height: 18px;
  width: auto;
  margin-bottom: -4px;
`;
