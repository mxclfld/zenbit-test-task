import styled from 'styled-components';

const StyledGreenCartoon = styled.svg`
  position: absolute;
  top: 0px;
  right: 425px;

  @media (min-width: 580px) {
    display: inline;
    position: absolute;
    right: 128px;
  }
`;

const GreenCartoon = () => {
  return (
    <StyledGreenCartoon
      width="79"
      height="97"
      viewBox="0 0 79 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M78.465 57.7675C78.465 79.435 60.9 97 39.2325 97C17.565 97 0 79.435 0 57.7675V0H78.465V57.7675Z"
        fill="#46EBB0"
      />
      <path
        d="M38.0118 69.05C38.0118 66.241 40.2899 69.05 43.1016 69.05C45.9106 69.05 48.1913 66.241 48.1913 69.05C48.1913 71.8591 45.9132 74.1398 43.1016 74.1398C40.2899 74.1398 38.0118 71.8617 38.0118 69.05Z"
        fill="white"
      />
      <path
        d="M21.9868 69.05C21.9868 66.241 24.2649 69.05 27.0766 69.05C29.8856 69.05 32.1663 66.241 32.1663 69.05C32.1663 71.8591 29.8882 74.1398 27.0766 74.1398C24.2649 74.1398 21.9868 71.8617 21.9868 69.05Z"
        fill="white"
      />
      <path
        d="M27.0872 58.2664C27.0872 53.0982 31.2772 48.9108 36.4428 48.9108C41.6084 48.9108 45.7985 53.1008 45.7985 58.2664C45.7985 63.4321 41.6084 57.9055 36.4428 57.9055C31.2772 57.9055 27.0872 63.4321 27.0872 58.2664Z"
        fill="white"
      />
    </StyledGreenCartoon>
  );
};

export default GreenCartoon;
