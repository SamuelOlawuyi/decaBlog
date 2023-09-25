import { useState, useEffect } from 'react'
import myApi from '../api.config'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../pages/booting/Loading'
import styles from './Login.module.css'

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [data, setData] = useState(null)
  const page = (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
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
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      <a href="http://localhost:3000/auth/google">
        <button className={styles.button}>Continue with Google</button>
      </a>
    </div>
  );

  const loading = <LoadingScreen />
  const navigate = useNavigate()

  useEffect(() => {
    myApi
      .get('/auth/login')
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
      .post('/auth/login', formData)
      .then((response) => {
        console.log(response.data)
        const { token } = response.data
        localStorage.setItem('token', token)
        navigate('/dashboard')
      })
      .catch((error) => {
        console.error(error.response.data)
      })
  }
}

export default LoginForm
