import { Link } from 'react-router-dom'
import logo from '../assets0/images/blog-logo.svg'
import bell from '../assets0/images/icon/bell.svg'
import search from '../assets0/images/icon/search.svg'
import home from '../assets0/images/icon/home.svg'
import userIcon from '../assets0/images/icon/users.svg'
import style from './Header.module.css'
import LogoutButton from './LogoutButton'

function Header() {
  return (
    <div className={style.main_header}>
      <div className={style.flex}>
        <div className={style.flex}>
          <img src={logo} alt="logo" />
          <span>DecaBlog</span>
        </div>
        <div className={style.flex}>
          <img src={home} alt="home icon" />
          <img src={userIcon} alt="user icon" />
          <img src={bell} alt="notification icon" />
        </div>
      </div>
      <form className={style.flex}>
        <label htmlFor="search">
          <img src={search} alt="search" />
        </label>
        <input id="search" type="search" placeholder="Search" />
      </form>
      <div className={style.flex}>
        <Link to="/login">
          <button>Get Started</button>
        </Link>
        <LogoutButton />
      </div>
    </div>
  )
}

export default Header
