import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleBlog, deleteBlog } from '../reducers/blogs'

const styles = {
  draft: {
    textDecoration: 'line-through',
    color: 'red'
  }
}

const Blog = ({ id, title, author, content, draft, dispatch }) => (
  <Fragment>
    <h4
      onClick={() => dispatch(toggleBlog(id))}
      style={ draft ? styles.draft : {}}
    >
    Title:  { title }
    </h4>
    <p style={ draft ? styles.draft : {}}> { content } </p>
    <h6 style={ draft ? styles.draft : {}}>Author: { author } </h6>
    <hr />
    <button 
      className="btn"
      onClick={() => dispatch(toggleBlog(id))}
      style={ draft ? styles.draft : {}}
    >
      Mark as Red
    </button>
    <button 
      className="btn"
      onClick={() => dispatch(deleteBlog(id))}
      >
      Never Again
    </button> 
    
  </Fragment>
)


export default connect()(Blog)





