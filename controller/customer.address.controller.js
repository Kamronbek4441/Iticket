const { CustomerAddress, Customer, Country, Region, Distract,} = require("../models");
const { validateCustomerAddress } = require("../validation/customer.addressValidation");

exports.createCustomerAddress = async (req, res) => {
  const { error } = validateCustomerAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const address = await CustomerAddress.create(req.body);
    res.status(201).send(address);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerAddresses = async (req, res) => {
  try {
    const addresses = await CustomerAddress.findAll();
    res.status(200).send(addresses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerAddressById = async (req, res) => {
  try {
    const address = await CustomerAddress.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer",
        },
        {
          model: Country,
          as: "country",
        },
        {
          model: Region,
          as: "region",
        },
        {
          model: Distract,
          as: "district",
        },
      ],
    });
    if (!address) return res.status(404).send("Customer address not found");
    res.status(200).send(address);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomerAddress = async (req, res) => {
  const { error } = validateCustomerAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const address = await CustomerAddress.findByPk(req.params.id);
    if (!address) return res.status(404).send("Customer address not found");

    await address.update(req.body);
    res.status(200).send(address);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomerAddress = async (req, res) => {
  try {
    const address = await CustomerAddress.findByPk(req.params.id);
    if (!address) return res.status(404).send("Customer address not found");

    await address.destroy();
    res.send({ message: "Customer address deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
