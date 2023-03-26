import { Main } from "./styled";

const Container = ({ children, trimmed }) => (
  <Main trimmed={trimmed}>{children}</Main>
);

export default Container;
