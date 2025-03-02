const express = require("express");
const router = express.Router();
const customerCardController = require("../controller/customerCard.controller");

/**
 * @swagger
 * tags:
 *   name: CustomerCard
 *   description: CustomerCard management
 */

/**
 * @swagger
 * /api/customer-cards:
 *  post:
 *     tags: [CustomerCard]
 *     summary: Create a new Customer Card
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  customer_id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  phone:
 *                    type: string
 *                  number:
 *                    type: number
 *                  year:
 *                    type: number
 *                  month:
 *                    type: number
 *                  is_active:
 *                    type: boolean
 *                  is_main:
 *                    type: boolean
 *     responses:
 *      201:
 *        description: Customer Card created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/customer-cards", customerCardController.createCustomerCard);

/**
 * @swagger
 * /api/customer-cards:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get all Customer Cards
 *     responses:
 *       200:
 *         description: List of Customer Cards
 *       500:
 *         description: Server error
 */
router.get("/customer-cards", customerCardController.getCustomerCards);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *  get:
 *    tags: [CustomerCard]
 *    summary: Get Customer Card by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Customer Card ID
 *    responses:
 *      200:
 *        description: Customer Card details
 *      404:
 *        description: Customer Card not found
 *      500:
 *        description: Server error
 */
router.get("/customer-cards/:id", customerCardController.getCustomerCardById);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   put:
 *     tags: [CustomerCard]
 *     summary: Update Customer Card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer Card ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  customer_id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  phone:
 *                    type: string
 *                  number:
 *                    type: number
 *                  year:
 *                    type: number
 *                  month:
 *                    type: number
 *                  is_active:
 *                    type: boolean
 *                  is_main:
 *                    type: boolean
 *     responses:
 *       200:
 *         description: Customer Card updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer Card not found
 *       500:
 *         description: Server Error
 */
router.put("/customer-cards/:id", customerCardController.updateCustomerCard);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   delete:
 *     tags: [CustomerCard]
 *     summary: Delete Customer Card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer Card ID
 *     responses:
 *       204:
 *         description: Customer Card deleted
 *       404:
 *         description: Customer Card not found
 *       500:
 *         description: Server error
 */
router.delete("/customer-cards/:id", customerCardController.deleteCustomerCard);

module.exports = router;
