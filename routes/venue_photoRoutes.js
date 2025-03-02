const express = require("express");
const router = express.Router();
const venuePhotoController = require("../controller/venue_photo.controller");

/**
 * @swagger
 * tags:
 *   name: VenuePhoto
 *   description: Venue Photo management
 */

/**
 * @swagger
 * /api/venue-photos:
 *  post:
 *     tags: [VenuePhoto]
 *     summary: Upload a new Venue Photo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  venueId:
 *                    type: integer
 *                  photoUrl:
 *                    type: string
 *     responses:
 *      201:
 *        description: Venue photo uploaded
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/venue-photos", venuePhotoController.createVenuePhoto);

/**
 * @swagger
 * /api/venue-photos:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get all Venue Photos
 *     responses:
 *       200:
 *         description: List of Venue Photos
 *       500:
 *         description: Server error
 */
router.get("/venue-photos", venuePhotoController.getVenuePhotos);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *  get:
 *    tags: [VenuePhoto]
 *    summary: Get Venue Photo by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Venue Photo ID
 *    responses:
 *      200:
 *        description: Venue photo details
 *      404:
 *        description: Venue photo not found
 *      500:
 *        description: Server error
 */
router.get("/venue-photos/:id", venuePhotoController.getVenuePhotoById);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   put:
 *     tags: [VenuePhoto]
 *     summary: Update Venue Photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue Photo ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  venueId:
 *                    type: integer
 *                  photoUrl:
 *                    type: string
 *     responses:
 *       200:
 *         description: Venue photo updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.put("/venue-photos/:id", venuePhotoController.updateVenuePhoto);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   delete:
 *     tags: [VenuePhoto]
 *     summary: Delete Venue Photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue Photo ID
 *     responses:
 *       204:
 *         description: Venue photo deleted
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.delete("/venue-photos/:id", venuePhotoController.deleteVenuePhoto);

module.exports = router;
