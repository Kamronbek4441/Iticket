const { CustomerCard, Customer } = require("../models");
const { validateCustomerCard, } = require("../validation/customerCardValidation");

exports.createCustomerCard = async (req, res) => {
  const { error } = validateCustomerCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customerCard = await CustomerCard.create(req.body);
    res.status(201).send(customerCard);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerCards = async (req, res) => {
  try {
    const customerCards = await CustomerCard.findAll();
    res.status(200).send(customerCards);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerCardById = async (req, res) => {
  try {
    const customerCard = await CustomerCard.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer",
        },
      ],
    });

    if (!customerCard) return res.status(404).send("Customer card not found");

    res.status(200).send(customerCard);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomerCard = async (req, res) => {
  const { error } = validateCustomerCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customerCard = await CustomerCard.findByPk(req.params.id);
    if (!customerCard) return res.status(404).send("Customer card not found");

    await customerCard.update(req.body);
    res.status(200).send(customerCard);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomerCard = async (req, res) => {
  try {
    const customerCard = await CustomerCard.findByPk(req.params.id);
    if (!customerCard) return res.status(404).send("Customer card not found");

    await customerCard.destroy();
    res.status(204).send({ message: "Customer card deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
