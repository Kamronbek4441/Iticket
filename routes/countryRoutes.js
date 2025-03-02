const express = require("express");
const router = express.Router();
const countryController = require("../controller/country.controller");

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country management
 */

/**
 * @swagger
 * /api/country:
 *  post:
 *     tags: [Country]
 *     summary: Create a new Country
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  country:
 *                    type: string
 *
 *     responses:
 *      201:
 *        description: Country created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/country", countryController.createCountry);

/**
 * @swagger
 * /api/country:
 *   get:
 *     tags: [Country]
 *     summary: Get all Country items
 *     responses:
 *       200:
 *         description: List of Country items
 *       500:
 *         description: Server error
 */
router.get("/country", countryController.getCountries);

/**
 * @swagger
 * /api/country/{id}:
 *  get:
 *    tags: [Country]
 *    summary: Get Country by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Country ID
 *    responses:
 *      200:
 *        description: Country details
 *      404:
 *        description: Country not found
 *      500:
 *        description: Server error
 */
router.get("/country/:id", countryController.getCountryById);

/**
 * @swagger
 * /api/country/{id}:
 *   put:
 *     tags: [Country]
 *     summary: Update Country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  country:
 *                    type: string
 *     responses:
 *       200:
 *         description: Country updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.put("/country/:id", countryController.updateCountry);

/**
 * @swagger
 * /api/country/{id}:
 *   delete:
 *     tags: [Country]
 *     summary: Delete Country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     responses:
 *       200:
 *         description: Country deleted
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.delete("/country/:id", countryController.deleteCountry);

module.exports = router;
