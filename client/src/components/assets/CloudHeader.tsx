import styled from 'styled-components';

const StyledCloudHeader = styled.svg`
  position: absolute;
  right: 300px;
  top: 125px;
  z-index: -50;

  @media (min-width: 1200px) {
    right: 455px;
  }

  @media (min-width: 1350px) {
    right: 725px;
  }

  @media (min-width: 1700px) {
    right: 875px;
  }
`;

const CloudHeader = () => {
  return (
    <StyledCloudHeader
      width="140"
      height="105"
      viewBox="0 0 140 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.05"
        d="M107.346 28.4398C102.945 12.152 88.0648 0.154053 70.3806 0.154053C49.2333 0.154053 32.0854 17.302 32.0854 38.4493C32.0854 38.6057 32.0965 38.7509 32.0965 38.9073C14.3118 41.0299 0.917542 50.2574 0.917542 61.3281C0.917542 67.8298 5.54236 73.6948 12.9601 77.8505C12.5021 79.4033 12.2451 81.0231 12.2451 82.6765C12.2451 94.4734 24.5112 104.036 39.6372 104.036C49.3004 104.036 57.7794 100.137 62.6612 94.2388C70.8051 100.327 81.5296 104.036 93.2818 104.036C118.73 104.036 139.363 86.6982 139.363 65.3163C139.375 48.0566 125.924 33.4334 107.346 28.4398Z"
        fill="#C6C6C6"
      />
    </StyledCloudHeader>
  );
};

export default CloudHeader;
