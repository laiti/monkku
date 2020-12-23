const configuration = {
  telegram: {
    chatId: '',
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
    static: ['13:34', '13:37', '14:27'],
    dynamic: false,
  },

  // Give bonus point for each bonusPerSec seconds that occur
  // between the /monkku command and end of last time in case
  // there were no other players
  score: {
    bonusPerSec: 10,
  },
};

module.exports = configuration;
