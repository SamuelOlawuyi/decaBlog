import logo from '../../assets/images/Blogger-logo1.png';
import { BiLoader } from 'react-icons/bi';
import { styled } from 'styled-components';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Clearance = styled.div`
  height: 64px;
`;

function LoadingScreen() {
  return (
    <FlexColumn>
      <Clearance />
      <img src={logo} alt="blog logo" />
      <BiLoader size={64} />
      <h1>Loading...</h1>
    </FlexColumn>
  );
}

export default LoadingScreen;
