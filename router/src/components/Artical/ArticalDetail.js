import React, { Component } from 'react'
import { ButtonBackHome } from '../../views'

export class ArticalDeatail extends Component {
  
    render() {
        console.log(this.props)
        return (
            <div>
                ArticalDeatail {this.props.match.params.id}
                <ButtonBackHome />
            </div>
        )
    }
}


export default ArticalDeatail;
