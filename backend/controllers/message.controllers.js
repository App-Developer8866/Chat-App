import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const getMessagesByRecId = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.loginUser._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate('messages');

    if (!conversation) {
      return res.status(200).json({ result: [] });
    }

    res.status(201).json({ result: conversation?.messages ?? [] });
  } catch (error) {
    console.log('Error in get messages by rec id controller', error.message);
    res.status(500).json({ error: 'Server internal error' });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.loginUser._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    console.log('Error in send message controller', error.message);
    res.status(500).json({ error: 'Server internal error' });
  }
};
