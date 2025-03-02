const express = require("express");
const router = express.Router();
const regionController = require("../controller/region.controller");

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Region management
 */

/**
 * @swagger
 * /api/regions:
 *  post:
 *     tags: [Region]
 *     summary: Create a new Region
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  postpone:
 *                    type: integer
 *     responses:
 *      201:
 *        description: Region created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/regions", regionController.createRegion);

/**
 * @swagger
 * /api/regions:
 *   get:
 *     tags: [Region]
 *     summary: Get all Regions
 *     responses:
 *       200:
 *         description: List of Regions
 *       500:
 *         description: Server error
 */
router.get("/regions", regionController.getRegions);

/**
 * @swagger
 * /api/regions/{id}:
 *  get:
 *    tags: [Region]
 *    summary: Get Region by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Region ID
 *    responses:
 *      200:
 *        description: Region details
 *      404:
 *        description: Region not found
 *      500:
 *        description: Server error
 */
router.get("/regions/:id", regionController.getRegionById);

/**
 * @swagger
 * /api/regions/{id}:
 *   put:
 *     tags: [Region]
 *     summary: Update Region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                  postpone:
 *                    type: integer
 *     responses:
 *       200:
 *         description: Region updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server Error
 */
router.put("/regions/:id", regionController.updateRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     tags: [Region]
 *     summary: Delete Region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
 *     responses:
 *       204:
 *         description: Region deleted
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.delete("/regions/:id", regionController.deleteRegion);

module.exports = router;
