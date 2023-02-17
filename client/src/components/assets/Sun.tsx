import styled from 'styled-components';

const StyledSun = styled.svg`
  position: absolute;
  top: 21px;
  right: 220px;
  z-index: -100;

  @media (min-width: 1200px) {
    right: 550px;
  }

  @media (min-width: 1350px) {
    right: 725px;
  }

  @media (min-width: 1700px) {
    right: 800px;
  }
`;

const Sun = () => {
  return (
    <StyledSun
      width="87"
      height="87"
      viewBox="0 0 87 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.1" cx="43.5" cy="43.5" r="43.5" fill="#FAD34F" />
    </StyledSun>
  );
};

export default Sun;
