import { StyledButton, Container } from './styles';

type ButtonProps = {
  label: string,
};

function ButtonReadTheNews({ label }: ButtonProps) {
  return (
    <Container>
      <StyledButton>
        <p>{label}</p>
      </StyledButton>
    </Container>
  );
}

export default ButtonReadTheNews;
