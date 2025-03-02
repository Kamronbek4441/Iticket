const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin.controller");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management
 */

/**
 * @swagger
 * /api/admin:
 *  post:
 *     tags: [Admin]
 *     summary: Create a new Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  login:
 *                    type: string
 *                  hashed_password:
 *                    type: string
 *                  is_active:
 *                    type: boolean
 *                  is_creator:
 *                    type: boolean
 *                  hashed_refresh_token:
 *                    type: string
 *     responses:
 *      201:
 *        description: Admin created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/admin", adminController.createAdmin);

/**
 * @swagger
 * /api/admin:
 *   get:
 *     tags: [Admin]
 *     summary: Get all Admins
 *     responses:
 *       200:
 *         description: List of Admins
 *       500:
 *         description: Server error
 */
router.get("/admin", adminController.getAdmins);

/**
 * @swagger
 * /api/admin/{id}:
 *  get:
 *    tags: [Admin]
 *    summary: Get Admin by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Admin ID
 *    responses:
 *      200:
 *        description: Admin details
 *      404:
 *        description: Admin not found
 *      500:
 *        description: Server error
 */
router.get("/admin/:id", adminController.getAdminById);

/**
 * @swagger
 * /api/admin/{id}:
 *   put:
 *     tags: [Admin]
 *     summary: Update Admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                  login:
 *                    type: string
 *                  hashed_password:
 *                    type: string
 *                  is_active:
 *                    type: string
 *                  is_creator:
 *                    type: string
 *                  hashed_refresh_token:
 *                    type: string
 *     responses:
 *       200:
 *         description: Admin updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.put("/admin/:id", adminController.updateAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Delete Admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       204:
 *         description: Admin deleted
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.delete("/admin/:id", adminController.deleteAdmin);

module.exports = router;
