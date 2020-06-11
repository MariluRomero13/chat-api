'use strict'
const { formatters } = use('Validator')
class StoreMessage {
  get formatter() {
    return formatters.JsonApi
  }

  get validateAll() {
    return true
  }

  get rules() {
    return {
      message: 'required',
    }
  }
}

module.exports = StoreMessage
