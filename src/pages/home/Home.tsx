import Layout from '../../components/Layout'
import fashion from '../../assets/images/fashion.png'
import python from '../../assets/images/python.png'
import tslaptop from '../../assets/images/ts_laptop.png'
import nodejs from '../../assets/images/nodejs.png'
import html from '../../assets/images/html.png'
import ios from '../../assets/images/ios.png'
import java from '../../assets/images/java.png'
import react from '../../assets/images/React.png'
import {
  Large,
  LargeContent,
  LargeText,
  LargeOptions,
  LargeLinkWhite,
  LargeLinkGreen,
  StackCont,
  StackHeading,
  StackP,
  ImgWrapper,
  StackImg,
} from './Home.style'

function Home() {
  return (
    <Layout>
      <Large>
        <LargeContent>
          <LargeText>
            Join the decadev gist space with the latest articles in the world.
          </LargeText>
          <LargeOptions>
            <LargeLinkGreen to="/login">Get Started</LargeLinkGreen>
            <LargeLinkWhite to="/">See Stories</LargeLinkWhite>
          </LargeOptions>
        </LargeContent>
      </Large>
      <StackCont>
        <StackHeading>Tips and recommendations on tech stacks</StackHeading>
        <StackP>
          Read Articles, join spaces hosted by different Decadevs just like you.
        </StackP>
        <ImgWrapper>
          <StackImg source={java}>Java</StackImg>
          <StackImg source={python}>Python</StackImg>
          <StackImg source={html}></StackImg>
          <StackImg source={ios}>IOS</StackImg>
          <StackImg source={tslaptop}>Typescript</StackImg>
          <StackImg source={nodejs}>Node js</StackImg>
          <StackImg source={fashion}>JS</StackImg>
          <StackImg source={react}>React</StackImg>
        </ImgWrapper>
      </StackCont>
    </Layout>
  )

}

export default Home
