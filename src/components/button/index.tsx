import { StyledButton } from './styles';

type ButtonProps = {
  label: string,
};

function Button({ label }: ButtonProps) {
  return (
    <StyledButton>
      <p>{label}</p>
    </StyledButton>
  );
}

export default Button;
