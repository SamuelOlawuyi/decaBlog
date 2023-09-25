import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import devPic from '../../assets/images/rectangle_devs.png'

export const Large = styled.div`
  min-height: 487px;
  height: auto;
  width: 100%;
  background-image: url(${devPic});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 0px 0 30px 0;
`

export const LargeContent = styled.div`
  width: 100%;
  height: auto;
  min-height: 487px;
  background: linear-gradient(
    101.01deg,
    rgba(52, 168, 83, 1) 0%,
    rgba(0, 0, 0, 0.08) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-weight: bold;
`

export const LargeText = styled.div`
  width: 60%;
  text-align: center;
  font-size: 50px;
  line-height: 72px;
`

export const LargeOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px 0;
`

export const LargeLinkWhite = styled(Link)`
  padding: 16px 26px;
  font-size: 14px;
  border-radius: 8px;
  text-decoration: none;
  color: #000;
  background-color: #f2f4f7;
`

export const LargeLinkGreen = styled(Link)`
  padding: 16px 26px;
  font-size: 14px;
  border-radius: 8px;
  text-decoration: none;
  color: #fff;
  background-color: #34a853;
`

export const StackCont = styled.div`
  display: flex;
  width: auto;
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StackHeading = styled.h2`
  font-size: 32px;
  text-align: center;
`

export const StackP = styled.p`
  font-size: 18px;
  color: #2d3543;
  text-align: center;
  padding-bottom: 40px;
`

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
`

export const StackImg = styled.div<{ source: string }>`
  position: relative;
  width: 160px;
  height: 160px;
  background-image: url(${(props) => props.source});
  background-size: cover;
  border-radius: 30px;
  border: none;
  padding-top: 130px;
  padding-left: 20px;
  color: #fff;
`
