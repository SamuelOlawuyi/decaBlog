import logo from '../../assets/images/Blogger-logo1.png';
import { styled } from 'styled-components';

const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Clearance = styled.div`
  height: 64px;
`;

function ServerError() {
  return (
    <ErrorPage>
      <Clearance />
      <img src={logo} alt="Blogger logo" />
      <h1>Server is possibly down</h1>
      <p>Please try again later.</p>
    </ErrorPage>
  );
}

export default ServerError;
