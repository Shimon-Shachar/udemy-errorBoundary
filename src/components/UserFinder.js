import { Fragment, useState, useEffect, Component } from 'react';
import classes from './UserFinder.module.css';
import Users from './Users';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';


class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super(); 
    this.state = {
      filteredUsers: [],
      searchTerm: '', 
    };
  }
  
  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }
  
  componentDidUpdate(prevProps , prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
      filteredUsers: this.context.users.filter((user) => 
        user.name.includes(this.state.searchTerm)
        )
      });
    }
  }
    	
  
  searchChangeHandler(event) {
    this.setState({searchTerm: event.target.value});
  }
  
  render () {
    return (
      <Fragment>
      <input type='search' onChange={this.searchChangeHandler.bind(this)} />
      <ErrorBoundary>
        <Users users={this.state.filteredUsers} />
      <ErrorBoundary />
    </Fragment>
    );	
  };
}

export default UserFinder;
