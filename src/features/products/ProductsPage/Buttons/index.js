import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHideDone,
  toggleHideDone,
  showDone,
  setAllDone,
  selectIsEveryTaskDone,
  selectAreTasksNotEmpty,
} from "../../productListSlice";
import { ButtonsGroup, Button } from "../Button";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksNotEmpty = useSelector(selectAreTasksNotEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!areTasksNotEmpty) {
      dispatch(showDone());
    }
  }, [areTasksNotEmpty, dispatch]);

  return (
    <ButtonsGroup>
      <Button
        active={hideDone}
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
