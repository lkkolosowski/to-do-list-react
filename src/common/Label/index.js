import { StyledLabel } from "./styled";

const Label = ({ variant, as, onClick, hidden, disabled, content }) => {
  return (
    <StyledLabel as={as} variant={variant} hidden={hidden} disabled={disabled} onClick={onClick}>
      {content}
    </StyledLabel>
  );
};

export default Label;
