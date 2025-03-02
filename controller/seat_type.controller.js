const { SeatType, Seat } = require("../models");
const { validateSeatType } = require("../validation/seat_typeValidation");

exports.createSeatType = async (req, res) => {
  const { error } = validateSeatType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seatType = await SeatType.create(req.body);
    res.status(201).send(seatType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeatTypes = async (req, res) => {
  try {
    const seatTypes = await SeatType.findAll();
    res.status(200).send(seatTypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeatTypeById = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id, {});

    if (!seatType) return res.status(404).send("Seat type not found");

    res.status(200).send(seatType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSeatType = async (req, res) => {
  const { error } = validateSeatType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seatType = await SeatType.findByPk(req.params.id);
    if (!seatType) return res.status(404).send("Seat Type not found");

    await seatType.update(req.body);
    res.status(200).send(seatType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSeatType = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id);
    if (!seatType) return res.status(404).send("Seat Type not found");

    await seatType.destroy();
    res.status(204).send({ message: "Seat Type deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
