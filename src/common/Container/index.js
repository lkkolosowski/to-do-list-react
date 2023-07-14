import { Main } from "./styled";

const Container = ({ children, trimmed, tasks, author, page }) => (
  <Main trimmed={trimmed} tasks={tasks} author={author} page={page}>
    {children}
  </Main>
);

export default Container;
