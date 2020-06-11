'use strict'

/*
|--------------------------------------------------------------------------
| MessageSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const { messages } = use('./data.json')
class MessageSeeder {
  static async run () {
    for (const message of messages) {
      await Factory.model('App/Models/Message').create(message)
    }
  }
}

module.exports = MessageSeeder
