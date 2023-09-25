import { formatDate, readingTime, previewTextTo50Words } from "../utils"
import { Link } from "react-router-dom"
import { StoryType } from "../utils"
import styles from './StoryCardPreview.module.css'

export default function StoryCardPreview({story}: {story: StoryType}){
  return (
    <div className={styles.story}>
      <h2>{story.title}</h2>
      <p>Author: {story.author.username}</p>
      <p>Date: {formatDate(story.createdAt)}</p>
      <p>{readingTime(story.content)} min read</p>
      <p>{previewTextTo50Words(story.content)}</p>
      <Link to={`/stories/${story._id}`}>
        <button className={styles.button}>Read more</button>
      </Link>
    </div>
  )
}

