import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ServerError from '../error/ServerError'
import NoAuth from '../error/NoAuth'
import myApi from '../../api.config'

function Sso() {
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    myApi
      .get(`/auth/google`)
      .then((response) => {
        const { token } = response.data
        localStorage.setItem('token', token)
        navigate('/blog/dashboard')
        return
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.status)
        } else {
          setError(err)
        }
      })
  }, [id, navigate])

  if (error) {
    if (error === 401) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
      return <NoAuth />
    }

    return <ServerError />
  }

  return <ServerError />
}

export default Sso
