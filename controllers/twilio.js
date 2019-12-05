const accountSID = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSID, authToken);

function sms(req, res){
    console.log(req.body);
    client.messages
      .create({
         body: 'Do your chores, hoe! <3',
         from: '+13367506690',
         to: `+1${req.body.number}`
       })
      .then(message => console.log(message.sid))
      .done();
      res.redirect('/ladies');
}

module.exports = {
    sms
}