const express = require("express");
const router = express.Router();
const deliveryController = require("../controller/delivery.controller");

/**
 * @swagger
 * tags:
 *   name: Delivery
 *   description: Delivery management
 */

/**
 * @swagger
 * /api/deliveries:
 *  post:
 *     tags: [Delivery]
 *     summary: Create a new Delivery
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *
 *     responses:
 *      201:
 *        description: Delivery created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/deliveries", deliveryController.createDelivery);

/**
 * @swagger
 * /api/deliveries:
 *   get:
 *     tags: [Delivery]
 *     summary: Get all Deliveries
 *     responses:
 *       200:
 *         description: List of Deliveries
 *       500:
 *         description: Server error
 */
router.get("/deliveries", deliveryController.getDeliveries);

/**
 * @swagger
 * /api/deliveries/{id}:
 *  get:
 *    tags: [Delivery]
 *    summary: Get Delivery by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Delivery ID
 *    responses:
 *      200:
 *        description: Delivery details
 *      404:
 *        description: Delivery not found
 *      500:
 *        description: Server error
 */
router.get("/deliveries/:id", deliveryController.getDeliveryById);

/**
 * @swagger
 * /api/deliveries/{id}:
 *   put:
 *     tags: [Delivery]
 *     summary: Update Delivery by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *     responses:
 *       200:
 *         description: Delivery updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server Error
 */
router.put("/deliveries/:id", deliveryController.updateDelivery);

/**
 * @swagger
 * /api/deliveries/{id}:
 *   delete:
 *     tags: [Delivery]
 *     summary: Delete Delivery by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery ID
 *     responses:
 *       204:
 *         description: Delivery deleted
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
router.delete("/deliveries/:id", deliveryController.deleteDelivery);

module.exports = router;
