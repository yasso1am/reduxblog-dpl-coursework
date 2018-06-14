import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleBlog } from '../reducers/blogs'

const styles = {
  draft: {
    textDecoration: 'line-through',
    color: 'red'
  }
}

const Blog = ({ id, title, author, content, draft }) => (
  <Fragment>
    <li
      onClick={() => dispatch(toggleBlog(id))}
      style={ draft ? styles.draft : {}}
    >
      { title }
    </li>
    <p> { content } </p>
    <h6> { author } </h6>
    
  </Fragment>
)


export default connect()(Blog)





