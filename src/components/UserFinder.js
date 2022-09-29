import { Fragment, useState, useEffect, Component } from 'react';
import classes from './UserFinder.module.css';
import Users from './Users';

const DUMMY_USERS =[
	{id:'u1', name: 'Jack'},
	{id: 'u2', name: 'John' },
	{id: 'u3', name: 'Heidi'},
	{id:'u4', name: 'Tim'},
	{id: 'u5', name: 'Barry'}
  ];

class UserFinder extends Component {

  constructor() {
    super(); 
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: '', 
    };
  }
  
  componentDidUpdate(prevProps , prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
      filteredUsers: DUMMY_USERS.filter((user) => 
        user.name.includes(this.state.searchTerm)
        )
      });
    }
  }
    	
  
  searchChangeHandler(event) {
    console.log(event.target.value);
    this.setState({searchTerm: event.target.value});
  }
  
  render () {
    return (
      <Fragment>
      <input type='search' onChange={this.searchChangeHandler.bind(this)} />
      <Users users={this.state.filteredUsers} />
    </Fragment>
    );	
  };
}

export default UserFinder;
