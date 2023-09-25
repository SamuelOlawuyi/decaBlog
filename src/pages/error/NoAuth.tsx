import { Link } from 'react-router-dom';
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

function NoAuth() {
  return (
    <ErrorPage>
      <Clearance />
      <img src={logo} alt="Blogger logo" />
      <h1>Unauthorised</h1>
      <Link to='/login'>
        <p>Please Login.</p>
      </Link>
    </ErrorPage>
  );
}

export default NoAuth;
