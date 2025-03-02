const { Human, Gender, Event } = require("../models");
const { validateHuman } = require("../validation/human_categoryValidation");

exports.createHuman = async (req, res) => {
  const { error } = validateHuman(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const human = await Human.create(req.body);
    res.status(201).send(human);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHumans = async (req, res) => {
  try {
    const humans = await Human.findAll();
    res.status(200).send(humans);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHumanById = async (req, res) => {
  try {
    const human = await Human.findByPk(req.params.id, {
      include: [
        {
          model: Gender,
          as: "gender",
        },
      ],
    });

    if (!human) return res.status(404).send("Human not found");

    res.status(200).send(human);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateHuman = async (req, res) => {
  const { error } = validateHuman(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const human = await Human.findByPk(req.params.id);
    if (!human) return res.status(404).send("Human not found");

    await human.update(req.body);
    res.status(200).send(human);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteHuman = async (req, res) => {
  try {
    const human = await Human.findByPk(req.params.id);
    if (!human) return res.status(404).send("Human not found");

    await human.destroy();
    res.status(204).send({ message: "Human deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
