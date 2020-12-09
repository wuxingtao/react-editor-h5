/**
 * @Desc: index
 * @Author: wu xingtgao
 * @Date: 2020/12/9
 */
import * as React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from '../views/Home';

interface Props {
  [key: string]: any
}

class Routers extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route path='/home' component={Home}/>
        <Redirect from='/' to='/home' exact/>
      </Switch>
    );
  }
}

export default Routers;
