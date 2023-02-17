import styled from 'styled-components';

const CloudMessageStyled = styled.svg`
  position: absolute;
  bottom: 500px;
  left: -90px;
  z-index: -50;
`;

const CloudMessage = () => {
  return (
    <CloudMessageStyled
      width="219"
      height="165"
      viewBox="0 0 219 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.15"
        d="M168.301 44.7098C161.34 18.9509 137.809 0 109.847 0C76.3981 0 49.2923 27.1026 49.2923 60.5255C49.2923 60.7743 49.3123 61.0132 49.3123 61.2521C21.1808 64.6163 0 79.1978 0 96.6955C0 106.967 7.31917 116.234 19.0497 122.823C18.3228 125.281 17.9245 127.829 17.9245 130.457C17.9245 149.099 37.3128 164.218 61.242 164.218C76.5176 164.218 89.9411 158.047 97.6486 148.741C110.524 158.366 127.483 164.218 146.075 164.218C186.325 164.218 218.958 136.817 218.958 103.006C218.958 75.7141 197.687 52.6027 168.301 44.7098Z"
        fill="#C6C6C6"
      />
    </CloudMessageStyled>
  );
};

export default CloudMessage;
