import React from 'react';
import { connect } from 'react-redux'
import { addBlog } from '../reducers/blogs'
import { incId } from '../reducers/nextId'

class BlogForm extends React.Component{
  state = {
    title: '',
    content: '',
    author: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {title, content, author } = this.state
    const { dispatch, id } = this.props
    const blog = { title, content, author, id, draft: false }
    dispatch(addBlog(blog))
    dispatch(incId())
    this.setState({ title: '', content: '', author: ''})
  }

  handleChange = (e) => {
    const { target: { name, value } } = e
      this.setState({ [name]: value})
  }

  render() {
    const { title, content, author } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row col s12">
        <input className="col s8"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
          required
        />
        <input className="col s8"
          name="content"
          placeholder="Blog Content"
          value={content}
          onChange={this.handleChange}
          required
        />
        <input className="col s8"
          name="author"
          placeholder="Autor"
          value={author}
          onChange={this.handleChange}
          required
        />
        <button className="btn">Submit</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm)