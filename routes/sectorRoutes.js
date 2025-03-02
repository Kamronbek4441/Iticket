const express = require("express");
const router = express.Router();
const sectorController = require("../controller/sector.controller");

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: Sector management
 */

/**
 * @swagger
 * /api/sectors:
 *  post:
 *     tags: [Sector]
 *     summary: Create a new Sector
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  sector_name:
 *                    type: string
 *     responses:
 *      201:
 *        description: Sector created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/sectors", sectorController.createSector);

/**
 * @swagger
 * /api/sectors:
 *   get:
 *     tags: [Sector]
 *     summary: Get all Sectors
 *     responses:
 *       200:
 *         description: List of Sectors
 *       500:
 *         description: Server error
 */
router.get("/sectors", sectorController.getSectors);

/**
 * @swagger
 * /api/sectors/{id}:
 *  get:
 *    tags: [Sector]
 *    summary: Get Sector by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Sector ID
 *    responses:
 *      200:
 *        description: Sector details
 *      404:
 *        description: Sector not found
 *      500:
 *        description: Server error
 */
router.get("/sectors/:id", sectorController.getSectorById);

/**
 * @swagger
 * /api/sectors/{id}:
 *   put:
 *     tags: [Sector]
 *     summary: Update Sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sector ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                  venue_id:
 *                    type: integer
 *     responses:
 *       200:
 *         description: Sector updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.put("/sectors/:id", sectorController.updateSector);

/**
 * @swagger
 * /api/sectors/{id}:
 *   delete:
 *     tags: [Sector]
 *     summary: Delete Sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sector ID
 *     responses:
 *       204:
 *         description: Sector deleted
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.delete("/sectors/:id", sectorController.deleteSector);

module.exports = router;
