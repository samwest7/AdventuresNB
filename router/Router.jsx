import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppBarMenu from '../components/AppBarMenu/AppBarMenu.presentation';
import Dashboard from '../components/Dashboard/Dashboard.container';
import Splash from '../components/Splash/Splash.container';
import AdventureList from '../components/AdventureList/AdventureList.container';
import AdventureDetail from '../components/AdventureDetail/AdventureDetail.presentation';
import PageNotFound from '../components/PageNotFound/PageNotFound.presentation';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <AppBarMenu />
          <Switch>
            <Redirect exact from={process.env.PUBLIC_URL + '/'} to={process.env.PUBLIC_URL + '/splash'} />
            <Route path={process.env.PUBLIC_URL + '/splash'} component={Splash} />
            <Route path={process.env.PUBLIC_URL + '/dashboard'} component={Dashboard} />
            <Route exact path={process.env.PUBLIC_URL + '/clinics'} component={AdventureList} />
            <Route path={process.env.PUBLIC_URL + '/clinics/:adventureId'} component={AdventureDetail} />
            <Route path={process.env.PUBLIC_URL + '*'} component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
