import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FullStory from './FullStory'
import Layout from '../../components/Layout'
import ServerError from '../error/ServerError'
import NoAuth from '../error/NoAuth'
import LoadingScreen from '../booting/Loading'
import myApi from '../../api.config'
import { styled } from 'styled-components'

const MyContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 50px;
  gap: 30px;
`
const Box1 = styled.div`
  min-width: 320px;
  max-width: 715px;
`
const Box2 = styled.div`
  min-width: 320px;
  max-width: 715px;
  height: 450px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`

function StoryPage() {
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const navigate = useNavigate()
  const { spaceId, storyId } = useParams()

  useEffect(() => {
    myApi
      .get(`/api/spaces/${spaceId}/stories/${storyId}`)
      .then((response) => {
        const { data } = response.data
        setData(data)
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.status)
        } else {
          setError(err)
        }
      })
  }, [spaceId, storyId])

  if (data) {
    return (
      <Layout userStatus={true}>
        <MyContent>
          <Box1>
            <FullStory story={data} />
          </Box1>
          <Box2>
            <p>More from author</p>
            <p>To be implemented</p>
          </Box2>
        </MyContent>
      </Layout>
    )
  }

  if (error) {
    if (error === 401) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
      return <NoAuth />
    }

    return <ServerError />
  }

  return <LoadingScreen />
}

export default StoryPage
