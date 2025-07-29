import Message from '../models/Message';

const createMessage = async (req, res) => {
  try {
    const { name, email, content } = req.body;
    const message = new Message({ name, email, content });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: 'Bad request' });
  }
};

export default { createMessage };
