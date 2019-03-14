let MachineType = require('../models/machine-type')
let Machine = require('../models/machine')
exports.update = async (req, res, next) => {
  try {
    if (!req.body.name && !req.body.image) return res.json({status: 'err', code: 1, msg: 'Noting for update.'})
    const machineType = await MachineType.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    if (!machineType) return res.status(404).json({status: 'err', code: 2, msg: 'MachineType not found.'})
    await Machine.updateMany(
    {
      'machineType.id': req.params.id
    }, {
      $set: {
        'machineType.name': req.body.name || machineType.name,
        'machineType.image': req.body.image || machineType.image
      }
    })

    res.json({status: 'ok'})
  } catch(err) {
    next(err)
  }
}
