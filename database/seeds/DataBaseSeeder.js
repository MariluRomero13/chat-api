'use strict'

/*
|--------------------------------------------------------------------------
| DataBaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const UserSeeder = require('./UserSeeder')
const MessageSeeder = require('./MessageSeeder')
class DataBaseSeeder {
  async run () {
    await UserSeeder.run()
    await MessageSeeder.run()
  }
}

module.exports = DataBaseSeeder
