import { Component } from 'react';

import User from './User';

import classes from './Users.module.css';

// Users as class-based-component
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    }
  }

  componentDidUpdate() {
    if(this.props.users.length === 0) {
      throw new Error('Could not found user.')
    }
  }

  toggleUsersHandler() {
    this.setState((curState) => ({showUsers: !curState.showUsers}));
  }

  render() {
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && (
          <ul>
            {this.props.users.map((user) => (
              <User key={user.id} name={user.name} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

// Users as functional component
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {props.usersmap((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
