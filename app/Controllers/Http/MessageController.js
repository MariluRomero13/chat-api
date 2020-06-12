'use strict'

const Message = use('App/Models/Message')
const Ws = use('Ws')
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
    const lastMessage = await Message.query().with('user').orderBy('created_at', 'desc').first()
    this.sendMessage(lastMessage)
    return response.ok(messageObj)
  }

  sendMessage (message) {
    const topic = Ws.getChannel('chat').topic('chat')
    if (topic) {
      topic.broadcast("new:chat", message)
    }
  }
}

module.exports = MessageController
