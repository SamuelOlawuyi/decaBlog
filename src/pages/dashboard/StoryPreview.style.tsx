import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 20px;
  color: #131b2a;
  background-color: #fefffe;
  text-align: left;
  width: 100%;
  border-radius: 12px;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`

export const StoryHead = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111829;
  margin-bottom: 10px;
`

export const StorySub = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`

export const Author = styled.div`
  font-size: 16px;
`

export const Content = styled.div`
  font-size: 16px;
`

export const LinkWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Continue = styled(Link)`
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 18px;
  background-color: #34a952;
  color: #fefffe;
  display: flex;
  justify-content: center;
  align-items: center;
`
