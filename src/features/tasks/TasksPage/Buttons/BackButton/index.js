
import { toTasks } from "../../../../../routes";
import { Button, ButtonsGroup } from "../Button";
import { StyledLink } from "./styled";

const BackButton = () => {
  return (
    <ButtonsGroup>
      <Button>
        <StyledLink to={toTasks()}>Wstecz ↩</StyledLink>
      </Button>
    </ButtonsGroup>
  );
};

export default BackButton;
