const email = require('emailjs');

const server = email.server.connect({
  user: '<beniolimavasc@gmail.com>',
  password: '<45182031>',
  host: 'smtp.emailjs.com',
  ssl: true
});

const message = {
  from: user,
  to: user.email,
  subject: 'Amigo Oculto',
  text: 'Seu amigo oculto é o', user,

};

server.send(message, function(err, message) {
  console.log(err || message);
});
