import Form from './Form';
import Header from './Header';
import { StyledSection } from './styles/MainSection.styled';

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
