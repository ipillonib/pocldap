var ActiveDirectory = require('activedirectory');
var config = {
    //*
    url: 'ldap://34.171.195.139:389',
    baseDN: 'CN=Users,DC=TECH,DC=LOCAL',
    username: 'ceadmin',
    password: 'Gapsi123.'
    //*/
   /*
    url: 'ldap://consupago.com:389',
    baseDN: 'DC=consupago,DC=com',
    username: 'appsibm',
    password: 'Santafe01$'
    */
};
//filter: '(&(objectcategory=person)(objectclass=user)(|(samaccountname={{username}})(mail={{mail}})))'
//filter: '(&(objectcategory=*)(|(samaccountname={{username}})))'

var sAMAccountName = 'administrator';
var ad = new ActiveDirectory(config);

var username = 'appsibm';
var password = 'Santafe01$';
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
ad.findUser(sAMAccountName, function(err, user) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }

  if (! user) console.log('User: ' + sAMAccountName + ' not found.');
  else console.log(JSON.stringify(user));
});
//*/
