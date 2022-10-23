import { Fragment } from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone}) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <Fragment>
        <button
        onClick={toggleHideDone}
        className="buttons__button">
          {hideDone ? "Pokaż " : "Ukryj "}
          ukończone
        </button>
        <button
        disabled={tasks.every(({ done }) => done)}
        className="buttons__button">
          Ukończ wszystkie
        </button>
      </Fragment>
    )}
  </div>
);

export default Buttons;
