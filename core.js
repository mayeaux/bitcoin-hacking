const Client = require('bitcoin-core');

const host =  process.env.BITCOIN_SERVER_IP,
port =  process.env.BITCOIN_SERVER_PORT,
username = process.env.BITCOIN_SERVER_USERNAME,
password = process.env.BITCOIN_SERVER_PASSWORD;

const client = new Client({ 
  port,
  host,
  username,
  password
});

client.getInfo().then((help) => console.log(help));

async function main(){

};

main();