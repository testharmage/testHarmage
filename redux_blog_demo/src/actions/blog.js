import actionTypes  from './actionTypes'
import {getPost} from '../services'
const startFetchBlogList = () =>{
    return {
        type:actionTypes.START_FETCH_BLOG_LIST
    }
}
const fetchBlogListSuccess = (payload) =>{
    return {
        type:actionTypes.FETCH_BLOG_LIST_SUCCESS,
        payload
    }
}
const fetchBlogListFailed = () =>{
    return {
        type:actionTypes.FETCH_BLOG_LIST_FAILED
    }
}
export const fetchBlogList = () => dispatch =>{
    dispatch(startFetchBlogList())
    getPost().then(response => {
        console.log(response)
        if(response.status
            ===200){
            dispatch(fetchBlogListSuccess({
                list:response.data
            }))
        }else{
            dispatch(fetchBlogListFailed())
        }
    }).catch(error => {
        console.log(error)
        dispatch(fetchBlogListFailed())
    })
}
