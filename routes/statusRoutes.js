const express = require("express");
const router = express.Router();
const statusController = require("../controller/status.controller");

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: Status management
 */

/**
 * @swagger
 * /api/statuses:
 *  post:
 *     tags: [Status]
 *     summary: Create a new Status
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: string
 *     responses:
 *      201:
 *        description: Status created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/statuses", statusController.createStatus);

/**
 * @swagger
 * /api/statuses:
 *   get:
 *     tags: [Status]
 *     summary: Get all Statuses
 *     responses:
 *       200:
 *         description: List of Statuses
 *       500:
 *         description: Server error
 */
router.get("/statuses", statusController.getStatuses);

/**
 * @swagger
 * /api/statuses/{id}:
 *  get:
 *    tags: [Status]
 *    summary: Get Status by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Status ID
 *    responses:
 *      200:
 *        description: Status details
 *      404:
 *        description: Status not found
 *      500:
 *        description: Server error
 */
router.get("/statuses/:id", statusController.getStatusById);

/**
 * @swagger
 * /api/statuses/{id}:
 *   put:
 *     tags: [Status]
 *     summary: Update Status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Status ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  status:
 *                    type: string
 *     responses:
 *       200:
 *         description: Status updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
router.put("/statuses/:id", statusController.updateStatus);

/**
 * @swagger
 * /api/statuses/{id}:
 *   delete:
 *     tags: [Status]
 *     summary: Delete Status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Status ID
 *     responses:
 *       204:
 *         description: Status deleted
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
router.delete("/statuses/:id", statusController.deleteStatus);

module.exports = router;
