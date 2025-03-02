const express = require("express");
const router = express.Router();
const eventTypeController = require("../controller/event_type.controller");

/**
 * @swagger
 * tags:
 *   name: EventType
 *   description: EventType management
 */

/**
 * @swagger
 * /api/eventTypes:
 *  post:
 *     tags: [EventType]
 *     summary: Create a new EventType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  parent_event_type_id: 
 *                    type: integer
 *     responses:
 *      201:
 *        description: EventType created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/eventTypes", eventTypeController.createEventType);

/**
 * @swagger
 * /api/eventTypes:
 *   get:
 *     tags: [EventType]
 *     summary: Get all EventTypes
 *     responses:
 *       200:
 *         description: List of EventTypes
 *       500:
 *         description: Server error
 */
router.get("/eventTypes", eventTypeController.getEventTypes);

/**
 * @swagger
 * /api/eventTypes/{id}:
 *  get:
 *    tags: [EventType]
 *    summary: Get EventType by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: EventType ID
 *    responses:
 *      200:
 *        description: EventType details
 *      404:
 *        description: EventType not found
 *      500:
 *        description: Server error
 */
router.get("/eventTypes/:id", eventTypeController.getEventTypeById);

/**
 * @swagger
 * /api/eventTypes/{id}:
 *   put:
 *     tags: [EventType]
 *     summary: Update EventType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: EventType ID
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
 *         description: EventType updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: EventType not found
 *       500:
 *         description: Server Error
 */
router.put("/eventTypes/:id", eventTypeController.updateEventType);

/**
 * @swagger
 * /api/eventTypes/{id}:
 *   delete:
 *     tags: [EventType]
 *     summary: Delete EventType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: EventType ID
 *     responses:
 *       204:
 *         description: EventType deleted
 *       404:
 *         description: EventType not found
 *       500:
 *         description: Server error
 */
router.delete("/eventTypes/:id", eventTypeController.deleteEventType);

module.exports = router;