const express = require("express");
const router = express.Router();
const seatTypeController = require("../controller/seat_type.controller");

/**
 * @swagger
 * tags:
 *   name: SeatType
 *   description: Seat Type management
 */

/**
 * @swagger
 * /api/seat-types:
 *  post:
 *     tags: [SeatType]
 *     summary: Create a new Seat Type
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
 *        description: Seat Type created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/seat-types", seatTypeController.createSeatType);

/**
 * @swagger
 * /api/seat-types:
 *   get:
 *     tags: [SeatType]
 *     summary: Get all Seat Types
 *     responses:
 *       200:
 *         description: List of Seat Types
 *       500:
 *         description: Server error
 */
router.get("/seat-types", seatTypeController.getSeatTypes);

/**
 * @swagger
 * /api/seat-types/{id}:
 *  get:
 *    tags: [SeatType]
 *    summary: Get Seat Type by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Seat Type ID
 *    responses:
 *      200:
 *        description: Seat Type details
 *      404:
 *        description: Seat Type not found
 *      500:
 *        description: Server error
 */
router.get("/seat-types/:id", seatTypeController.getSeatTypeById);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   put:
 *     tags: [SeatType]
 *     summary: Update Seat Type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat Type ID
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
 *         description: Seat Type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Seat Type not found
 *       500:
 *         description: Server Error
 */
router.put("/seat-types/:id", seatTypeController.updateSeatType);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   delete:
 *     tags: [SeatType]
 *     summary: Delete Seat Type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat Type ID
 *     responses:
 *       204:
 *         description: Seat Type deleted
 *       404:
 *         description: Seat Type not found
 *       500:
 *         description: Server error
 */
router.delete("/seat-types/:id", seatTypeController.deleteSeatType);

module.exports = router;
