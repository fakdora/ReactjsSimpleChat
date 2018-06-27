
# Gamers' Chatroom
Multi-user chatroom where bots and an user can chat.

## To run
```
yarn install
```
```
yarn start
```

## Technologies
* React
* Redux
* [Semantic UI React](https://react.semantic-ui.com/introduction) for design and layout

## Instructions
* User can type in their message into the text field and press 'Send' button.
* They can invoke a bot using @botID, example @mario, and the bot will respond back with a random message. If the invoked bot's status was 'idle', it will change to 'active' after it responds. If it was 'playing', an away message will be given.

## Notes
* Bots are automatically and randomly chatting every 10 seconds.
Only active and idle bots are participating in this auto chatting.
The bot's status will change to 'active' if it chatted.
* If the last message of the bot was 45 seconds ago, the bot's status will change to 'idle' automatically.

