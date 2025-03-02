const express = require("express");
const router = express.Router();
const customerAddressController = require("../controller/customer.address.controller");

/**
 * @swagger
 * tags:
 *   name: CustomerAddress
 *   description: Customer address management
 */

/**
 * @swagger
 * /api/customer-addresses:
 *  post:
 *     tags: [CustomerAddress]
 *     summary: Create a new Customer Address
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  customer_id:
 *                    type: integer
 *                  name:
 *                    type: string
 *                  country_id:
 *                    type: integer
 *                  region_id:
 *                    type: integer
 *                  district_id:
 *                    type: integer
 *                  street:
 *                    type: string
 *                  house:
 *                    type: string
 *                  flat:
 *                    type: integer
 *                  location:
 *                    type: string
 *                  post_index:
 *                    type: string
 *                  info:
 *                    type: string
 *     responses:
 *      201:
 *        description: Customer address created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/customer-addresses", customerAddressController.createCustomerAddress );

/**
 * @swagger
 * /api/customer-addresses:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get all Customer Addresses
 *     responses:
 *       200:
 *         description: List of customer addresses
 *       500:
 *         description: Server error
 */
router.get("/customer-addresses", customerAddressController.getCustomerAddresses );

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *  get:
 *    tags: [CustomerAddress]
 *    summary: Get Customer Address by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Customer Address ID
 *    responses:
 *      200:
 *        description: Customer address details
 *      404:
 *        description: Customer address not found
 *      500:
 *        description: Server error
 */
router.get("/customer-addresses/:id", customerAddressController.getCustomerAddressById );

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   put:
 *     tags: [CustomerAddress]
 *     summary: Update Customer Address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer Address ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  customer_id:
 *                    type: integer
 *                  name:
 *                    type: string
 *                  country_id:
 *                    type: integer
 *                  region_id:
 *                    type: integer
 *                  district_id:
 *                    type: integer
 *                  street:
 *                    type: string
 *                  house:
 *                    type: string
 *                  flat:
 *                    type: integer
 *                  location:
 *                    type: string
 *                  post_index:
 *                    type: string
 *                  info:
 *                    type: string
 *     responses:
 *       200:
 *         description: Customer address updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer address not found
 *       500:
 *         description: Server Error
 */
router.put("/customer-addresses/:id", customerAddressController.updateCustomerAddress );

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   delete:
 *     tags: [CustomerAddress]
 *     summary: Delete Customer Address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer Address ID
 *     responses:
 *       204:
 *         description: Customer address deleted
 *       404:
 *         description: Customer address not found
 *       500:
 *         description: Server error
 */
router.delete("/customer-addresses/:id", customerAddressController.deleteCustomerAddress);

module.exports = router;
