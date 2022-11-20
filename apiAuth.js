const genAPIKey = () => {
    //create a base-36 string that contains 30 chars in a-z,0-9
    return [...Array(30)]
      .map((e) => ((Math.random() * 36) | 0).toString(36))
      .join('');
  };

const users = require('./initialData').users; 
  // import initial data

const createUser = (_username, req) => {
  let today = new Date().toISOString().split('T')[0];
  let user = {
    _id: Date.now(),
    api_key: genAPIKey(),
    username: _username,
    usage: [{ date: today, count: 0 }],
  };

  console.log('add user');
  users.push(user);
  return user;
};