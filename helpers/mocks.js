var mocks = {};
mocks.events = {
  simple: {
    name: 'Event 2',
    type: 'event',
    shortName: 'event_2',
    state: true,
    votingOptions: [{
      id: 0, // Number of vote option
      name: 'No', // Name of vote option to display
    },
    {
      id: 1, // Number of vote option
      name: 'Yes', // Name of vote option to display
    }]
  }
};

module.exports = mocks;



