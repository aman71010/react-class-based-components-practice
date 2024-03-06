import { Component } from 'react';

import classes from './User.module.css';

// User as class-based-component
class User extends Component {
  componentWillUnmount() {
    console.log('user');
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// Users as functional component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
