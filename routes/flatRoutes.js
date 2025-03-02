const express = require("express");
const router = express.Router();
const flatController = require("../controller/flat.controller");

/**
 * @swagger
 * tags:
 *   name: Flat
 *   description: Flat management
 */

/**
 * @swagger
 * /api/flats:
 *  post:
 *     tags: [Flat]
 *     summary: Create a new Flat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  floor:
 *                    type: string
 *                  condition:
 *                    type: string
 *     responses:
 *      201:
 *        description: Flat created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/flats", flatController.createFlat);

/**
 * @swagger
 * /api/flats:
 *   get:
 *     tags: [Flat]
 *     summary: Get all Flats
 *     responses:
 *       200:
 *         description: List of Flats
 *       500:
 *         description: Server error
 */
router.get("/flats", flatController.getFlats);

/**
 * @swagger
 * /api/flats/{id}:
 *  get:
 *    tags: [Flat]
 *    summary: Get Flat by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Flat ID
 *    responses:
 *      200:
 *        description: Flat details
 *      404:
 *        description: Flat not found
 *      500:
 *        description: Server error
 */
router.get("/flats/:id", flatController.getFlatById);

/**
 * @swagger
 * /api/flats/{id}:
 *   put:
 *     tags: [Flat]
 *     summary: Update Flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Flat ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                  location:
 *                    type: string
 *                  size:
 *                    type: number
 *                  price:
 *                    type: number
 *     responses:
 *       200:
 *         description: Flat updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.put("/flats/:id", flatController.updateFlat);

/**
 * @swagger
 * /api/flats/{id}:
 *   delete:
 *     tags: [Flat]
 *     summary: Delete Flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Flat ID
 *     responses:
 *       204:
 *         description: Flat deleted
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.delete("/flats/:id", flatController.deleteFlat);

module.exports = router;
