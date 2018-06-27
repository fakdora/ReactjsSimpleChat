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
      ]
  },
    {
      id: 'kratos2',
      name: 'Kratos2',
      avatarURL: "https://upload.wikimedia.org/wikipedia/en/6/60/Kratos_PS4.jpg",
      status: 'active',
      currentlyPlayingGame: '',
      lastActiveTimestamp: 1530127697642,
      responses: [
        "Where is Hercules? ",
        "Time to fight",
      ]
    },
    {
      id: 'kratos3',
      name: 'Kratos3',
      avatarURL: "https://upload.wikimedia.org/wikipedia/en/6/60/Kratos_PS4.jpg",
      status: 'active',
      currentlyPlayingGame: '',
      lastActiveTimestamp: 1530127697643,
      responses: [
        "Where is Hercules? ",
        "Time to fight",
      ]
    },

      {
      id: 'baraka',
      name: 'Baraka',
      avatarURL: "https://upload.wikimedia.org/wikipedia/en/a/a7/SubZeroMKXrender.png",
      status: 'idle',
      currentlyPlayingGame: '',
        lastActiveTimestamp: 1530127697644,
      responses: [
        "this is fun ",
        "oooo yeah~",
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
      "Hey! ",
      "Lets play!",
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
    text: "hey",
    author: 'jimraynor',
    timestamp: 1530127697647,
  },
]}
