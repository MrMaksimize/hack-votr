var mocks = {};
mocks.events = {
  simple: {
    name: 'Event 2',
    shortName: 'event_2',
    votingIsOpen: true,
    votingOptions: [{
      id: 0, // Number of vote option
      name: 'No', // Name of vote option to display
      votes: 0, // Number of votes cast for that option,
      phoneNumbers: [] // Array of Phone Number Strings.
    },
    {
      id: 1, // Number of vote option
      name: 'Yes', // Name of vote option to display
      votes: 0, // Number of votes cast for that option,
      phoneNumbers: [] // Array of Phone Number Strings.
    }]
  }
};

module.exports = mocks;



