import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from 'react-icons/fa';
import { StyledSocialMedia } from './styles/SocialMedia.styled';
import { Link } from './styles/Link.styled';

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
