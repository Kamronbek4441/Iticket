const { Cart, Customer, Ticket, Status } = require("../models");
const { validateCart } = require("../validation/cartValidation");

exports.createCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cart = await Cart.create(req.body);
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll();
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer",
        },
        {
          model: Ticket,
          as: "ticket",
        },
        {
          model: Status,
          as: "status",
        },
      ],
    });
    if (!cart) return res.status(404).send("Cart not found");
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).send("Cart not found");

    await cart.update(req.body);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).send("Cart not found");

    const cartData = cart.toJSON();

    await cart.destroy();
    res.send({ message: "Cart deleted successfully" });

    res.status(204).send(cartData);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
