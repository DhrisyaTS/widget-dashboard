var client = new Client();
client.post(
  "https://lp01-team-j-server.herokuapp.com/api/v1/recommendations",
  arg,
  function(result, response) {
    console.log(response);
  }
);
