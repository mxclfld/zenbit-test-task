import styled from 'styled-components';

const StyledYellowCartoonMap = styled.svg`
  display: none;
  @media (min-width: 1200px) {
    display: inline;
    position: absolute;
    right: 350px;
    bottom: 470px;
    z-index: -5;
  }

  @media (min-width: 1350px) {
    right: 450px;
  }

  @media (min-width: 1700px) {
    right: 550px;
  }
`;

const YellowCartoonMap = () => {
  return (
    <StyledYellowCartoonMap
      width="127"
      height="127"
      viewBox="0 0 127 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.7073 126.932C98.7774 126.932 127.207 98.5023 127.207 63.4323C127.207 28.3622 98.7774 -0.0677452 63.7073 -0.0677452C28.6372 -0.0677452 0.207314 28.3622 0.207314 63.4323C0.207314 98.5023 28.6372 126.932 63.7073 126.932Z"
        fill="#FAD34F"
      />
      <path
        d="M80.8142 83.1596C80.8142 87.7062 77.127 83.1596 72.5762 83.1596C68.0296 83.1596 64.3381 87.7062 64.3381 83.1596C64.3381 78.613 68.0253 74.9215 72.5762 74.9215C77.127 74.9215 80.8142 78.6087 80.8142 83.1596Z"
        fill="white"
      />
      <path
        d="M106.752 83.1596C106.752 87.7062 103.065 83.1596 98.5138 83.1596C93.9672 83.1596 90.2758 87.7062 90.2758 83.1596C90.2758 78.613 93.963 74.9215 98.5138 74.9215C103.065 74.9215 106.752 78.6087 106.752 83.1596Z"
        fill="white"
      />
      <path
        d="M98.4969 100.614C98.4969 108.979 91.7151 115.756 83.3543 115.756C74.9935 115.756 68.2117 108.974 68.2117 100.614C68.2117 92.2528 74.9935 101.198 83.3543 101.198C91.7151 101.198 98.4969 92.2528 98.4969 100.614Z"
        fill="white"
      />
    </StyledYellowCartoonMap>
  );
};

export default YellowCartoonMap;
