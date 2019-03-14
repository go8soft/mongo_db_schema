const router = require('express').Router()

const machineType = require('../controllers/machine-type')

router.put('/update/:id', machineType.update)

module.exports = router
