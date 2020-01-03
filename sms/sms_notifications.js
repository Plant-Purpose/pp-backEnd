require('dotenv').config();

const accountSid = process.env.SID;
const authToken = process.env.TOKEN;
const client = require('twilio')(accountSid, authToken);
const router = require('express').Router();

router.post('/schedule', (req, res) => {

    setTimeout(() => {
        client.messages
        .create({
          body: req.body.task,
          from: process.env.PHONE,
          to: req.body.phone
        })
        .then(() => console.log('success'))
        .catch(err => console.log(err));
    }, req.body.time);

    res.status(200).json({ message: "Reminder Will Be Sent In " + ((req.body.time / 1000) / 60) + ' minutes' })
});

module.exports = router;