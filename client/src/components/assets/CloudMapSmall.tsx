import styled from 'styled-components';

const StyledCloudMapSmall = styled.svg`
  position: absolute;
  right: 180px;
  top: 255px;
  z-index: -50;

  @media (min-width: 1200px) {
    right: 455px;
  }

  @media (min-width: 1350px) {
    right: 555px;
  }

  @media (min-width: 1700px) {
    right: 705px;
  }
`;

const CloudMapSmall = () => {
  return (
    <StyledCloudMapSmall
      width="173"
      height="130"
      viewBox="0 0 173 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M132.236 35.2812C126.767 14.9545 108.279 0 86.3085 0C60.0271 0 38.7297 21.3871 38.7297 47.7616C38.7297 47.958 38.7454 48.1465 38.7454 48.335C16.642 50.9897 0 62.4962 0 76.3039C0 84.4095 5.75078 91.7218 14.9677 96.9213C14.3965 98.8613 14.0835 100.872 14.0835 102.946C14.0835 117.657 29.3172 129.587 48.1187 129.587C60.121 129.587 70.668 124.717 76.7239 117.374C86.8406 124.969 100.165 129.587 114.773 129.587C146.398 129.587 172.038 107.964 172.038 81.2835C172.03 59.7472 155.318 41.5097 132.236 35.2812Z"
        fill="#C6C6C6"
      />
    </StyledCloudMapSmall>
  );
};

export default CloudMapSmall;
