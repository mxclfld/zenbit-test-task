import styled from 'styled-components';

const StyledRedCartoonMap = styled.svg`
  display: none;
  @media (min-width: 1200px) {
    display: inline;
    position: absolute;
    right: 200px;
    bottom: 250px;
    z-index: -10;
  }

  @media (min-width: 1350px) {
    right: 300px;
  }

  @media (min-width: 1700px) {
    right: 400px;
  }
`;

const RedCartoonMap = () => {
  return (
    <StyledRedCartoonMap
      width="299"
      height="298"
      viewBox="0 0 299 298"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_29)">
        <path
          d="M218.884 225.942C175.22 265.761 108.448 263.637 69.7446 221.198C31.0414 178.758 35.0629 112.073 78.727 72.2535C122.391 32.4338 189.163 34.5579 227.866 76.9977C266.569 119.438 262.548 186.122 218.884 225.942Z"
          fill="#F472B7"
        />
        <path
          d="M104.344 129.984C106.96 132.853 108.005 129.478 110.957 126.787C113.909 124.095 117.654 123.11 115.033 120.236C112.412 117.362 107.903 117.223 104.951 119.915C101.995 122.602 101.723 127.11 104.344 129.984Z"
          fill="white"
        />
        <path
          d="M83.9193 148.61C86.5356 151.479 87.5808 148.105 90.5324 145.413C93.484 142.721 97.2293 141.736 94.6084 138.862C91.9874 135.988 87.4781 135.85 84.5265 138.541C81.5703 141.228 81.2984 145.736 83.9193 148.61Z"
          fill="white"
        />
        <path
          d="M101.157 157.316C106.268 162.92 115.087 163.201 120.853 157.942C126.619 152.684 127.15 143.876 122.039 138.272C116.928 132.667 117.719 142.925 111.953 148.183C106.187 153.442 96.0457 151.711 101.157 157.316Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_29">
          <rect
            width="214"
            height="208"
            fill="white"
            transform="matrix(-0.738886 0.673831 0.673831 0.738886 158.121 0)"
          />
        </clipPath>
      </defs>
    </StyledRedCartoonMap>
  );
};

export default RedCartoonMap;
