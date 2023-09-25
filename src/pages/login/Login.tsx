import { useState, ChangeEvent, FormEvent } from 'react'
import myApi from '../../api.config'
import ServerError from '../error/ServerError'
import LinkLogo from '../../components/LinkLogo'
import { useNavigate } from 'react-router-dom'
import googleLogo from '../../assets/images/Google.png'
import {
  Container,
  Wrapper,
  LoginForm,
  Fields,
  Submit,
  Message,
  CustomLink,
  GoogleSignin,
  GooglesLogo,
} from './Login.style'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    myApi
      .post('/auth/login', formData)
      .then((response) => {
        const { token } = response.data
        localStorage.setItem('token', token)
        navigate('/blog/dashboard')
      })
      .catch((err) => {
        setTimeout(() => {
          console.error(err.response.data);
          navigate('/signup');
        }, 1000)

        return <ServerError />
      })
  }
  return (
    <Container>
      <LinkLogo />
      <Wrapper>
        <h3>Hi! Welcome Back</h3>
        <LoginForm onSubmit={handleSubmit}>
          <Fields
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <Fields
            type="password"
            name="password"
            id="password"
            required
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Submit type="submit">Login</Submit>
          <GoogleSignin href="http://localhost:3000/auth/google">
            <GooglesLogo src={googleLogo} />
            Google
          </GoogleSignin>
          <Message>
            Don't have an account? <CustomLink to="/signup">Sign up</CustomLink>
          </Message>
        </LoginForm>
      </Wrapper>
    </Container>
  )
}

export default Login
