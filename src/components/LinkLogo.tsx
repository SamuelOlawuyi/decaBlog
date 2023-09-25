import { styled } from 'styled-components'
import logo from '../assets/images/Blogger-logo1.png'
import { Link } from 'react-router-dom'

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  width: 52px;
  height: 52px;
`

function LinkLogo() {
  return (
    <FlexColumn>
      <Link to="/">
        <Logo src={logo} alt="blog logo" />
      </Link>
    </FlexColumn>
  )
}

export default LinkLogo
