fetch('https://github.com/yagamilight08/json-api/rizzData.json')
  .then(responses => responses.json())
  .then(data => {
    console.log(responses); // Access the array of jokes
  });
