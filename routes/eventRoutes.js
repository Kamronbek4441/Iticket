const express = require("express");
const router = express.Router();
const eventController = require("../controller/event.controller");

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Event management
 */

/**
 * @swagger
 * /api/events:
 *  post:
 *     tags: [Event]
 *     summary: Create a new Event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  photo:
 *                    type: string
 *                  start_date:
 *                    type: date
 *                  finish_date:
 *                    type: date
 *                  finish_time:
 *                    type: string
 *                  info:
 *                    type: string
 *                  event_type_id:
 *                    type: integer
 *                  human_category_id:
 *                    type: integer
 *                  venue_id:
 *                    type: integer
 *                  lang_id:
 *                    type: integer
 *                  release_date:
 *                    type: date
 *     responses:
 *      201:
 *        description: Event created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/events", eventController.createEvent);

/**
 * @swagger
 * /api/events:
 *   get:
 *     tags: [Event]
 *     summary: Get all Events
 *     responses:
 *       200:
 *         description: List of Events
 *       500:
 *         description: Server error
 */
router.get("/events", eventController.getEvents);

/**
 * @swagger
 * /api/events/{id}:
 *  get:
 *    tags: [Event]
 *    summary: Get Event by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Event ID
 *    responses:
 *      200:
 *        description: Event details
 *      404:
 *        description: Event not found
 *      500:
 *        description: Server error
 */
router.get("/events/:id", eventController.getEventById);

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     tags: [Event]
 *     summary: Update Event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                  photo:
 *                    type: string
 *                  start_date:
 *                    type: date
 *                  finish_date:
 *                    type: date
 *                  finish_time:
 *                    type: string
 *                  info:
 *                    type: string
 *                  event_type_id:
 *                    type: integer
 *                  human_category_id:
 *                    type: integer
 *                  venue_id:
 *                    type: integer
 *                  lang_id:
 *                    type: integer
 *                  release_date:
 *                    type: date
 *     responses:
 *       200:
 *         description: Event updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.put("/events/:id", eventController.updateEvent);

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     tags: [Event]
 *     summary: Delete Event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       204:
 *         description: Event deleted
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.delete("/events/:id", eventController.deleteEvent);

module.exports = router;
