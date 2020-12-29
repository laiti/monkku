const configuration = {
  telegram: {
    chatId: '',
    apiKey: '',
    apiUrl: 'https://api.telegram.org/bot',
    sendOptions: { disableWebPagePreview: true, disableNotification: true },
  },
  aws: {
    region: 'eu-west-1',
  },
  dynamoDB: {
    tableName: '',
    apiVersion: '2012-08-10',
  },
  mongo: {
    user: '',
    password: '',
    database: '',
  },

  // If dynamic  is set, it overrides the static times
  times: {
    staticWeekday: ['13:34', '13:37', '14:27'],
    staticWeekend: ['13:37', '14:17', '15:27', '16:17'],
    dynamic: false,
    playTime: ['10:00', '20:00'],
    announceTime: '09:30',
    timeWindow: 1,
    days: {
      '6.12.': [2, 'isäm maalliin bonus'],
      '24.12.': [3, 'hyvää joulua wuu'],
    },
    randomDays: {
      '1:100': [0, 'pengarna gå till rymd'],
      '1:100': [2, 'dubbel pengarna wuu'],
      '1:200': [3, 'tribbel pengarna WUU'],
      '1:100': ['bossi', 'bossi ryösti potin'],
      '1:100': ['oppositeDay', 'rahet lahjoitettiin monnin uhrien muistolle'],
      '1:100': ['robinHood', 'rahet ryöstettiin rikkaalta monnilta ja annettiin köyhälle spedelle'],
    },
  },
  // Give bonus point for each bonusPerSec seconds that occur
  // between the /monkku command and end of last time in case
  // there were no other players
  // monniBonus: bonus if monkku was played during the last N seconds
  score: {
    bonusPerSec: 10,
    monniBonus: 1,
  },

  monkku: {
    commandPrefix: '/monkku',
    bossi: 'bossi',
    monni: 'monni',
    team: 'Monni & The Bois',
  },

  messages: {
    totalPot: 'Rahee jaossa',
    players: 'Messis',
  },

  logLevel: 'info',
};

module.exports = configuration;
