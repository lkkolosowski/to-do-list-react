import { Headline, Title } from "./styled";

const Header = ({ title }) => (
  <Headline className="header">
    <Title>{title}</Title>
  </Headline>
);

export default Header;
