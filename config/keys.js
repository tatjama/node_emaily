//keys.js - figure out which credentials to use
if(process.env.NODE_ENV === 'production'){
  //use production set of credentials 
  module.exports = require('./prod');
}else{
 // user development set of credentials
 module.exports = require('./dev');
}