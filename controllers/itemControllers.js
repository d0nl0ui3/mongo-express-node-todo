const Item = require('../models/itemModel');

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();

    res.status(200).render('index', { foundItems: items });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.addItem = async (req, res) => {
  const { name } = req.body;

  try {
    const newItem = Item({ name });

    await newItem.save();
    res.status(200).redirect('/');
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  const { checkbox } = req.body;

  try {
    await Item.findByIdAndDelete(checkbox);
    res.status(204).redirect('/');
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
