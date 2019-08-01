//combineReducers 用来合并所有的reducer
import { combineReducers } from 'redux'

import blog from './blog/blog'

export default combineReducers({
    blog:blog
})