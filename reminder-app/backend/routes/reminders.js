const router = require('express').Router();
let Reminder = require('../models/reminder.model');
const auth = require('../middleware/auth');

// Get all reminders for logged in user
router.route('/').get(auth, async (req, res) => {
  const reminders = await Reminder.find({ userId: req.user });
  res.json(reminders);
});

// Add new reminder
router.route('/').post(auth, async (req, res) => {
  try {
    const { title, description, date } = req.body;

    if (!title || !date) {
      return res.status(400).json({ msg: 'Please enter title and date' });
    }

    const newReminder = new Reminder({
      title,
      description,
      date,
      userId: req.user,
    });

    const savedReminder = await newReminder.save();
    res.json(savedReminder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
