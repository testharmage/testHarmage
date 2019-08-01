import React,{Component} from 'react';
import { BlogList,CartList } from './components'
class App extends Component{
  render() {
    return (
      <div >
        <BlogList />
        <CartList />
      </div>
    )
  }
}

export default App;
