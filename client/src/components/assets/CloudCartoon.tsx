import styled from 'styled-components';

const StyledCloudCartoon = styled.svg`
  display: none;

  @media (min-width: 1200px) {
    display: inline;
    position: absolute;
    right: 375px;
    bottom: 250px;
    z-index: -50;
  }

  @media (min-width: 1350px) {
    right: 475px;
  }

  @media (min-width: 1700px) {
    right: 575px;
  }
`;

const CloudCartoon = () => {
  return (
    <StyledCloudCartoon
      width="170"
      height="129"
      viewBox="0 0 170 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.09"
        d="M130.519 34.9771C125.121 14.8255 106.873 0 85.1876 0C59.2475 0 38.2267 21.2027 38.2267 47.3499C38.2267 47.5446 38.2422 47.7314 38.2422 47.9183C16.4259 50.5501 0 61.9574 0 75.6462C0 83.6819 5.67609 90.9311 14.7733 96.0858C14.2095 98.0091 13.9006 100.002 13.9006 102.058C13.9006 116.642 28.9365 128.47 47.4938 128.47C59.3402 128.47 69.7502 123.642 75.7275 116.362C85.7128 123.892 98.8643 128.47 113.282 128.47C144.497 128.47 169.804 107.034 169.804 80.5828C169.804 59.2321 153.308 41.1518 130.519 34.9771Z"
        fill="#C6C6C6"
      />
    </StyledCloudCartoon>
  );
};

export default CloudCartoon;
