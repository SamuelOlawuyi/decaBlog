import myApi from '../api.config'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import LoadingScreen from '../pages/booting/Loading'
import Header from '../components0/Header'
import { StoryType, formatDate, readingTime } from '../utils'
import Comment from '../components0/Comment'
import NoAuth from '../pages/error/NoAuth'
import ServerError from '../pages/error/ServerError'
import NotFound from '../pages/error/NotFound'
import styles from './SingleStory.module.css'

export default function SingleStory() {
  const [story, setStory] = useState<StoryType | null>(null)
  const [status, setStatus] = useState(0)

  const { id } = useParams()

  useEffect(() => {
    myApi
      .get(`/api/stories/${id}`)
      .then((response) => {
        setStory(response.data)
        setStatus(response.status)
      })
      .catch((err) => {
        console.error(err.response)
        setStatus(err.response.status)
      })
  }, [id])

  if (status === 404) {
    return <NotFound />
  }
  if (status === 500) {
    return <ServerError />
  }

  if (status === 401) {
    return <NoAuth />
  }

  if (!story) {
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
      <section className={styles['page-section']}>
      <h2>{story.title}</h2>
      <p>Author: {story.author.username}</p>
      <p>Date: {formatDate(story.createdAt)}</p>
      <p>{readingTime(story.content)} min read</p>
      <p>{story.content}</p>
      <Link to={'/dashboard'}>
        <button className={styles.button}>Back to dashboard</button>
      </Link>
    </section>
      <Comment />
    </>
  )
}
