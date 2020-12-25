const configuration = {
  telegram: {
    chatId: '',
    apiKey: '',
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
    specialDates: {
      '24.12.': [2, 'hyvää joulua wuu'],
    },
  },

  // Give bonus point for each bonusPerSec seconds that occur
  // between the /monkku command and end of last time in case
  // there were no other players
  score: {
    bonusPerSec: 10,
  },
};

module.exports = configuration;
