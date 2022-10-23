import { Fragment } from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone}) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <Fragment>
        <button
          className="buttons__button"
          onClick={toggleHideDone}
        >
          {hideDone ? "Pokaż " : "Ukryj "}
          ukończone
        </button>
        <button
          disabled={tasks.every(({ done }) => done)}
          className="buttons__button"
          onClick={setAllDone}
        >
          Ukończ wszystkie
        </button>
      </Fragment>
    )}
  </div>
);

export default Buttons;
