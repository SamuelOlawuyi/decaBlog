import {
  Wrapper,
  Top,
  StoryHead,
  StorySub,
  Author,
  Content,
  LinkWrap,
  Continue,
} from './StoryPreview.style'

export interface StorySummary {
  _id: string
  title: string
  createdAt: string
  content: string
  author: {
    username: string
  }
}

interface StoryPreviewProps {
  stories: StorySummary[]
}

function StoryPreview({ stories }: StoryPreviewProps) {
  function trimContent(content: string) {
    const words = content.split(' ');
    if (words.length < 50) return content;
    const trimmed = words.slice(0, 50).join(' ') + '...';
    return trimmed
  }

  function getDate(date: string) {
    const dateObj = new Date(date)
    const month = dateObj.toLocaleString('default', { month: 'short' })
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    return `${month} ${day}, ${year}`
  }
  return (
    <>
      {stories.length === 0 && <p>No stories.</p>}
      {stories.map((story) => (
        <Wrapper key={story._id}>
          <Top>
            <StoryHead>{story.title}</StoryHead>
            <StorySub>
              <Author>{getDate(story.createdAt)}</Author>
            </StorySub>
            <Author>Author - {story.author.username}</Author>
          </Top>
          <Content>{trimContent(story.content)}</Content>
          <LinkWrap>
            <Continue to={`/story/id/${story._id}`}>Continue Reading</Continue>
          </LinkWrap>
        </Wrapper>
      ))}
    </>
  )
}

export default StoryPreview
