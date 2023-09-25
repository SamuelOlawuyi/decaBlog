import { useNavigate } from 'react-router-dom'

function LogoutButton() {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('token')

    // Redirect the user to the login page
    navigate('/login')
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton