import styled from "styled-components";
import { ReactComponent as Heart } from "../../images/heart.svg";

export const StyledFooter = styled.footer`
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
`;

export const StyledHeart = styled(Heart)`
  height: 16px;
  width: auto;
  margin-bottom: -3px;
`;
