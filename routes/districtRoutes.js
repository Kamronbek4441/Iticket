const express = require("express");
const router = express.Router();
const districtController = require("../controller/district.controller");

/**
 * @swagger
 * tags:
 *   name: District
 *   description: District management
 */

/**
 * @swagger
 * /api/districts:
 *  post:
 *     tags: [District]
 *     summary: Create a new District
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  region_id:
 *                    type: integer
 *     responses:
 *      201:
 *        description: District created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/districts", districtController.createDistract);

/**
 * @swagger
 * /api/districts:
 *   get:
 *     tags: [District]
 *     summary: Get all Districts
 *     responses:
 *       200:
 *         description: List of Districts
 *       500:
 *         description: Server error
 */
router.get("/districts", districtController.getDistracts);

/**
 * @swagger
 * /api/districts/{id}:
 *  get:
 *    tags: [District]
 *    summary: Get District by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: District ID
 *    responses:
 *      200:
 *        description: District details
 *      404:
 *        description: District not found
 *      500:
 *        description: Server error
 */
router.get("/districts/:id", districtController.getDistractById);

/**
 * @swagger
 * /api/districts/{id}:
 *   put:
 *     tags: [District]
 *     summary: Update District by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                  region_id:
 *                    type: integer
 *     responses:
 *       200:
 *         description: District updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: District not found
 *       500:
 *         description: Server Error
 */
router.put("/districts/:id", districtController.updateDistract);

/**
 * @swagger
 * /api/districts/{id}:
 *   delete:
 *     tags: [District]
 *     summary: Delete District by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     responses:
 *       204:
 *         description: District deleted
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.delete("/districts/:id", districtController.deleteDistract);

module.exports = router;
