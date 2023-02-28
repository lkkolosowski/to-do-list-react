import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(34 34 34 / 5%);
  margin-bottom: 10px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const Body = styled.div([]);
