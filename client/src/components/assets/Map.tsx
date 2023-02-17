import styled from 'styled-components';

const MaskMap = styled.img`
  display: none;

  @media (min-width: 1200px) {
    display: inline;
    position: absolute;
    overflow: hidden;
    z-index: -20;
    right: -500px;
    bottom: -170px;
    clip-path: circle(25%);
  }

  @media (min-width: 1350px) {
    right: -500px;
    bottom: -150px;
    clip-path: circle(30%);
  }

  @media (min-width: 1700px) {
    right: -500px;
    bottom: -120px;
    clip-path: circle(38%);
  }
`;

const Map = () => {
  return <MaskMap src="/map.png" />;
};

export default Map;
