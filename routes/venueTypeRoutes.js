const express = require("express");
const router = express.Router();
const venueTypeController = require("../controller/venueType.controller");

/**
 * @swagger
 * tags:
 *   name: VenueType
 *   description: Venue Type management
 */

/**
 * @swagger
 * /api/venue-types:
 *  post:
 *     tags: [VenueType]
 *     summary: Create a new Venue Type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *     responses:
 *      201:
 *        description: Venue Type created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/venue-types", venueTypeController.createVenueType);

/**
 * @swagger
 * /api/venue-types:
 *   get:
 *     tags: [VenueType]
 *     summary: Get all Venue Types
 *     responses:
 *       200:
 *         description: List of Venue Types
 *       500:
 *         description: Server error
 */
router.get("/venue-types", venueTypeController.getVenueTypes);

/**
 * @swagger
 * /api/venue-types/{id}:
 *  get:
 *    tags: [VenueType]
 *    summary: Get Venue Type by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Venue Type ID
 *    responses:
 *      200:
 *        description: Venue Type details
 *      404:
 *        description: Venue Type not found
 *      500:
 *        description: Server error
 */
router.get("/venue-types/:id", venueTypeController.getVenueTypeById);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   put:
 *     tags: [VenueType]
 *     summary: Update Venue Type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue Type ID
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
 *         description: Venue Type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue Type not found
 *       500:
 *         description: Server error
 */
router.put("/venue-types/:id", venueTypeController.updateVenueType);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   delete:
 *     tags: [VenueType]
 *     summary: Delete Venue Type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue Type ID
 *     responses:
 *       204:
 *         description: Venue Type deleted
 *       404:
 *         description: Venue Type not found
 *       500:
 *         description: Server error
 */
router.delete("/venue-types/:id", venueTypeController.deleteVenueType);

module.exports = router;
