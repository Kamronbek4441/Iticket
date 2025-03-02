const { Distract, Region, CustomerAddress, Venue } = require("../models");
const { validateDistrict } = require("../validation/districtValidation");

exports.createDistract = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const district = await Distract.create(req.body);
    res.status(201).send(district);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDistracts = async (req, res) => {
  try {
    const districts = await Distract.findAll();
    res.status(200).send(districts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDistractById = async (req, res) => {
  try {
    const district = await Distract.findByPk(req.params.id, {
      include: [
        {
          model: Region,
          as: "region",
        },
      ],
    });

    if (!district) return res.status(404).send("District not found");

    res.status(200).send(district);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDistract = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const district = await Distract.findByPk(req.params.id);
    if (!district) return res.status(404).send("District not found");

    await district.update(req.body);
    res.status(200).send(district);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDistract = async (req, res) => {
  try {
    const district = await Distract.findByPk(req.params.id);
    if (!district) return res.status(404).send("District not found");

    await district.destroy();
    res.status(204).send({ message: "District deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
