var os = require('os')

module.exports = {
  getMessage: function getMessage() {
    return 'Hi there! I\'m being served from ' + os.hostname()
  }
}
