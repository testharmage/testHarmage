import React,{Component} from 'react'
import BlogItem from './BlogItem'
import { connect } from 'react-redux'
import {fetchBlogList} from '../../actions/blog'

class BlogList extends Component{
    //这里最好对传入的数据做检测，使用prop-types
    componentDidMount(){
        // getPost().then(response =>{
        //     console.log(response)
        // })
        this.props.fetchBlogList()
    }
    render () {
        console.log(this.props)
        const {
            list,
            isLoading,
            errMsg
        } = this.props
        const hasErr = Boolean(errMsg)
        return (
            isLoading ? <div>isLoading</div> :
            (
                hasErr ? 
                <div>{errMsg}</div> :
                    <ul>
                    {
                        list.map(item =>{
                            return (
                                <BlogItem key = {item.id} {...item} />
                            )
                        })
                    }
                    </ul>
            )
        ) 
    }
}

const mapState = state =>({
    list:state.blog.list,
    isLoading:state.blog.isLoading,
    errMsg:state.blog.errMsg
})

export default connect(mapState,{fetchBlogList})(BlogList);