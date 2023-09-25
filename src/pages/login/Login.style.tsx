import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 25px;
  margin-top: 20px;
  width: 360px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
`

export const LoginForm = styled.form`
  width: 100%;
  padding: 3px 10px;
`

export const Fields = styled.input`
  display: block;
  font-size: 18px;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  outline: none;
  margin: 18px 0px;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
  }
`

export const Submit = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background-color: green;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  text-align: center;
  margin: 10px 0;
`
export const Message = styled.div`
  margin: 10px 0;
  text-align: center;
  color: #8c96a7;
  font-size: 14px;
`
export const CustomLink = styled(Link)`
  color: green;
  text-decoration: none;
`

export const GoogleSignin = styled.a`
  margin: 20px 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
  color: gray;
  text-align: center;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 12px 12px;
  border-radius: 6px;
  text-decoration: none;
`

export const GooglesLogo = styled.img`
  width: 20px;
  height: 20px;
`
