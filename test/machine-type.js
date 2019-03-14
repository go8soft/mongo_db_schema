const request = require('supertest')
const app = require('../index')

describe('PUT /machinetype/update/:id', () => {
  let data = {
    name: 'Name First Updated'
  }

  it('update existing machine type', (done) => {
    request(app).
      put('/machinetype/update/5c88f5c7aeaf6c2276a856df').
      send(data).
      set('Accept', 'application/json').
      expect('Content-Type', /json/).
      expect(200, {status: 'ok'}, done)
  })

  it('try to update not existing machine type', (done) => {
    request(app).
      put('/machinetype/update/555555555555555555555555').
      send(data).
      set('Accept', 'application/json').
      expect('Content-Type', /json/).
      expect(404, {
        status: 'err',
        code: 2,
        msg: 'MachineType not found.'
      }, done)
  })

  it('try to update with no data', (done) => {
    request(app).
      put('/machinetype/update/5c88f5c7aeaf6c2276a856df').
      send({}).
      set('Accept', 'application/json').
      expect('Content-Type', /json/).
      expect(200, {
        status: 'err',
        code: 1,
        msg: 'Noting for update.'
      }, done)
  })

  it('try to update machine type passing not valid object id', (done) => {
    request(app).
      put('/machinetype/update/1').
      send(data).
      set('Accept', 'application/json').
      expect('Content-Type', /json/).
      expect(500, {
        status: 'err',
        code: 0,
        msg: 'Something broke.'
      }, done)
  })
})
