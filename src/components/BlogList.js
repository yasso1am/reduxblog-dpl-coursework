import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'

const mapStateToProps = (state) => {
  const { blogs } = state
  return { 
    blogs,
    blogCount: blogs.length,
  }
}
const BlogList = ({ blogs, blogCount }) => (
  <div>
      { blogs.map( (b) => 
        <Blog key={b.id} {...b}  />

      )}
    <hr />
    <h3>There are {blogCount} Blogs for you to read</h3>
    <hr />
  </div>
)


export default connect(mapStateToProps)(BlogList)
