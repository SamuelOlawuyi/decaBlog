// USER LANDS HERE AFTER LOGIN

import { useState, useEffect } from 'react'
import myApi from '../api.config'
import LoadingScreen from '../pages/booting/Loading'
import { useNavigate, useParams } from 'react-router-dom'
import { StoryType } from '../utils'
import Header from '../components0/Header'
import StoryCardPreview from './StoryCardPreview'
import SpaceCategories from '../components0/SpaceCategories'
import styles from './StoriesListing.module.css'

function StoriesListing() {
  const [data, setData] = useState({ stories: [] } as { stories: StoryType[] })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const id = useParams().id || '6507b59d6b735c6a71432dc8'

  console.log(id)

  useEffect(() => {
    setLoading(true)
    myApi
      .get(`/api/stories/space/${id}`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err.response)
        setLoading(false)
        navigate('/login')
      })
  }, [navigate, id])

  const stories = data ? data.stories : []

  const renderStories = () => {
    return stories.map((story: StoryType) => (
      <StoryCardPreview key={story._id} story={story} />
    ))
  }

  if (!data) {
    return (
      <>
        <Header />
        <LoadingScreen />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <SpaceCategories />
        {loading ? <LoadingScreen /> : <div className={styles.stories}>{renderStories()}</div>}
      </div>
    </>
  )
}

export default StoriesListing
