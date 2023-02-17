import styled from 'styled-components';
import Form from './Form';
import Header from './Header';

const StyledSection = styled.section`
  margin-top: 179px;
  margin-left: 50px;
  margin-right: 50px;

  @media (min-width: 768px) {
    width: 563px;
    margin-left: 147px;
  }
`;

const MainSection = () => {
  return (
    <main>
      <StyledSection>
        <Header />
        <Form />
      </StyledSection>
    </main>
  );
};

export default MainSection;
