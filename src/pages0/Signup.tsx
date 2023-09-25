import { useState, useEffect } from 'react'
import myApi from '../api.config'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../pages/booting/Loading'

function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    fullname: '',
    password: '',
  })
  const [data, setData] = useState(null)
  const navigate = useNavigate()
  const page = (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
  const loading = <LoadingScreen />

  const endpoint = '/auth/signup'

  useEffect(() => {
    myApi
      .get(endpoint)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.error(err.status)
      })
  }, [])

  return data ? page : loading

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    myApi
      .post(endpoint, formData)
      .then(() => {
        console.log('User signed up successfully!')
        navigate('/login')
      })
      .catch((error) => {
        console.error('An error occured: ', error.response.data)
      })
  }
}

export default SignupForm
