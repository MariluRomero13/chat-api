'use strict'
const Database = use('Database')
const Message = use('App/Models/Message')
class MessageController {
  async getMessages({ response }) {
    const messages = await Message.query().with('user').orderBy('created_at', 'asc').limit(50).fetch()
    return response.ok(messages)
  }

  async storeMessage({ response, request, auth }) {
    const user = await auth.getUser()
    const message = request.input('message')
    const messageObj = new Message();
    messageObj.user_id = user.id
    messageObj.message = message
    await messageObj.save()
    return response.ok(messageObj)
  }
}

module.exports = MessageController
