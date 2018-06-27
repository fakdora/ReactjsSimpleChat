// possible status: 'active', 'idle', 'playing'
// last_active

export let users = {
  users: [
  {
    id: 'kratos',
    name: 'Kratos',
      avatarURL: "https://upload.wikimedia.org/wikipedia/en/6/60/Kratos_PS4.jpg",
    status: 'active',
    currentlyPlayingGame: '',
      lastActiveTimestamp: 1530127697641,
      responses: [
        "Where is Hercules? ",
        "Time to fight",
        "I haven't forgotten you. For what you did that night, this city will be your grave...",
        "I will send you back to the depths of Hades!",
        "all Olympus tremble at my name"
      ]
  },
    {
      id: 'toad',
      name: 'toad',
      avatarURL: "https://www.mariowiki.com/images/thumb/d/db/SMR_Toad.png/170px-SMR_Toad.png",
      status: 'active',
      currentlyPlayingGame: '',
      lastActiveTimestamp: 1530127697642,
      responses: [
        "Wanna play? ",
        "3vs3?",
        "mario, it's time to rescue the princess"
      ]
    },
    {
      id: 'assassin',
      name: 'assassin',
      avatarURL: "http://images4.fanpop.com/image/photos/19000000/Altair-altair-ibn-laahad-19091926-418-500.jpg",
      status: 'active',
      currentlyPlayingGame: '',
      lastActiveTimestamp: 1530127697643,
      responses: [
        "I'm from Rome",
        "This is the Brotherhood",
        "The best. May it never change",
        
      ]
    },

      {
      id: 'scorpion',
      name: 'Scorpion',
        avatarURL: "https://vignette.wikia.nocookie.net/mkwikia/images/a/ad/Scorpion_MKX_Render.png/revision/latest/scale-to-width-down/330?cb=20160515093908",
      status: 'idle',
      currentlyPlayingGame: '',
        lastActiveTimestamp: 1530127697644,
      responses: [
        "Get over here!",
        "What is this? You are not Sub-Zero.",
        "I am here.",
        "The Shirai-Ryu are dead."
      ]
    },

  {
    id: 'jimraynor',
    name: 'Jim Raynor',
    avatarURL: "https://vignette.wikia.nocookie.net/starcraft/images/a/ad/JimRaynor_SC2_Head2.jpg/revision/latest/scale-to-width-down/328?cb=20151129213613",
    status: 'idle',
    currentlyPlayingGame: '',
    lastActiveTimestamp: 1530127697645,
    responses: [
      "Hi! ",
      "I'll join the game",
      "gogogo~",
      "Dammit, Sarah! It didn't have to be like this!",
      "All right. Sell me."
    ]
  },
    {
      id: 'mario',
      name: 'Mario',
      avatarURL: "https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png",
      status: 'idle',
      currentlyPlayingGame: '',
      lastActiveTimestamp: 1530127697646,
      responses: [
        "Hey! It's me! Mario~",
        "Lets-a go!",
      ]
    },
        {
      id: 'zelda',
      name: 'Zelda',
      avatarURL: "https://upload.wikimedia.org/wikipedia/en/6/60/Fc_zelda.jpg",
      status: 'away',
      currentlyPlayingGame: 'Battlefield V',
          lastActiveTimestamp: 1530127697647,
      responses: [
        "Find those crystals ",
        "Save Hyrule please",
      ]
    },
    {
      id: 'subzero',
      name: 'Sub zero',
      avatarURL: "https://upload.wikimedia.org/wikipedia/en/a/a7/SubZeroMKXrender.png",
      status: 'away',
      currentlyPlayingGame: 'Battlefield V',
      lastActiveTimestamp: 1530127697648,
      responses: [
        "this is fun ",
        "oooo yeah~",
      ]
    },

]
}

export let messages = {
  messages: [
  {
    text: "let's play 5vs5",
      author: 'zelda',
      timestamp: 1530127697641,
  },
  {
    text: 'ready to play?',
    author: 'subzero',
    timestamp: 1530127697642,
  },
  {
    text: 'oh yeah~!',
    author: 'zelda',
    timestamp: 1530127697643,
  },
  {
    text: 'everything is good',
    author: 'zelda',
    timestamp: 1530127697644,
  },
  {
    text: 'gogogo~',
    author: 'zelda',
    timestamp: 1530127697645,
  },
  {
    text: "how's it going?",
    author: 'kratos',
    timestamp: 1530127697646,
  },
  {
    text: "anybody here?",
    author: 'jimraynor',
    timestamp: 1530127697647,
  },
]}
