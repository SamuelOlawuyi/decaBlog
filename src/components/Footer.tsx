import { styled } from 'styled-components'
import logo from '../assets/images/Blogger-logo1.png'

const Foot = styled.footer`
  max-height: 240px;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
  background-color: #f2f4f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Logo = styled.img`
  width: 48px;
  height: 48px;
`

const H4 = styled.h4`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  padding: 0 10px;
  color: #101828;
`
const Para = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

const Divider = styled.div`
  height: 5px;
  background-color: #eee;
  width: 100%;
`

function Footer() {
  return (
    <Foot>
      <Top>
        <Logo src={logo} alt="Blogger logo" />
        <H4>Decablog</H4>
      </Top>
      <Para>
        Decablog is a platform for budding software developers at Decagon to
        explore technical <br />
        writing and leverage the community to ask insightful questions and get
        answers - to connect and to help <br /> one another achieve the
        world-class developer dream.
      </Para>
      <Divider></Divider>
      <p>Copyright &copy; 2022. All rights reserved. Privacy & Terms.</p>
    </Foot>
  )
}

const Footer1 = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo" />
      <h1>DecaBlog</h1>
      <p>
        Decablog is a platform for budding software developers at Decagon to
        explore technical <br />
        writing and leverage the community to ask insightful questions and get
        answers - to connect and to help <br /> one another achieve the
        world-class developer dream.
      </p>
      <div className="divideFooter">
        <p>Copyright &copy; 2022. All rights reserved. Privacy & Terms.</p>
      </div>
    </div>
  )
}

export default Footer
export { Footer1 }
