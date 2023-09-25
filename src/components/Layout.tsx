import { ReactNode } from 'react'
import { styled } from 'styled-components'
import Footer from './Footer'
import HomeNav from './Navbar'

interface ILayout {
  children: ReactNode
  userStatus?: boolean
}

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 250px;
  min-height: 100vh;
  background-color: #f8fbfb;
`

function Layout({ children, userStatus = false }: ILayout) {
  if (userStatus) {
    return (
      <Container>
        <HomeNav user={true} />
        {children}
        <Footer />
      </Container>
    )
  }
  return (
    <Container>
      <HomeNav />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
