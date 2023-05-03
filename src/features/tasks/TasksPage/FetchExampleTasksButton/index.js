import { useSelector, useDispatch } from "react-redux";
import { fetchExampleTasks, selectAreTasksNotEmpty, selectLoading } from "../../tasksSlice";
import { Button, ButtonsGroup } from "../Button";
import Loader from "../../../../common/Loader";

const FetchExampleTasksButton = () => {
  const isLoading = useSelector(selectLoading);
  const areTasksNotEmpty = useSelector(selectAreTasksNotEmpty);
  const dispatch = useDispatch();

  return (
    <ButtonsGroup>
      <Button
        disabled={isLoading || areTasksNotEmpty}
        onClick={() => dispatch(fetchExampleTasks())}
      >
        {isLoading ? <Loader /> : `Pobierz przykładowe zadania`}
      </Button>
    </ButtonsGroup>
  );
};

export default FetchExampleTasksButton;
