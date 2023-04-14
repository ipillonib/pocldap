const ActiveDirectory = require('activedirectory');
const express = require('express');
const http = require('http');
var config = {

    url: '',
    baseDN: '',
    username: '',
    password: ''
};
//filter: '(&(objectcategory=person)(objectclass=user)(|(samaccountname={{username}})(mail={{mail}})))'
//filter: '(&(objectcategory=*)(|(samaccountname={{username}})))'

var sAMAccountName = '';
var ad = new ActiveDirectory(config);

var username = '';
var password = '';
  /*
ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log('ERROR: '+JSON.stringify(err));
    return;
  }
   
  if (auth) {
    console.log('Authenticated!');
  }
  else {
    console.log('Authentication failed!');
  }
});
*/
//*

const app = express();
const server = http.createServer(app)


app.get('/', (req, res) => {
  // Use req.log (a `pino` instance) to log JSON:
  ad.findUser(sAMAccountName, function(err, user) {
    if (err) {
      console.log('ERROR: ' +JSON.stringify(err));
      res.send('ERROR: ' +JSON.stringify(err));
      return;
    }
  
    if (! user) console.log('User: ' + sAMAccountName + ' not found.');
    else console.log(JSON.stringify(user));
    res.send(JSON.stringify(user));
  });

});



//*/


// Listen and serve.
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`App started on PORT ${PORT}`);
});
