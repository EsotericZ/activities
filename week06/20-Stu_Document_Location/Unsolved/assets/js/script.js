var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  console.log(response.status)
  if (response.status === 404) {
      location.href = redirectUrl;
  }
});