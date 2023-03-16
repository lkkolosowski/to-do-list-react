import { useSelector, useDispatch } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Button, ButtonsGroup } from "../Button";
import Loader from "../../../../common/Loader";

const FetchExampleTasksButton = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  return (
    <ButtonsGroup>
      <Button
        disabled={isLoading}
        onClick={() => dispatch(fetchExampleTasks())}
      >
        {isLoading ? <Loader /> : `Pobierz przykładowe zadania`}
      </Button>
    </ButtonsGroup>
  );
};

export default FetchExampleTasksButton;
