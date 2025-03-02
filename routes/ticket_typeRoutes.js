const express = require("express");
const router = express.Router();
const TicketTypeController = require("../controller/ticket_type.controller");

/**
 * @swagger
 * tags:
 *   name: TicketType
 *   description: Ticket Type management
 */

/**
 * @swagger
 * /api/ticket-types:
 *  post:
 *     tags: [TicketType]
 *     summary: Create a new Ticket Type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  color:
 *                    type: string
 *                  name:
 *                    type: string
 *                  ticket_id:
 *                    type: integer
 *     responses:
 *      201:
 *        description: Ticket Type created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/ticket-types", TicketTypeController.createTicketType);

/**
 * @swagger
 * /api/ticket-types:
 *   get:
 *     tags: [TicketType]
 *     summary: Get all Ticket Types
 *     responses:
 *       200:
 *         description: List of Ticket Types
 *       500:
 *         description: Server error
 */
router.get("/ticket-types", TicketTypeController.getTicketTypes);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *  get:
 *    tags: [TicketType]
 *    summary: Get Ticket Type by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Ticket Type ID
 *    responses:
 *      200:
 *        description: Ticket Type details
 *      404:
 *        description: Ticket Type not found
 *      500:
 *        description: Server error
 */
router.get("/ticket-types/:id", TicketTypeController.getTicketTypeById);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   put:
 *     tags: [TicketType]
 *     summary: Update Ticket Type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket Type ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  color:
 *                    type: string
 *                  name:
 *                    type: string
 *                  ticket_id:
 *                    type: integer
 *     responses:
 *       200:
 *         description: Ticket Type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket Type not found
 *       500:
 *         description: Server error
 */
router.put("/ticket-types/:id", TicketTypeController.updateTicketType);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   delete:
 *     tags: [TicketType]
 *     summary: Delete Ticket Type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket Type ID
 *     responses:
 *       204:
 *         description: Ticket Type deleted
 *       404:
 *         description: Ticket Type not found
 *       500:
 *         description: Server error
 */
router.delete("/ticket-types/:id", TicketTypeController.deleteTicketType);

module.exports = router;
