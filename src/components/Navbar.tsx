import { Link, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import myApi from '../api.config'
import LoadingScreen from '../pages/booting/Loading'
import LinkLogo from './LinkLogo'
import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineUsers } from 'react-icons/hi'
import { BiBell } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'

interface INav {
  user?: boolean
}

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
`

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: green;
  padding: 10px 16px;
  border-radius: 8px;
  margin: 10px 20px;
  &:hover {
    opacity: 0.8;
  }
`

const Logout = styled.button`
  text-decoration: none;
  color: #fff;
  background-color: green;
  padding: 10px 16px;
  border-radius: 8px;
  outline: none;
  border: none;
  margin: 10px 20px;
  &:hover {
    opacity: 0.8;
  }
`

const HomeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const NavOptions = styled.div`
  width: auto;
  max-width: 200px;
  display: flex;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const NavIcons = styled(Link)`
  text-decoration: none;
`

const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 320px;
`

const SearchDiv = styled.div`
  padding: 6px 10px;
  display: flex;
  width: 100%;
  font-size: 16px;
  border: 1px solid #ccc;
`
const SearchField = styled.input`
  outline: none;
  width: 100%;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`

function HomeNav({ user = false }: INav) {
  const navigate = useNavigate()

  function handleLogout() {
    myApi
      .post('/')
      .then((response) => {
        const { data } = response.data
        localStorage.removeItem('token')
        if (data) {
          setTimeout(() => {
            navigate('/')
          }, 3000)
          return <LoadingScreen />
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  if (user) {
    return (
      <Nav>
        <HomeDiv>
          <LinkLogo />
          <h2>Decablog</h2>
          <NavOptions>
            <NavIcons to="/blog/dashboard">
              <AiOutlineHome size={24} color={'#4ea855'} />
            </NavIcons>
            <NavIcons to="#">
              <HiOutlineUsers size={24} color={'#686e78'} />
            </NavIcons>
            <NavIcons to="#">
              <BiBell size={24} color={'#686e78'} />
            </NavIcons>
          </NavOptions>
        </HomeDiv>

        <SearchForm>
          <SearchDiv>
            <label htmlFor="search">
              <FiSearch size={16} />
            </label>
            <SearchField type="text" name="search" id="search" />
          </SearchDiv>
        </SearchForm>

        <Logout onClick={handleLogout}>Logout</Logout>
      </Nav>
    )
  }
  return (
    <Nav>
      <LinkLogo />
      <CustomLink to="/login">Get Started</CustomLink>
    </Nav>
  )
}

export default HomeNav
