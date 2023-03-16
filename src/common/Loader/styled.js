import styled from "styled-components";

const medium = ({ theme }) => theme.size.medium;

export const StyledLoader = styled.div`
  position: relative;
  border: 3px solid ${({ theme }) => theme.color.concrete};
  border-radius: 50%;
  border-top: 3px solid ${({ theme }) => theme.color.mineShaft};
  top: 4px;
  width: calc(${medium}px + 8px);
  height: calc(${medium}px + 8px);
  margin-top: -8px;
  -webkit-animation: spin 0.5s linear infinite;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
