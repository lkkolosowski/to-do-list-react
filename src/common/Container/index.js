import { Main } from "./styled";

const Container = ({ children, trimmed, products, author, page }) => (
  <Main trimmed={trimmed} products={products} author={author} page={page}>
    {children}
  </Main>
);

export default Container;
