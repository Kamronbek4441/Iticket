const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart.controller");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management
 */

/**
 * @swagger
 * /api/cart:
 *  post:
 *     tags: [Cart]
 *     summary: Create a new Cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  ticket_id:
 *                    type: number
 *                  customer_id:
 *                    type: number
 *                  createdAt:
 *                    type: string
 *                    format: date-time
 *                  finishedAt:
 *                    type: string
 *                    format: date-time
 *                  status_id:
 *                    type: number
 *
 *     responses:
 *      201:
 *        description: Cart created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/cart", cartController.createCart);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     tags: [Cart]
 *     summary: Get all Cart items
 *     responses:
 *       200:
 *         description: List of Cart items
 *       500:
 *         description: Server error
 */
router.get("/cart", cartController.getCarts);

/**
 * @swagger
 * /api/cart/{id}:
 *  get:
 *    tags: [Cart]
 *    summary: Get Cart by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Cart ID
 *    responses:
 *      200:
 *        description: Cart details
 *      404:
 *        description: Cart not found
 *      500:
 *        description: Server error
 */
router.get("/cart/:id", cartController.getCartById);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     tags: [Cart]
 *     summary: Update Cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  ticket_id:
 *                    type: number
 *                  customer_id:
 *                    type: number
 *                  createdAt:
 *                    type: string
 *                    format: date-time
 *                  finishedAt:
 *                    type: string
 *                    format: date-time
 *                  status_id:
 *                    type: number
 *     responses:
 *       200:
 *         description: Cart updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.put("/cart/:id", cartController.updateCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     tags: [Cart]
 *     summary: Delete Cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       204:
 *         description: Cart deleted
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.delete("/cart/:id", cartController.deleteCart);

module.exports = router;
