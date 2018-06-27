import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

class UserCategory extends Component {

  render() {
    return (
      <div className="user-category">
        <ul>
          {this.props.users.map((user) =>
            <li key={user.id}>
              <div className="user-info-box">
                <div className="user-info">
                 {
                   (this.props.category.toLowerCase() === "active") 
                      ? <Icon color="green" name="circle" size="large" />
                      : (this.props.category.toLowerCase() === "idle") 
                        ? <Icon color="orange" name="circle" size="large" />
                        : <Icon color="red" name="circle" size="large" />
                 }
                  <img src={user.avatarURL}
                    alt={`avatar ${user.name}`}
                    className="user-avatar"
                  />

                  <span>{user.id}</span>
                  {
                    (user.status=="away" && user.currentlyPlayingGame)
                      ?  <div className="user-current-game">(playing {user.currentlyPlayingGame})</div>
                      : ""
                  }
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}


export default UserCategory
