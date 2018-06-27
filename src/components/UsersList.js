import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCategory from './UserCategory'


class UsersList extends Component {

  render() {
    const { active, idle, away } = this.props 

    return (
      <div className="user-list">
        <div className="users-main-list">
          <div>
            <UserCategory category="active" users={active} />
            <UserCategory category="idle" users={idle} />
            <UserCategory category="away" users={away} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  let active = []
  let idle = []
  let away = []
  
  if (Array.isArray(users)) {
    active = users.filter(user => (
      user.status === "active"
    ))
    idle = users.filter(user => (
      user.status === "idle"
    ))
    away = users.filter(user => (
      user.status === "away"
    ))
  }

  return {
    active,
    idle,
    away
  }
}

export default connect(mapStateToProps)(UsersList)
