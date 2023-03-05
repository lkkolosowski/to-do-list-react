import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, selectIsEveryTaskDone, selectAreTasksEmpty } from "../tasksSlice";
import { ButtonsGroup, Button } from "./styled";

const Buttons = () => {
  const { hideDone } = useSelector(selectTasks);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();

  return (
    <ButtonsGroup>
      {areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż " : "Ukryj "}
            ukończone
          </Button>
          <Button
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonsGroup>
  );
};

export default Buttons;
