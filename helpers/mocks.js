var mocks = {};

function getUniqueStringOrNum(base) {
  if (!base) base = '+1';
  return base + Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
}

mocks.votes = {
  simple: {
    voterPhoneNumber: '+17736777755',
    eventPhoneNumber: '+19164263342',
    voteBody: 'Yes',
  },
  unique: {
    voterPhoneNumber: getUniqueStringOrNum(),
    eventPhoneNumber: '+19164263342',
    voteBody: 'Yes',
  },
  uniqueInvalidOption: {
    voterPhoneNumber: getUniqueStringOrNum(),
    eventPhoneNumber: '+19164263342',
    voteBody: getUniqueStringOrNum('monkey_'),
  },
  uniqueNoEvent: {
    voterPhoneNumber: getUniqueStringOrNum(),
    eventPhoneNumber: getUniqueStringOrNum(),
    voteBody: 'yes',
  }
};

mocks.events = {
  simple: {
    name: 'Event 2',
    type: 'event',
    shortName: 'event_2',
    phoneNumber: '+19164263342',
    state: true,
    votingOptions: [{
      id: 0, // Number of vote option
      name: 'no', // Name of vote option to display
    },
    {
      id: 1, // Number of vote option
      name: 'yes', // Name of vote option to display
    }]
  },
  unique: {
    name: getUniqueStringOrNum('Event '),
    type: 'event',
    shortName: getUniqueStringOrNum('event_'),
    phoneNumber: getUniqueStringOrNum(),
    state: true,
    votingOptions: [{
      id: 0, // Number of vote option
      name: 'no', // Name of vote option to display
    },
    {
      id: 1, // Number of vote option
      name: 'yes', // Name of vote option to display
    }]
  }

};

module.exports = mocks;



