import { useSelector, useDispatch } from "react-redux";
import {
  selectHideDone,
  toggleHideDone,
  setAllDone,
  selectIsEveryTaskDone,
  selectAreTasksNotEmpty,
} from "../../tasksSlice";
import { ButtonsGroup, Button } from "../Button";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksNotEmpty = useSelector(selectAreTasksNotEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();

  return (
    <ButtonsGroup>
      <Button
        disabled={!areTasksNotEmpty}
        onClick={() => dispatch(toggleHideDone())}
      >
        {hideDone ? "Pokaż " : "Ukryj "}
        ukończone
      </Button>
      <Button
        disabled={isEveryTaskDone || !areTasksNotEmpty}
        onClick={() => dispatch(setAllDone())}
      >
        Ukończ wszystkie
      </Button>
    </ButtonsGroup>
  );
};

export default Buttons;
