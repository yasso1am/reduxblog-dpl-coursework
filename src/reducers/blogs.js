const ADD_BLOG = 'ADD_BLOG'
const TOGGLE_BLOG = 'TOGGLE_BLOG'
const DELETE_BLOG = 'DELETE_BLOG'

export const deleteBlog = (id) => {
  return { type: DELETE_BLOG, id }
}

export const addBlog = (blog) => {
  return { type: ADD_BLOG, blog }
}

export const toggleBlog = (id) => {
  return { type: TOGGLE_BLOG, id }
}

export default ( state = [], action ) => {
  switch(action.type){
    case ADD_BLOG:
      return [action.blog, ...state]
    case TOGGLE_BLOG:
      return  state.map( blog => {
        if (blog.id === action.id)
        return {...blog, draft: !blog.draft}
        return blog
      })
    case DELETE_BLOG:
      return state.filter( blog => blog.id !== action.id )
      default:
        return state
  }
}