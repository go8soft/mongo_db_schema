const config = require('../config')
const mongoose = require('mongoose')

let MachineType = require('../models/machine-type')
let Machine = require('../models/machine')

mongoose.connect(config.db_connection_str, {useNewUrlParser: true}).then(
  () => {
    console.log(`We are connected to mongodb:${config.db.name}.`)
    seeds().finally(() => closeConnection())
  },
  err => {
    console.log('Error: can not connect to mongodb!', err)
  }
)

function closeConnection() {
  mongoose.connection.close()
  console.log('Mongodb connection was closed.')
}

async function seeds() {
  firstMachineType = await (new MachineType({_id: '5c88f5c7aeaf6c2276a856df', name: 'Name First', image: 'Image First'})).save()

  await (new Machine({
    name: 'Machine 11',
    serialNumber: '11',
    machineType: {
      id: firstMachineType.id,
      name: firstMachineType.name,
      image: firstMachineType.image
    }
  })).save()

  await (new Machine({
    name: 'Machine 12',
    serialNumber: '12',
    machineType: {
      id: firstMachineType.id,
      name: firstMachineType.name,
      image: firstMachineType.image
    }
  })).save()

  await (new Machine({
    name: 'Machine 13',
    serialNumber: '13',
    machineType: {
      id: firstMachineType.id,
      name: firstMachineType.name,
      image: firstMachineType.image
    }
  })).save()

  secondMachineType = await (new MachineType({_id: '5c88f5c7aeaf6c2276a856e3', name: 'Name Second', image: 'Image Second'})).save()

  await (new Machine({
    name: 'Machine 21',
    serialNumber: '21',
    machineType: {
      id: secondMachineType.id,
      name: secondMachineType.name,
      image: secondMachineType.image
    }
  })).save()

  await (new Machine({
    name: 'Machine 22',
    serialNumber: '22',
    machineType: {
      id: secondMachineType.id,
      name: secondMachineType.name,
      image: secondMachineType.image
    }
  })).save()

  thirdMachineType = await (new MachineType({_id: '5c8921393dc4a83acfb69b8f', name: 'Name Third', image: 'Image Third'})).save()

  await (new Machine({
    name: 'Machine 31',
    serialNumber: '31',
    machineType: {
      id: thirdMachineType.id,
      name: thirdMachineType.name,
      image: thirdMachineType.image
    }
  })).save()

  console.log('Done.')
}
