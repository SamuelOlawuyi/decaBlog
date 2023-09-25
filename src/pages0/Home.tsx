// HOME OR LANDING PAGE

import myApi from '../api.config'
import Header from '../components0/Header'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LoadingScreen from '../pages/booting/Loading'

function Home() {
  const [data, setData] = useState(null)

  const page = (
    <div>
      <Header />
      <div>
        <p>
          Join the Decadevs gist space with the latest articles in tech world
        </p>
        <div>
          <Link to="/login">
            <button>Get Started</button>
          </Link>
          <Link to={'/limited-listing'}>
            <button>See Stories</button>
          </Link>
        </div>
      </div>
    </div>
  )
  const loading = <LoadingScreen />

  useEffect(() => {
    myApi
      .get('/')
      .then((response) => {
        console.log('success')
        console.log(response.data)
        setData(response.data)
      })
      .catch((err) => {
        console.error(err.status)
      })
  }, [])

  return data ? page : loading
}

export default Home
