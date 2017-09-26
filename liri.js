
client.get(path, params, callback);
client.post(path, params, callback);
client.stream(path, params, callback);

client.post('statuses/update', {status: 'I am a tweet'}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});
