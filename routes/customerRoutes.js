const express = require("express");
const router = express.Router();
const customerController = require("../controller/customer.controller");

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer management
 */

/**
 * @swagger
 * /api/customers:
 *  post:
 *     tags: [Customer]
 *     summary: Create a new Customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  first_name:
 *                    type: string
 *                  last_name:
 *                    type: string
 *                  phone:
 *                    type: string
 *                  hashed_password:
 *                    type: string
 *                  email:
 *                    type: string
 *                  birth_date:
 *                    type: string
 *                    format: date
 *                  gender:
 *                    type: number
 *                  lang_id:
 *                    type: number
 *                  hashed_refresh_token:
 *                    type: string
 *
 *     responses:
 *      201:
 *        description: Customer created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/customers", customerController.createCustomer);

/**
 * @swagger
 * /api/customers:
 *   get:
 *     tags: [Customer]
 *     summary: Get all Customers
 *     responses:
 *       200:
 *         description: List of Customers
 *       500:
 *         description: Server error
 */
router.get("/customers", customerController.getCustomers);

/**
 * @swagger
 * /api/customers/{id}:
 *  get:
 *    tags: [Customer]
 *    summary: Get Customer by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Customer ID
 *    responses:
 *      200:
 *        description: Customer details
 *      404:
 *        description: Customer not found
 *      500:
 *        description: Server error
 */
router.get("/customers/:id", customerController.getCustomerById);

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     tags: [Customer]
 *     summary: Update Customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  first_name:
 *                    type: string
 *                  last_name:
 *                    type: string
 *                  phone:
 *                    type: string
 *                  hashed_password:
 *                    type: string
 *                  email:
 *                    type: string
 *                  birth_date:
 *                    type: string
 *                    format: date
 *                  gender:
 *                    type: number
 *                  lang_id:
 *                    type: number
 *                  hashed_refresh_token:
 *                    type: string
 *     responses:
 *       200:
 *         description: Customer updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server Error
 */
router.put("/customers/:id", customerController.updateCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     tags: [Customer]
 *     summary: Delete Customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     responses:
 *       204:
 *         description: Customer deleted
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.delete("/customers/:id", customerController.deleteCustomer);

module.exports = router;
