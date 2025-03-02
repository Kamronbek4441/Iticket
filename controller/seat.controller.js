const { Seat, Venue, SeatType, Sector } = require("../models");
const { validateSeat } = require("../validation/seatValidation");

exports.createSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seat = await Seat.create(req.body);
    res.status(201).send(seat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeats = async (req, res) => {
  try {
    const seats = await Seat.findAll();
    res.status(200).send(seats);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeatById = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id, {
      include: [
        {
          model: Venue,
          as: "venue",
        },
        {
          model: SeatType,
          as: "seat_type",
        },
        {
          model: Sector,
          as: "sector_id",
        },
      ],
    });

    if (!seat) return res.status(404).send("Seat not found");

    res.status(200).send(seat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).send("Seat not found");

    await seat.update(req.body);
    res.status(200).send(seat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).send("Seat not found");

    await seat.destroy();
    res.status(204).send({ message: "Seat deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
