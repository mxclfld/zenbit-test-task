import styled from 'styled-components';

const StyledCloudBottom = styled.svg`
  position: absolute;
  left: 50px;
  bottom: 150px;
  z-index: -20;

  @media (min-width: 768px) {
    left: 140px;
  }
`;

const CloudBottom = () => {
  return (
    <StyledCloudBottom
      width="289"
      height="217"
      viewBox="0 0 289 217"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.05"
        d="M221.539 59.0048C212.376 25.01 181.402 0 144.595 0C100.565 0 64.8848 35.7681 64.8848 79.8772C64.8848 80.2056 64.911 80.5208 64.911 80.8361C27.8808 85.2759 0 104.519 0 127.612C0 141.168 9.63442 153.397 25.0757 162.093C24.1188 165.337 23.5945 168.7 23.5945 172.167C23.5945 196.77 49.1158 216.723 80.6144 216.723C100.722 216.723 118.392 208.579 128.537 196.298C145.486 209 167.809 216.723 192.282 216.723C245.265 216.723 288.22 180.561 288.22 135.94C288.22 99.922 260.221 69.4213 221.539 59.0048Z"
        fill="#C6C6C6"
      />
    </StyledCloudBottom>
  );
};

export default CloudBottom;
