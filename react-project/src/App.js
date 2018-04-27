import React, { Component } from 'react';
import { Route , Switch , Redirect , withRouter} from 'react-router-dom';
import { Home , HomeInput , NotFound ,ListDateil } from './components/pages/index';

let routes = [
  {path : '/' , component : Home },
  {path : '/homeinput' , component : HomeInput },
  {path : '/notfound' , component : NotFound },
  {path : '/listdateil/:name' , component : ListDateil }
  
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {
            routes.map(route => {
              return <Route exact path ={route.path} component={route.component} key ={route.path} />
            } )
          }
          <Redirect from='**' to='/notfound' />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
