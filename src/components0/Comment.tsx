import styles from './Comment.module.css'

function Comment() {
  return (
    <>
      <div className={styles.container}>
        <h3>Comments</h3>
        <div>
          <p>John Doe</p>
          <p>
            Testing. There is no universally accepted definition of a mountain.
            Elevation, volume, relief, steepness, spacing and continuity have
            been used as criteria for defining a mountain.
          </p>
          <button>Reply</button>
        </div>
        <form>
          <h4>Leave a comment</h4>
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="comment" cols={30} rows={10}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Comment
