const express = require("express");
const router = express.Router();
const ticketController = require("../controller/ticket.controller");

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket management
 */

/**
 * @swagger
 * /api/tickets:
 *  post:
 *     tags: [Ticket]
 *     summary: Create a new Ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  event_id:
 *                    type: integer
 *                  seat_id:
 *                    type: integer
 *                  price:
 *                    type: integer
 *                  service_fee:
 *                    type: integer
 *                  status_id:
 *                    type: integer
 *                  ticket_type:
 *                    type: string
 *     responses:
 *      201:
 *        description: Ticket created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/tickets", ticketController.createTicket);

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     tags: [Ticket]
 *     summary: Get all Tickets
 *     responses:
 *       200:
 *         description: List of Tickets
 *       500:
 *         description: Server error
 */
router.get("/tickets", ticketController.getTickets);

/**
 * @swagger
 * /api/tickets/{id}:
 *  get:
 *    tags: [Ticket]
 *    summary: Get Ticket by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Ticket ID
 *    responses:
 *      200:
 *        description: Ticket details
 *      404:
 *        description: Ticket not found
 *      500:
 *        description: Server error
 */
router.get("/tickets/:id", ticketController.getTicketById);

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     tags: [Ticket]
 *     summary: Update Ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  eventId:
 *                    type: integer
 *                  seatId:
 *                    type: integer
 *                  price:
 *                    type: number
 *     responses:
 *       200:
 *         description: Ticket updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.put("/tickets/:id", ticketController.updateTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     tags: [Ticket]
 *     summary: Delete Ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       204:
 *         description: Ticket deleted
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.delete("/tickets/:id", ticketController.deleteTicket);

module.exports = router;
