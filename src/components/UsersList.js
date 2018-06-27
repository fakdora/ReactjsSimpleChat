import React, { Component } from 'react'
import { connect } from 'react-redux'


class UsersList extends Component {

  render() {
    const { active, idle, away } = this.props 

    return (
      <div>
        <h3>users</h3>
        <div className="users-main-list">
          <div>
            <div className="user-category">
              <h3 className="users-title">Active</h3>
              <ul>
                {active.map((user) => 
                  <li key={user.id}>
                    active 
                    <img src={user.avatarURL} 
                      alt={`avatar ${user.name}`}
                      className="user-avatar"
                    />
                    {user.chatName}
                  </li>
                )}
              </ul>
            </div>

            <div className="user-category">
              <h3 className="users-title">Idle</h3>
              <ul>
                {idle.map((user) => 
                  <li key={user.id}>
                    active 
                    <img src={user.avatarURL} 
                      alt={`avatar ${user.name}`}
                      className="user-avatar"
                    />
                    {user.chatName}
                  </li>
                )}
              </ul>
            </div>

            <div className="user-category">
              <h3 className="users-title">Away</h3>
              <ul>
                {away.map((user) =>
                  <li key={user.id}>
                    Away
                    <img src={user.avatarURL}
                      alt={`avatar ${user.name}`}
                      className="user-avatar"
                    />
                    {user.chatName}
                    {
                      (user.currentlyPlayingGame) 
                        ? <div>playing {user.currentlyPlayingGame}</div>
                        : ""
                    }
                  </li>
                )}
              </ul>
            </div>
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
