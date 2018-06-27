import React, { Component } from 'react'
import { getUsers } from '../utils/api'


class UsersList extends Component {
  state = {
    active: [],
    idle: [],
    away: [],
  }

  componentDidMount () {
    this.fetchAllUsers()
  }

  fetchAllUsers = () => {
    getUsers()
      .then(users => {
        const { members } = users
        let active = []
        let idle = []
        let away = []

        if (Array.isArray(members)) {
          active = members.filter(member => (
            member.status === "active"
          ))
          idle = members.filter(member => (
            member.status === "idle"
          ))
          away = members.filter(member => (
            member.status === "away"
          ))
        }
        this.setState({
          active: active,
          idle: idle,
          away: away
        })
        
      })
  }

  render() {
    const { active, idle, away } = this.state 

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

export default UsersList
