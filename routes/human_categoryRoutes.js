const express = require("express");
const router = express.Router();
const humanController = require("../controller/human_category.controller");

/**
 * @swagger
 * tags:
 *   name: Human
 *   description: Human management
 */

/**
 * @swagger
 * /api/humans:
 *   post:
 *     tags: [Human]
 *     summary: Create a new Human
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               Start_age:
 *                 type: integer
 *               Finish_age:
 *                 type: integer
 *               gender_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Human created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/humans", humanController.createHuman);

/**
 * @swagger
 * /api/humans:
 *   get:
 *     tags: [Human]
 *     summary: Get all Humans
 *     responses:
 *       200:
 *         description: List of Humans
 *       500:
 *         description: Server error
 */
router.get("/humans", humanController.getHumans);

/**
 * @swagger
 * /api/humans/{id}:
 *   get:
 *     tags: [Human]
 *     summary: Get Human by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human ID
 *     responses:
 *       200:
 *         description: Human details
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server error
 */
router.get("/humans/:id", humanController.getHumanById);

/**
 * @swagger
 * /api/humans/{id}:
 *   put:
 *     tags: [Human]
 *     summary: Update Human by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               gender_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Human updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server Error
 */
router.put("/humans/:id", humanController.updateHuman);

/**
 * @swagger
 * /api/humans/{id}:
 *   delete:
 *     tags: [Human]
 *     summary: Delete Human by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human ID
 *     responses:
 *       204:
 *         description: Human deleted
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server error
 */
router.delete("/humans/:id", humanController.deleteHuman);

module.exports = router;
