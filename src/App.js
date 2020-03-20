import React, { Component } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Search from './components/user/Search';
import Users from './components/user/Users';
import User from './components/user/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

class App extends Component {

  state = { users: [], isLoading: false, alert: null, user: {}, repos: [] }

  fetchUsersHandler = async text =>{
    this.setState({isLoading: true});    
    const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_CLIENT_PASSWORD}`);
    this.setState({ users: res.data.items, isLoading: false });
  }

  clearUsersHandler = () => this.setState({ isLoading: false, users: [] });

  setAlertHandler = (msg, type) => this.setState({ alert: {msg, type} });

  resetAlertHandler = () => this.setState({alert: null});

  fetchUserDetailsHandler = async username => {
    this.setState({isLoading: true});    
    const res = await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_CLIENT_PASSWORD}`);
    this.setState({ user: res.data, isLoading: false });
  }


  fetchReposHandler = async username => {
    this.setState({isLoading: true});    
    const res = await Axios.get(`https://api.github.com/users/${username}/repos?page=1&sort=created:asc&client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_CLIENT_PASSWORD}`);
    console.log('Repos data: ', res.data);
    this.setState({ repos: res.data, isLoading: false });
  }

  render(){  
    const {users, isLoading, user, repos} = this.state;
    const navItems = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' }
    ];

    return (
      <Router>
      <div>
        <Navbar title='Github Finder' logo='fab fa-github mx-2' navItems={navItems} />
        <div className="container">
            <Switch>
              <Route path='/' exact render={(props)=>(
                <React.Fragment>
                  <div className="row text-center my-5">
                    <div className="col-lg-12">
                      <Alert alert={this.state.alert} resetAlert={this.resetAlertHandler} />
                      <Search fetchUsers={this.fetchUsersHandler} clearUsers={this.clearUsersHandler} setAlert={this.setAlertHandler} 
                        isClear={ users.length > 0 ? true : false }/>
                    </div>
                  </div>
                  <div className="row text-center">
                    <Users loading={isLoading} users={users} />
                  </div>
                </React.Fragment>
              )} />
              <Route path='/about' exact component={About} />
              <Route path='/user/:username' exact render={( props => (
                <User {...props} getUserDetails={this.fetchUserDetailsHandler} user={user} loading={isLoading}
                  getUserRepos={this.fetchReposHandler} repos={repos} /> 
              ) )}/>
            </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;