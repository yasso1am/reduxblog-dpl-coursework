import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'

const BlogList = ({ blogs, blogCount }) => (
  <div>
    <h3>There are {blogCount} Blogs for you to read</h3>
    <ul>
      { blogs.map( (b) => 
        <Blog key={b.id} {...b} />

      )}
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  const { blogs } = state
  return { 
    blogs,
    blogCount: blogs.length,
  }
}

export default connect(mapStateToProps)(BlogList)
