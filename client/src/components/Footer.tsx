import SocialMedia from './SocialMedia';
import styled from 'styled-components';
import YellowCartoonFooter from './assets/YellowCartoonFooter';
import GreenCartoon from './assets/GreenCartoon';
import RedCartoonFooter from './assets/RedCartoonFooter';

const StyledFooter = styled.footer`
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;

  width: 100%;
  height: 200px;
  margin: 0;

  background: #fafafa;
  border: 1px solid #d8d8d8;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <SocialMedia />
      <GreenCartoon />
      <YellowCartoonFooter />
      <RedCartoonFooter />
    </StyledFooter>
  );
};

export default Footer;
