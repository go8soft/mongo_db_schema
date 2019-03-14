const config = require('./config')

const mongoose = require('mongoose');
mongoose.connect(config.db_connection_str, {useNewUrlParser: true, useFindAndModify: false});

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const machineType = require('./routes/machine-type')
app.use('/machinetype', machineType)

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json({ status: 'err', code: 0, msg: 'Something broke.' })
})

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`))

module.exports = app
