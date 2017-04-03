var test = require('tape')
var message = require('./message')

test('Message', function(t) {
  t.plan(1)
  var messageSubStr = 'Hi there! I\'m being served from'
  var letterCount = messageSubStr.length
  t.equal(message.getMessage().substr(0, messageSubStr.length), messageSubStr)
})
