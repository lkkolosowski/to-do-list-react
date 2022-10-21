import { Fragment } from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <Fragment>
        <button
        className="buttons__button">
          {hideDoneTasks ? "Pokaż " : "Ukryj "}
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
