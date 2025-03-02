const { EventType, Event } = require("../models");
const { validateEventType } = require("../validation/event_typeValidation");

exports.createEventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const eventType = await EventType.create(req.body);
    res.status(201).send(eventType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEventTypes = async (req, res) => {
  try {
    const eventTypes = await EventType.findAll();
    res.status(200).send(eventTypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEventTypeById = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id, {});

    if (!eventType) return res.status(404).send("Event type not found");

    res.status(200).send(eventType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateEventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const eventType = await EventType.findByPk(req.params.id);
    if (!eventType) return res.status(404).send("EventType not found");

    await eventType.update(req.body);
    res.status(200).send(eventType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteEventType = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id);
    if (!eventType) return res.status(404).send("EventType not found");

    await eventType.destroy();
    res.status(204).send({ message: "EventType deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
