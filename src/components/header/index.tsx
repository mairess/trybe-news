import { Container, Logo, Wrapper, WrapperDate, Title } from './style';
import { getDate } from '../../helpers/getDate';

function Header() {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <Title>Trybe News</Title>
        <WrapperDate>
          <p>{getDate()}</p>
        </WrapperDate>
      </Wrapper>
    </Container>
  );
}

export default Header;
