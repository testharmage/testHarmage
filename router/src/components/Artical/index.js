import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Artical extends Component {
    

    render() {
        return (
            <div>
                <Link to ="/artical/1?from=artical">文章1</Link>
                <Link to ={{
                    pathname:'/artical/2',
                    state:{
                        from:'artical'
                    }
                }}>文章2</Link>
                {/* path="/artical/:id" 路由的通配符  */}
                {/* <Route path="/artical/:id" component={ArticalDeatail}/> */}
            </div>
        )
    }
}



export default Artical;
