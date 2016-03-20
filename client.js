import bitcoin from 'bitcoin';
import Promise from 'bluebird';

const client = new bitcoin.Client({
  host: process.env.BITCOIN_SERVER_IP,
  port: process.env.BITCOIN_SERVER_PORT,
  user: process.env.BITCOIN_SERVER_USERNAME,
  pass: process.env.BITCOIN_SERVER_PASSWORD,
  timeout: 1000 * 120
});

client.getBalance('*', 6, function(err, balance, resHeaders) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});