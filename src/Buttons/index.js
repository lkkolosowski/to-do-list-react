import { Fragment } from "react";
import { ButtonsGroup,  Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonsGroup>
    {tasks.length > 0 && (
      <Fragment>
        <Button onClick={toggleHideDone}>
          {hideDone ? "Pokaż " : "Ukryj "}
          ukończone
        </Button>
        <Button disabled={tasks.every(({ done }) => done)} onClick={setAllDone}>
          Ukończ wszystkie
        </Button>
      </Fragment>
    )}
  </ButtonsGroup>
);

export default Buttons;
