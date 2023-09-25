import {
  Wrapper,
  Top,
  CategoriesWrap,
  CategoryHead,
  Category,
} from './SpaceSide.style'

function SpaceSide() {
  return (
    <Wrapper>
      <Top to="#">Spaces</Top>
      <CategoriesWrap>
        <CategoryHead>CATEGORIES</CategoryHead>
        <Category to="#">Javascript</Category>
        <Category to="#">Python</Category>
        <Category to="#">Typescript</Category>
        <Category to="#">Nodejs</Category>
        <Category to="#">HTML</Category>
        <Category to="#">IOS</Category>
        <Category to="#">Java</Category>
        <Category to="#">React</Category>
      </CategoriesWrap>
    </Wrapper>
  )
}

export default SpaceSide
