import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from 'react-icons/fa';
import styled from 'styled-components';

const StyledSocialMedia = styled.div`
  display: flex;
  margin-left: 10rem;
  gap: 26px;

  @media (min-width: 768px) {
    margin-left: 21rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const SocialMedia = () => {
  return (
    <StyledSocialMedia>
      <Link href="https://www.linkedin.com/">
        <FaLinkedinIn size="1.3rem" />
      </Link>
      <Link href="https://twitter.com/">
        <FaTwitter size="1.3rem" />
      </Link>
      <Link href="https://www.facebook.com/">
        <FaFacebookF size="1.3rem" />
      </Link>
      <Link href="https://www.pinterest.com/">
        <FaPinterestP size="1.3rem" />
      </Link>
    </StyledSocialMedia>
  );
};

export default SocialMedia;
