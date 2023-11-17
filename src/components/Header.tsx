import styled from 'styled-components';
import logo_trybe from '../assets/logo_trybe.png';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(14, 14, 14, 0.85);
    filter: drop-shadow(0px 4px 28px rgba(0, 0, 0, 0.25));
`;

const Logo = styled.div`
    width: 16rem;
    height: 13.1875rem;
    flex-shrink: 0;
    background: url(${logo_trybe});
    margin-left: 0;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Title = styled.h1`
    width: 100%;
    text-align: center; 
    
    color: #FFF;
    font-family: Poller One;
    font-size: 5.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.9375rem;
    letter-spacing: 0.1rem;
`;

function Header() {
  return (
    <header>
      <Container>
        <Logo />
        <Title>
          Trybe News
        </Title>
      </Container>
    </header>
  );
}

export default Header;
