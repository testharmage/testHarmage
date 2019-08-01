import React ,{Component}from 'react';
import { Link,Route,Switch,Redirect} from 'react-router-dom'
import './App.css';
import './components'
import { Home, Users, Artical, ArticalDetail, NotFound } from './components';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLogin : false
    }
  }
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/artical">Artical</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/home" component={Home}  />
          <Route path="/users/" render={(routeProps)=>{
            return (
              this.state.isLogin ? <Users {...routeProps} /> : <div>请登录</div>
            )
          }} />
          <Route path="/artical/" component={Artical} exact/>
          <Route path="/artical/:id" component={ArticalDetail} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/home" from="/" exact />
          <Redirect to="/404" />
        </Switch>
        
      </div>
    )
  }
}
export default App;
