const {
  Event,
  EventType,
  Human,
  Venue,
  Language,
  Ticket,
} = require("../models");
const { validateEvent } = require("../validation/eventValidation");

exports.createEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event = await Event.create(req.body);
    res.status(201).send(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, {
      include: [
        {
          model: EventType,
          as: "event_type",
        },
        {
          model: Human,
          as: "human_category",
        },
        {
          model: Venue,
          as: "venue",
        },
        {
          model: Language,
          as: "lang",
        },
      ],
    });

    if (!event) return res.status(404).send("Event not found");

    res.status(200).send(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).send("Event not found");

    await event.update(req.body);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).send("Event not found");

    await event.destroy();
    res.status(204).send({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
