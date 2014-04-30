var mocks = {};
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
  }
};

module.exports = mocks;



