const express = require("express");
const router = express.Router();
const bookingController = require("../controller/booking.controller");

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking management
 */

/**
 * @swagger
 * /api/booking:
 *  post:
 *     tags: [Booking]
 *     summary: Create a new Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  cart_id:
 *                    type: integer
 *                  createdAt:
 *                    type: string
 *                    format: date
 *                  finished:
 *                    type: string
 *                    format: date
 *                  payment_method_id:
 *                    type: number
 *                  delivery_method_id:
 *                    type: number
 *                  discount_coupon_id:
 *                    type: number
 *                  status_id:
 *                    type: number
 *     responses:
 *      201:
 *        description: Booking created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/booking", bookingController.createBooking);

/**
 * @swagger
 * /api/booking:
 *   get:
 *     tags: [Booking]
 *     summary: Get all Bookings
 *     responses:
 *       200:
 *         description: List of Bookings
 *       500:
 *         description: Server error
 */
router.get("/booking", bookingController.getBookings);

/**
 * @swagger
 * /api/booking/{id}:
 *  get:
 *    tags: [Booking]
 *    summary: Get Booking by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Booking ID
 *    responses:
 *      200:
 *        description: Booking details
 *      404:
 *        description: Booking not found
 *      500:
 *        description: Server error
 */
router.get("/booking/:id", bookingController.getBookingById);

/**
 * @swagger
 * /api/booking/{id}:
 *   put:
 *     tags: [Booking]
 *     summary: Update Booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  cart_id:
 *                    type: number
 *                  createdAt:
 *                    type: string
 *                    format: date
 *                  finished:
 *                    type: string
 *                    format: date
 *                  payment_method_id:
 *                    type: number
 *                  delivery_method_id:
 *                    type: number
 *                  discount_coupon_id:
 *                    type: number
 *                  status_id:
 *                    type: number
 *     responses:
 *       200:
 *         description: Booking updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.put("/booking/:id", bookingController.updateBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   delete:
 *     tags: [Booking]
 *     summary: Delete Booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       204:
 *         description: Booking deleted
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.delete("/booking/:id", bookingController.deleteBooking);

module.exports = router;
