import { useEffect, useState } from 'react'
import myApi from '../api.config'
import styles from './SpaceCategories.module.css'
import { Link } from 'react-router-dom'

export default function SpaceCategories() {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    myApi
      .get('/api/spaces')
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [])

  if (!data) {
    return <p className={styles.container}>Loading...</p>
  }

  return (
    <div className={styles.container}>
      <button>Space Categories</button>
      <div>
        {/* <h2>SPACE CATEGORIES</h2> */}
        <h2>CATEGORIES</h2>
        <ul>
          {data.spaces.map((space) => (
            <Link key={space._id} to={`/spaces/${space._id}`}>
              <li>{space.name}</li>
            </Link>
          ))}
        </ul>
        <p>Discover More</p>
      </div>
    </div>
  )
}


interface Space {
  _id: string
  name: string
}

interface ApiResponse {
  spaces: Space[]
}