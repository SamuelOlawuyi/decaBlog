import { useState, ChangeEvent, FormEvent } from 'react'
import myApi from '../../api.config'
import ServerError from '../error/ServerError'
import LinkLogo from '../../components/LinkLogo'
import { useNavigate } from 'react-router-dom'
import googleLogo from '../../assets/images/Google.png'
import {
  Container,
  Wrapper,
  SignupForm,
  Fields,
  Submit,
  Message,
  CustomLink,
  GoogleSignin,
  GooglesLogo,
} from './Signup.style'

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    fullname: '',
  })
  const navigate = useNavigate()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('Signing up...')
    myApi
      .post('/auth/signup', formData)
      .then((response) => {
        // const { token } = response.data
        // localStorage.setItem('token', token)
        console.log(response);
        navigate('/login');
      })
      .catch((error) => {
        setTimeout(() => {
          console.error(error.response);
          navigate('/signup')
        }, 500)

        return <ServerError />
      })
  }
  return (
    <Container>
      <LinkLogo />
      <Wrapper>
        <h2>Create Account</h2>
        <SignupForm onSubmit={handleSubmit}>
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
            type="text"
            name="username"
            id="username"
            required
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <Fields
            type="text"
            name="fullname"
            id="fullname"
            required
            placeholder="Full Name"
            value={formData.fullname}
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
          <Submit type="submit">Create Account</Submit>
          <GoogleSignin href="http://localhost:3000/auth/google">
            <GooglesLogo src={googleLogo} />
            Google
          </GoogleSignin>
          <Message>
            Already have an account? <CustomLink to="/login">Login</CustomLink>
          </Message>
        </SignupForm>
      </Wrapper>
    </Container>
  )
}

export default Signup
