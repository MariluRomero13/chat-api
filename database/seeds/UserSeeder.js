'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const { users } = use('./data.json')
class UserSeeder {
  static async run () {
    for (const user of users) {
      await Factory.model('App/Models/User').create(user)
    }
  }
}

module.exports = UserSeeder
