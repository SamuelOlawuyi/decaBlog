import { Wrapper, Top, Heading, StorySub } from './FullStory.style'

export interface IStory {
  title: string
  content: string
  createdAt: string
  author: string
}

interface FullStoryProps {
  story: IStory
}

function FullStory({ story }: FullStoryProps) {
  return (
    <>
      <Wrapper>
        <Top>
          <Heading>{story.title}</Heading>
        </Top>
        <StorySub>
          <p>{story.createdAt}</p>
        </StorySub>
        <p>Author-- {story.author}</p>
        <p>{story.content}</p>
      </Wrapper>
    </>
  )
}

export default FullStory
