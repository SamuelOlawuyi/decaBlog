import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 20px;
  color: #131b2a;
  background: none;
  text-align: left;
  width: 100%;
`

export const Top = styled(Link)`
  width: 100%;
  text-decoration: none;
  background-color: #f2f4f7;
  padding: 10px 20px;
  color: #131b2a;
`

export const CategoryHead = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #b4bbc7;
  margin-bottom: 10px;
`

export const CategoriesWrap = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  gap: 10px;
  padding: 30px 16px;
`

export const Category = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 5px 16px;
  background: none;
  border: none;
  color: #131b2a;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
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
`
