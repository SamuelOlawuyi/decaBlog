import myApi from '../../api.config'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ServerError from '../error/ServerError'
import NoAuth from '../error/NoAuth'
import LoadingScreen from '../booting/Loading'
import Layout from '../../components/Layout'
import StoryPreview from './StoryPreview'
import SpaceSide from './SpaceSide'
import { styled } from 'styled-components'

const MyContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`
const Box1 = styled.div`
  width: 259px;
`

const Box2 = styled.div`
  width: 715px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
`

function Dashboard() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    myApi
      .get('/api/spaces/6507b59d6b735c6a71432dc8/stories')
      .then((response) => {
        setData(response.data.stories)
      })
      .catch((err) => {
        if (err.response) {
          console.error(err.response)
          setError(err.response.status)
        } else {
          setError(err)
        }
      })
  }, [])

  if (data) {
    return (
      <Layout userStatus={true}>
        <MyContent>
          <Box1>
            <SpaceSide />
          </Box1>
          <Box2>
            <StoryPreview stories={data} />
          </Box2>
        </MyContent>
      </Layout>
    )
  }

  if (error) {
    if (error === 401) {
      setTimeout(() => {
        navigate('/login')
      }, 1000)
      return <NoAuth />
    }

    return <ServerError />
  }

  return <LoadingScreen />
}

export default Dashboard
