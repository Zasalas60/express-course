const express = require('express');
const app = express();

app.get('/hello/:who', (req, res) => {
  res.end('Hello ' + req.params.who + '.');
});

// to avoid creating a specif route or every user
app.get('/users/:userId', (req, res) => {
  var userId = parseInt(req.params.userId, 10);
  userId++;
  console.log(userId);
  res.send('Your user Id + 1 is: '+ userId);
});

app.get('/users/:userId/profile_photo', (req, res) => {
  if (req.params.userId === 'fazt') {
    res.sendFile(__dirname + '/fazt-logo.jpg');
  } else {
    res.end('Not exists');
  }
});

// but it won't matches to /users/123/posts
// even it can match with /users/cake or users/ebooks_pdf
// in this case is better to use regExp, also if you want
// just numeric values use validation logic

app.listen(3000, () => {
  console.log('Server on port ', 3000);
});
