import styled from 'styled-components';

const StyledCloudButtonSmall = styled.svg`
  position: absolute;
  bottom: 350px;
  left: 5px;
  z-index: -50;

  @media (min-width: 768px) {
    left: 110px;
  }
`;

const CloudButtonSmall = () => {
  return (
    <StyledCloudButtonSmall
      width="132"
      height="100"
      viewBox="0 0 132 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M101.324 27.0692C97.1334 11.4737 82.9669 0 66.1325 0C45.9948 0 29.676 16.4091 29.676 36.6447C29.676 36.7954 29.688 36.94 29.688 37.0846C12.7517 39.1214 0 47.9497 0 58.5435C0 64.7625 4.40644 70.3728 11.4687 74.3621C11.0311 75.8505 10.7913 77.3932 10.7913 78.9841C10.7913 90.2709 22.4638 99.4246 36.8702 99.4246C46.0667 99.4246 54.1482 95.6884 58.7884 90.054C66.5402 95.8813 76.7499 99.4246 87.9429 99.4246C112.175 99.4246 131.821 82.8347 131.821 62.3641C131.821 45.8405 119.016 31.8479 101.324 27.0692Z"
        fill="#C6C6C6"
      />
    </StyledCloudButtonSmall>
  );
};

export default CloudButtonSmall;
